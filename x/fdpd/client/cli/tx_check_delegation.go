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

func CmdCheckDelegation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "check-delegation [delegation-action] [permission] [selection-criteria]",
		Short: "Broadcast message check-delegation",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDelegationAction := args[0]
			argPermission := new(types.Permission)
			err = json.Unmarshal([]byte(args[1]), argPermission)
			if err != nil {
				return err
			}
			argSelectionCriteria := new(types.SelectionCriteria)
			err = json.Unmarshal([]byte(args[2]), argSelectionCriteria)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCheckDelegation(
				clientCtx.GetFromAddress().String(),
				argDelegationAction,
				argPermission,
				argSelectionCriteria,
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
