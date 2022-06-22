package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/spf13/cast"

	"time"
)

func (k msgServer) CheckDelegation(goCtx context.Context, msg *types.MsgCheckDelegation) (*types.MsgCheckDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	startTimestamp := time.Now().UnixNano()

	delegationDecisions := k.GetDelegationDecisionByLabel(ctx, msg.Label)

	finalDecision := "not applicable"
	switch msg.SelectionCriteria {
	case "lowest-cost":
		finalDecision = GetLowestCostBasedDecision(delegationDecisions)
	case "max-delegatee-nb":
		finalDecision = GetMaxDelegateeNbBasedDecision(delegationDecisions)
	case "min-delegatee-nb":
		finalDecision = GetMinDelegateeNbBasedDecision(delegationDecisions)
	case "max-validity":
		finalDecision = GetMaxValidityBasedDecision(delegationDecisions)
	case "min-validity":
		finalDecision = GetMinValidityBasedDecision(delegationDecisions)
	}

	k.AppendFinalDelegationDecision(ctx, types.FinalDelegationDecision{
		Creator:                ctx.ChainID(),
		DelegationRequestLabel: msg.Label,
		Decision:               finalDecision,
	})

	endTimestamp := time.Now().UnixNano()

	k.AppendCalculationTime(ctx, types.CalculationTime{
		StartTimestamp: cast.ToString(startTimestamp),
		EndTimestamp: cast.ToString(endTimestamp),
		Duration: cast.ToUint64(endTimestamp - startTimestamp),
		RequestLabel: msg.Label,
		Details: "SelectionCriteria: " + msg.SelectionCriteria,
	})

	return &types.MsgCheckDelegationResponse{}, nil
}

func GetLowestCostBasedDecision(delegationDecisions []types.DelegationDecision) (finalDecision string) {
	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
	} else {
		lowestCost := delegationDecisions[0].DelegationConditions.Cost
		finalDecision = delegationDecisions[0].Decision
		for _, delegationDecision := range delegationDecisions {
			if delegationDecision.DelegationConditions.Cost < lowestCost {
				lowestCost = delegationDecision.DelegationConditions.Cost
				finalDecision = delegationDecision.Decision
			}
		}
	}
	return finalDecision
}

func GetMaxDelegateeNbBasedDecision(delegationDecisions []types.DelegationDecision) (finalDecision string) {
	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
	} else {
		maxDelegateeNb := delegationDecisions[0].DelegationConditions.MaxDelegateeNb
		finalDecision = delegationDecisions[0].Decision
		for _, delegationDecision := range delegationDecisions {
			if delegationDecision.DelegationConditions.MaxDelegateeNb > maxDelegateeNb {
				maxDelegateeNb = delegationDecision.DelegationConditions.MaxDelegateeNb
				finalDecision = delegationDecision.Decision
			}
		}
	}
	return finalDecision
}

func GetMinDelegateeNbBasedDecision(delegationDecisions []types.DelegationDecision) (finalDecision string) {
	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
	} else {
		minDelegateeNb := delegationDecisions[0].DelegationConditions.MaxDelegateeNb
		finalDecision = delegationDecisions[0].Decision
		for _, delegationDecision := range delegationDecisions {
			if delegationDecision.DelegationConditions.MaxDelegateeNb < minDelegateeNb {
				minDelegateeNb = delegationDecision.DelegationConditions.MaxDelegateeNb
				finalDecision = delegationDecision.Decision
			}
		}
	}
	return finalDecision
}

func GetMaxValidityBasedDecision(delegationDecisions []types.DelegationDecision) (finalDecision string) {
	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
	} else {
		maxValidityPeriod := cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotBefore).UnixNano()
		finalDecision = delegationDecisions[0].Decision
		for _, delegationDecision := range delegationDecisions {
			validityPeriod := cast.ToTime(delegationDecision.DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecision.DelegationConditions.Validity.NotBefore).UnixNano()
			if maxValidityPeriod < validityPeriod {
				maxValidityPeriod = validityPeriod
				finalDecision = delegationDecision.Decision
			}
		}
	}
	return finalDecision
}

func GetMinValidityBasedDecision(delegationDecisions []types.DelegationDecision) (finalDecision string) {
	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
	} else {
		minValidityPeriod := cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotBefore).UnixNano()
		finalDecision = delegationDecisions[0].Decision
		for _, delegationDecision := range delegationDecisions {
			validityPeriod := cast.ToTime(delegationDecision.DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecision.DelegationConditions.Validity.NotBefore).UnixNano()
			if minValidityPeriod > validityPeriod {
				minValidityPeriod = validityPeriod
				finalDecision = delegationDecision.Decision
			}
		}
	}
	return finalDecision
}
