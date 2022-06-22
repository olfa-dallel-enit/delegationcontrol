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

func CmdCreateSelectionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-selection-policy [domain-list] [delegator-location-list] [cost] [nb-delegations] [validity]",
		Short: "Create selectionPolicy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDomainList := strings.Split(args[0], listSeparator)
			argDelegatorLocationList := strings.Split(args[1], listSeparator)
			argCost, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argNbDelegations, err := cast.ToUint64E(args[3])
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

			msg := types.NewMsgCreateSelectionPolicy(clientCtx.GetFromAddress().String(), argDomainList, argDelegatorLocationList, argCost, argNbDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSelectionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-selection-policy [domain-list] [delegator-location-list] [cost] [nb-delegations] [validity]",
		Short: "Update selectionPolicy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDomainList := strings.Split(args[0], listSeparator)
			argDelegatorLocationList := strings.Split(args[1], listSeparator)
			argCost, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argNbDelegations, err := cast.ToUint64E(args[3])
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

			msg := types.NewMsgUpdateSelectionPolicy(clientCtx.GetFromAddress().String(), argDomainList, argDelegatorLocationList, argCost, argNbDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSelectionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-selection-policy",
		Short: "Delete selectionPolicy",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSelectionPolicy(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
