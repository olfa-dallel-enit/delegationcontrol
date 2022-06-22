package types_test

import (
	"testing"

	"delegationcontrol/x/fdpd/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				PortId: types.PortID,
				LocalDomain: &types.LocalDomain{
					Name:     "38",
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
					Mode:         "29",
					DomainList:   []string{"89"},
					LocationList: []string{"44"},
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
					DomainList:     []string{"84"},
					LocationList:   []string{"62"},
					Cost:           85,
					MaxDelegations: 91,
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
					DomainList:            []string{"22"},
					DelegatorLocationList: []string{"48"},
					Cost:                  65,
					NbDelegations:         14,
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated domain",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid domain count",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 1,
					},
				},
				DomainCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated validity",
			genState: &types.GenesisState{
				ValidityList: []types.Validity{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid validity count",
			genState: &types.GenesisState{
				ValidityList: []types.Validity{
					{
						Id: 1,
					},
				},
				ValidityCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated permission",
			genState: &types.GenesisState{
				PermissionList: []types.Permission{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid permission count",
			genState: &types.GenesisState{
				PermissionList: []types.Permission{
					{
						Id: 1,
					},
				},
				PermissionCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated delegationConditions",
			genState: &types.GenesisState{
				DelegationConditionsList: []types.DelegationConditions{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid delegationConditions count",
			genState: &types.GenesisState{
				DelegationConditionsList: []types.DelegationConditions{
					{
						Id: 1,
					},
				},
				DelegationConditionsCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated delegationDecision",
			genState: &types.GenesisState{
				DelegationDecisionList: []types.DelegationDecision{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid delegationDecision count",
			genState: &types.GenesisState{
				DelegationDecisionList: []types.DelegationDecision{
					{
						Id: 1,
					},
				},
				DelegationDecisionCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated selectionCriteria",
			genState: &types.GenesisState{
				SelectionCriteriaList: []types.SelectionCriteria{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid selectionCriteria count",
			genState: &types.GenesisState{
				SelectionCriteriaList: []types.SelectionCriteria{
					{
						Id: 1,
					},
				},
				SelectionCriteriaCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated delegationRequest",
			genState: &types.GenesisState{
				DelegationRequestList: []types.DelegationRequest{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid delegationRequest count",
			genState: &types.GenesisState{
				DelegationRequestList: []types.DelegationRequest{
					{
						Id: 1,
					},
				},
				DelegationRequestCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated finalDelegationDecision",
			genState: &types.GenesisState{
				FinalDelegationDecisionList: []types.FinalDelegationDecision{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid finalDelegationDecision count",
			genState: &types.GenesisState{
				FinalDelegationDecisionList: []types.FinalDelegationDecision{
					{
						Id: 1,
					},
				},
				FinalDelegationDecisionCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated delegationRequestLog",
			genState: &types.GenesisState{
				DelegationRequestLogList: []types.DelegationRequestLog{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid delegationRequestLog count",
			genState: &types.GenesisState{
				DelegationRequestLogList: []types.DelegationRequestLog{
					{
						Id: 1,
					},
				},
				DelegationRequestLogCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated calculationTime",
			genState: &types.GenesisState{
				CalculationTimeList: []types.CalculationTime{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid calculationTime count",
			genState: &types.GenesisState{
				CalculationTimeList: []types.CalculationTime{
					{
						Id: 1,
					},
				},
				CalculationTimeCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
