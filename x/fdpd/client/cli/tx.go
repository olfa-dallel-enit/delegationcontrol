package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"delegationcontrol/x/fdpd/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateLocalDomain())
	cmd.AddCommand(CmdUpdateLocalDomain())
	cmd.AddCommand(CmdDeleteLocalDomain())
	cmd.AddCommand(CmdCreateDomain())
	cmd.AddCommand(CmdUpdateDomain())
	cmd.AddCommand(CmdDeleteDomain())
	cmd.AddCommand(CmdSendEstablishCooperation())
	cmd.AddCommand(CmdCreateForwardPolicy())
	cmd.AddCommand(CmdUpdateForwardPolicy())
	cmd.AddCommand(CmdDeleteForwardPolicy())
	cmd.AddCommand(CmdCreateValidity())
	cmd.AddCommand(CmdUpdateValidity())
	cmd.AddCommand(CmdDeleteValidity())
	cmd.AddCommand(CmdCreateDecisionPolicy())
	cmd.AddCommand(CmdUpdateDecisionPolicy())
	cmd.AddCommand(CmdDeleteDecisionPolicy())
	cmd.AddCommand(CmdCreatePermission())
	cmd.AddCommand(CmdUpdatePermission())
	cmd.AddCommand(CmdDeletePermission())
	cmd.AddCommand(CmdCreateDelegationConditions())
	cmd.AddCommand(CmdUpdateDelegationConditions())
	cmd.AddCommand(CmdDeleteDelegationConditions())
	cmd.AddCommand(CmdSendRequestDelegation())
	cmd.AddCommand(CmdConfigureLocalDomain())
	cmd.AddCommand(CmdCreateDelegationDecision())
	cmd.AddCommand(CmdUpdateDelegationDecision())
	cmd.AddCommand(CmdDeleteDelegationDecision())
	cmd.AddCommand(CmdCreateSelectionPolicy())
	cmd.AddCommand(CmdUpdateSelectionPolicy())
	cmd.AddCommand(CmdDeleteSelectionPolicy())
	cmd.AddCommand(CmdCreateSelectionCriteria())
	cmd.AddCommand(CmdUpdateSelectionCriteria())
	cmd.AddCommand(CmdDeleteSelectionCriteria())
	cmd.AddCommand(CmdCheckDelegation())
	// this line is used by starport scaffolding # 1

	return cmd
}
