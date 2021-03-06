package fdpd_test

import (
	"testing"

	keepertest "delegationcontrol/testutil/keeper"
	"delegationcontrol/testutil/nullify"
	"delegationcontrol/x/fdpd"
	"delegationcontrol/x/fdpd/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		LocalDomain: &types.LocalDomain{
			Name:     "28",
			Location: "41",
		},
		DomainList: []types.Domain{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DomainCount: 2,
		ForwardPolicy: &types.ForwardPolicy{
			Mode:         "80",
			DomainList:   []string{"26"},
			LocationList: []string{"66"},
		},
		ValidityList: []types.Validity{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ValidityCount: 2,
		DecisionPolicy: &types.DecisionPolicy{
			DomainList:     []string{"38"},
			LocationList:   []string{"84"},
			Cost:           91,
			MaxDelegations: 21,
			Validity:       new(types.Validity),
		},
		PermissionList: []types.Permission{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PermissionCount: 2,
		DelegationConditionsList: []types.DelegationConditions{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationConditionsCount: 2,
		DelegationDecisionList: []types.DelegationDecision{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationDecisionCount: 2,
		SelectionPolicy: &types.SelectionPolicy{
			DomainList:            []string{"94"},
			DelegatorLocationList: []string{"89"},
			Cost:                  96,
			NbDelegations:         73,
			Validity:              new(types.Validity),
		},
		SelectionCriteriaList: []types.SelectionCriteria{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		SelectionCriteriaCount: 2,
		DelegationRequestList: []types.DelegationRequest{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationRequestCount: 2,
		FinalDelegationDecisionList: []types.FinalDelegationDecision{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		FinalDelegationDecisionCount: 2,
		DelegationRequestLogList: []types.DelegationRequestLog{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationRequestLogCount: 2,
		CalculationTimeList: []types.CalculationTime{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CalculationTimeCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.FdpdKeeper(t)
	fdpd.InitGenesis(ctx, *k, genesisState)
	got := fdpd.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.Equal(t, genesisState.LocalDomain, got.LocalDomain)
	require.ElementsMatch(t, genesisState.DomainList, got.DomainList)
	require.Equal(t, genesisState.DomainCount, got.DomainCount)
	require.Equal(t, genesisState.ForwardPolicy, got.ForwardPolicy)
	require.ElementsMatch(t, genesisState.ValidityList, got.ValidityList)
	require.Equal(t, genesisState.ValidityCount, got.ValidityCount)
	require.Equal(t, genesisState.DecisionPolicy, got.DecisionPolicy)
	require.ElementsMatch(t, genesisState.PermissionList, got.PermissionList)
	require.Equal(t, genesisState.PermissionCount, got.PermissionCount)
	require.ElementsMatch(t, genesisState.DelegationConditionsList, got.DelegationConditionsList)
	require.Equal(t, genesisState.DelegationConditionsCount, got.DelegationConditionsCount)
	require.ElementsMatch(t, genesisState.DelegationDecisionList, got.DelegationDecisionList)
	require.Equal(t, genesisState.DelegationDecisionCount, got.DelegationDecisionCount)
	require.Equal(t, genesisState.SelectionPolicy, got.SelectionPolicy)
	require.ElementsMatch(t, genesisState.SelectionCriteriaList, got.SelectionCriteriaList)
	require.Equal(t, genesisState.SelectionCriteriaCount, got.SelectionCriteriaCount)
	require.ElementsMatch(t, genesisState.DelegationRequestList, got.DelegationRequestList)
	require.Equal(t, genesisState.DelegationRequestCount, got.DelegationRequestCount)
	require.ElementsMatch(t, genesisState.FinalDelegationDecisionList, got.FinalDelegationDecisionList)
	require.Equal(t, genesisState.FinalDelegationDecisionCount, got.FinalDelegationDecisionCount)
	require.ElementsMatch(t, genesisState.DelegationRequestLogList, got.DelegationRequestLogList)
	require.Equal(t, genesisState.DelegationRequestLogCount, got.DelegationRequestLogCount)
	require.ElementsMatch(t, genesisState.CalculationTimeList, got.CalculationTimeList)
	require.Equal(t, genesisState.CalculationTimeCount, got.CalculationTimeCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
