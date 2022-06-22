package fdpd

import (
	"delegationcontrol/x/fdpd/keeper"
	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.LocalDomain != nil {
		k.SetLocalDomain(ctx, *genState.LocalDomain)
	}
	// Set all the domain
	for _, elem := range genState.DomainList {
		k.SetDomain(ctx, elem)
	}

	// Set domain count
	k.SetDomainCount(ctx, genState.DomainCount)
	// Set if defined
	if genState.ForwardPolicy != nil {
		k.SetForwardPolicy(ctx, *genState.ForwardPolicy)
	}
	// Set all the validity
	for _, elem := range genState.ValidityList {
		k.SetValidity(ctx, elem)
	}

	// Set validity count
	k.SetValidityCount(ctx, genState.ValidityCount)
	// Set if defined
	if genState.DecisionPolicy != nil {
		k.SetDecisionPolicy(ctx, *genState.DecisionPolicy)
	}
	// Set all the permission
	for _, elem := range genState.PermissionList {
		k.SetPermission(ctx, elem)
	}

	// Set permission count
	k.SetPermissionCount(ctx, genState.PermissionCount)
	// Set all the delegationConditions
	for _, elem := range genState.DelegationConditionsList {
		k.SetDelegationConditions(ctx, elem)
	}

	// Set delegationConditions count
	k.SetDelegationConditionsCount(ctx, genState.DelegationConditionsCount)
	// Set all the delegationDecision
	for _, elem := range genState.DelegationDecisionList {
		k.SetDelegationDecision(ctx, elem)
	}

	// Set delegationDecision count
	k.SetDelegationDecisionCount(ctx, genState.DelegationDecisionCount)
	// Set if defined
	if genState.SelectionPolicy != nil {
		k.SetSelectionPolicy(ctx, *genState.SelectionPolicy)
	}
	// Set all the selectionCriteria
	for _, elem := range genState.SelectionCriteriaList {
		k.SetSelectionCriteria(ctx, elem)
	}

	// Set selectionCriteria count
	k.SetSelectionCriteriaCount(ctx, genState.SelectionCriteriaCount)
	// Set all the delegationRequest
	for _, elem := range genState.DelegationRequestList {
		k.SetDelegationRequest(ctx, elem)
	}

	// Set delegationRequest count
	k.SetDelegationRequestCount(ctx, genState.DelegationRequestCount)
	// Set all the finalDelegationDecision
	for _, elem := range genState.FinalDelegationDecisionList {
		k.SetFinalDelegationDecision(ctx, elem)
	}

	// Set finalDelegationDecision count
	k.SetFinalDelegationDecisionCount(ctx, genState.FinalDelegationDecisionCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	// Get all localDomain
	localDomain, found := k.GetLocalDomain(ctx)
	if found {
		genesis.LocalDomain = &localDomain
	}
	genesis.DomainList = k.GetAllDomain(ctx)
	genesis.DomainCount = k.GetDomainCount(ctx)
	// Get all forwardPolicy
	forwardPolicy, found := k.GetForwardPolicy(ctx)
	if found {
		genesis.ForwardPolicy = &forwardPolicy
	}
	genesis.ValidityList = k.GetAllValidity(ctx)
	genesis.ValidityCount = k.GetValidityCount(ctx)
	// Get all decisionPolicy
	decisionPolicy, found := k.GetDecisionPolicy(ctx)
	if found {
		genesis.DecisionPolicy = &decisionPolicy
	}
	genesis.PermissionList = k.GetAllPermission(ctx)
	genesis.PermissionCount = k.GetPermissionCount(ctx)
	genesis.DelegationConditionsList = k.GetAllDelegationConditions(ctx)
	genesis.DelegationConditionsCount = k.GetDelegationConditionsCount(ctx)
	genesis.DelegationDecisionList = k.GetAllDelegationDecision(ctx)
	genesis.DelegationDecisionCount = k.GetDelegationDecisionCount(ctx)
	// Get all selectionPolicy
	selectionPolicy, found := k.GetSelectionPolicy(ctx)
	if found {
		genesis.SelectionPolicy = &selectionPolicy
	}
	genesis.SelectionCriteriaList = k.GetAllSelectionCriteria(ctx)
	genesis.SelectionCriteriaCount = k.GetSelectionCriteriaCount(ctx)
	genesis.DelegationRequestList = k.GetAllDelegationRequest(ctx)
	genesis.DelegationRequestCount = k.GetDelegationRequestCount(ctx)
	genesis.FinalDelegationDecisionList = k.GetAllFinalDelegationDecision(ctx)
	genesis.FinalDelegationDecisionCount = k.GetFinalDelegationDecisionCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
