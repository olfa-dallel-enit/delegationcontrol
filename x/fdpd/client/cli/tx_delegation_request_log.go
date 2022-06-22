package cli

import (
	"strconv"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateDelegationRequestLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-delegation-request-log [transaction] [request-label] [details] [function]",
		Short: "Create a new delegationRequestLog",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTransaction := args[0]
			argRequestLabel := args[1]
			argDetails := args[2]
			argFunction := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDelegationRequestLog(clientCtx.GetFromAddress().String(), argTransaction, argRequestLabel, argDetails, argFunction)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDelegationRequestLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-delegation-request-log [id] [transaction] [request-label] [details] [function]",
		Short: "Update a delegationRequestLog",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argTransaction := args[1]

			argRequestLabel := args[2]

			argDetails := args[3]

			argFunction := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDelegationRequestLog(clientCtx.GetFromAddress().String(), id, argTransaction, argRequestLabel, argDetails, argFunction)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDelegationRequestLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-delegation-request-log [id]",
		Short: "Delete a delegationRequestLog by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDelegationRequestLog(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
