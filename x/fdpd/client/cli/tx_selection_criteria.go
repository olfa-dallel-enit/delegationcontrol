package cli

import (
	"strconv"

	"delegationcontrol/x/fdpd/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateSelectionCriteria() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-selection-criteria [domain-list] [delegator-location-list] [cost] [nb-delegations] [validity]",
		Short: "Create a new selectionCriteria",
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

			msg := types.NewMsgCreateSelectionCriteria(clientCtx.GetFromAddress().String(), argDomainList, argDelegatorLocationList, argCost, argNbDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSelectionCriteria() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-selection-criteria [id] [domain-list] [delegator-location-list] [cost] [nb-delegations] [validity]",
		Short: "Update a selectionCriteria",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argDomainList := strings.Split(args[1], listSeparator)

			argDelegatorLocationList := strings.Split(args[2], listSeparator)

			argCost, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			argNbDelegations, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}

			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[5]), argValidity)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSelectionCriteria(clientCtx.GetFromAddress().String(), id, argDomainList, argDelegatorLocationList, argCost, argNbDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSelectionCriteria() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-selection-criteria [id]",
		Short: "Delete a selectionCriteria by id",
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

			msg := types.NewMsgDeleteSelectionCriteria(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
