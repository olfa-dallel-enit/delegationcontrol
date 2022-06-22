package cli

import (
	"strconv"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateCalculationTime() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-calculation-time [start-timestamp] [end-timestamp] [duration] [request-label]",
		Short: "Create a new calculationTime",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argStartTimestamp := args[0]
			argEndTimestamp := args[1]
			argDuration, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argRequestLabel := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCalculationTime(clientCtx.GetFromAddress().String(), argStartTimestamp, argEndTimestamp, argDuration, argRequestLabel)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCalculationTime() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-calculation-time [id] [start-timestamp] [end-timestamp] [duration] [request-label]",
		Short: "Update a calculationTime",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argStartTimestamp := args[1]

			argEndTimestamp := args[2]

			argDuration, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			argRequestLabel := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCalculationTime(clientCtx.GetFromAddress().String(), id, argStartTimestamp, argEndTimestamp, argDuration, argRequestLabel)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCalculationTime() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-calculation-time [id]",
		Short: "Delete a calculationTime by id",
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

			msg := types.NewMsgDeleteCalculationTime(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
