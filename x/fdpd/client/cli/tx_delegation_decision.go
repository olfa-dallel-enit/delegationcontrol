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

func CmdCreateDelegationDecision() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-delegation-decision [decision] [delegation-conditions]",
		Short: "Create a new delegationDecision",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDecision := args[0]
			argDelegationConditions := new(types.DelegationConditions)
			err = json.Unmarshal([]byte(args[1]), argDelegationConditions)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDelegationDecision(clientCtx.GetFromAddress().String(), argDecision, argDelegationConditions)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDelegationDecision() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-delegation-decision [id] [decision] [delegation-conditions]",
		Short: "Update a delegationDecision",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argDecision := args[1]

			argDelegationConditions := new(types.DelegationConditions)
			err = json.Unmarshal([]byte(args[2]), argDelegationConditions)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDelegationDecision(clientCtx.GetFromAddress().String(), id, argDecision, argDelegationConditions)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDelegationDecision() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-delegation-decision [id]",
		Short: "Delete a delegationDecision by id",
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

			msg := types.NewMsgDeleteDelegationDecision(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
