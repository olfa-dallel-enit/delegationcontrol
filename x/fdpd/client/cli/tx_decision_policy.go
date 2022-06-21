package cli

import (
	"delegationcontrol/x/fdpd/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-decision-policy [domain-list] [location-list] [cost] [max-delegations] [validity]",
		Short: "Create decisionPolicy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDomainList := strings.Split(args[0], listSeparator)
			argLocationList := strings.Split(args[1], listSeparator)
			argCost, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argMaxDelegations, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[4]), argValidity)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDecisionPolicy(clientCtx.GetFromAddress().String(), argDomainList, argLocationList, argCost, argMaxDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-decision-policy [domain-list] [location-list] [cost] [max-delegations] [validity]",
		Short: "Update decisionPolicy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDomainList := strings.Split(args[0], listSeparator)
			argLocationList := strings.Split(args[1], listSeparator)
			argCost, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argMaxDelegations, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[4]), argValidity)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDecisionPolicy(clientCtx.GetFromAddress().String(), argDomainList, argLocationList, argCost, argMaxDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-decision-policy",
		Short: "Delete decisionPolicy",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDecisionPolicy(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
