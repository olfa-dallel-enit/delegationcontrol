package cli

import (
	"strconv"

	"delegationcontrol/x/fdpd/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdAddDelegationDecision() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-delegation-decision [decision] [delegation-conditions] [decision-domain] [delegation-request-label]",
		Short: "Broadcast message add-delegation-decision",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDecision := args[0]
			argDelegationConditions := new(types.DelegationConditions)
			err = json.Unmarshal([]byte(args[1]), argDelegationConditions)
			if err != nil {
				return err
			}
			argDecisionDomain := args[2]
			argDelegationRequestLabel := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddDelegationDecision(
				clientCtx.GetFromAddress().String(),
				argDecision,
				argDelegationConditions,
				argDecisionDomain,
				argDelegationRequestLabel,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
