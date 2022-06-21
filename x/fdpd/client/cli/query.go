package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"delegationcontrol/x/fdpd/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group fdpd queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdShowLocalDomain())
	cmd.AddCommand(CmdListDomain())
	cmd.AddCommand(CmdShowDomain())
	cmd.AddCommand(CmdShowForwardPolicy())
	cmd.AddCommand(CmdListValidity())
	cmd.AddCommand(CmdShowValidity())
	cmd.AddCommand(CmdShowDecisionPolicy())
	cmd.AddCommand(CmdListPermission())
	cmd.AddCommand(CmdShowPermission())
	cmd.AddCommand(CmdListDelegationConditions())
	cmd.AddCommand(CmdShowDelegationConditions())
	cmd.AddCommand(CmdListDelegationDecision())
	cmd.AddCommand(CmdShowDelegationDecision())
	// this line is used by starport scaffolding # 1

	return cmd
}
