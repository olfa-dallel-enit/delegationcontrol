package cli

import (
	"strconv"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCalculateRequestDelegationTiming() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "calculate-request-delegation-timing [request-label]",
		Short: "Broadcast message calculate-request-delegation-timing",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argRequestLabel := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCalculateRequestDelegationTiming(
				clientCtx.GetFromAddress().String(),
				argRequestLabel,
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
