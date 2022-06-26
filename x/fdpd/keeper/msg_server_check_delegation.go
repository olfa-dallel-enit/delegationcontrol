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

	switch msg.SelectionCriteria {
	case "lowest-cost":
		k.GetLowestCostBasedDecision(ctx, msg, delegationDecisions)
	case "max-delegatee-nb":
		k.GetMaxDelegateeNbBasedDecision(ctx, msg, delegationDecisions)
	case "min-delegatee-nb":
		k.GetMinDelegateeNbBasedDecision(ctx, msg, delegationDecisions)
	case "max-validity":
		k.GetMaxValidityBasedDecision(ctx, msg, delegationDecisions)
	case "min-validity":
		k.GetMinValidityBasedDecision(ctx, msg, delegationDecisions)
	}

	endTimestamp := time.Now().UnixNano()

	k.AppendCalculationTime(ctx, types.CalculationTime{
		StartTimestamp: cast.ToString(startTimestamp),
		EndTimestamp:   cast.ToString(endTimestamp),
		Duration:       cast.ToUint64(endTimestamp - startTimestamp),
		RequestLabel:   msg.Label,
		Details:        "SelectionCriteria: " + msg.SelectionCriteria,
	})

	return &types.MsgCheckDelegationResponse{}, nil
}

func (k Keeper) GetLowestCostBasedDecision(ctx sdk.Context, msg *types.MsgCheckDelegation, delegationDecisions []types.DelegationDecision) {
	var finalDecision string
	var decisionDomain string
	//var appliedDelegationDecision *types.DelegationDecision

	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
	} else {
		lowestCost := delegationDecisions[0].DelegationConditions.Cost
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
		for _, delegationDecision := range delegationDecisions {
			if delegationDecision.DelegationConditions.Cost < lowestCost {
				lowestCost = delegationDecision.DelegationConditions.Cost
				finalDecision = delegationDecision.Decision
				decisionDomain = delegationDecision.DecisionDomain
				/*appliedDelegationDecision = &types.DelegationDecision{
					Creator: ctx.ChainID(),
					Decision: delegationDecision.Decision,
					DecisionDomain:delegationDecision.DecisionDomain,
					DelegationRequestLabel: delegationDecision.DelegationRequestLabel,
					DelegationConditions:  delegationDecision.DelegationConditions,
				}*/
			}
		}
	}
	k.AppendFinalDelegationDecision(ctx, types.FinalDelegationDecision{
		Creator:                ctx.ChainID(),
		DelegationRequestLabel: msg.Label,
		Decision:               finalDecision,
		DecisionDomain: decisionDomain,
		//DelegationDecision: appliedDelegationDecision,
		Criterion: "lowest-cost",
	})
}

func (k Keeper) GetMaxDelegateeNbBasedDecision(ctx sdk.Context, msg *types.MsgCheckDelegation, delegationDecisions []types.DelegationDecision) {
	var finalDecision string
	var decisionDomain string
	//var appliedDelegationDecision *types.DelegationDecision

	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
	} else {
		maxDelegateeNb := delegationDecisions[0].DelegationConditions.MaxDelegateeNb
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
		for _, delegationDecision := range delegationDecisions {
			if delegationDecision.DelegationConditions.MaxDelegateeNb > maxDelegateeNb {
				maxDelegateeNb = delegationDecision.DelegationConditions.MaxDelegateeNb
				finalDecision = delegationDecision.Decision
				decisionDomain = delegationDecision.DecisionDomain
				/*appliedDelegationDecision = &types.DelegationDecision{
					Creator: ctx.ChainID(),
					Decision: delegationDecision.Decision,
					DecisionDomain:delegationDecision.DecisionDomain,
					DelegationRequestLabel: delegationDecision.DelegationRequestLabel,
					DelegationConditions:  delegationDecision.DelegationConditions,
				}*/
			}
		}
	}
	k.AppendFinalDelegationDecision(ctx, types.FinalDelegationDecision{
		Creator:                ctx.ChainID(),
		DelegationRequestLabel: msg.Label,
		Decision:               finalDecision,
		DecisionDomain: decisionDomain,
		//DelegationDecision: appliedDelegationDecision,
		Criterion: "max-delegatee-nb",
	})
}

func (k Keeper) GetMinDelegateeNbBasedDecision(ctx sdk.Context, msg *types.MsgCheckDelegation, delegationDecisions []types.DelegationDecision) {
	var finalDecision string
	var decisionDomain string
	//var appliedDelegationDecision *types.DelegationDecision

	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
	} else {
		minDelegateeNb := delegationDecisions[0].DelegationConditions.MaxDelegateeNb
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
		for _, delegationDecision := range delegationDecisions {
			if delegationDecision.DelegationConditions.MaxDelegateeNb < minDelegateeNb {
				minDelegateeNb = delegationDecision.DelegationConditions.MaxDelegateeNb
				finalDecision = delegationDecision.Decision
				decisionDomain = delegationDecision.DecisionDomain
				/*appliedDelegationDecision = &types.DelegationDecision{
					Creator: ctx.ChainID(),
					Decision: delegationDecision.Decision,
					DecisionDomain:delegationDecision.DecisionDomain,
					DelegationRequestLabel: delegationDecision.DelegationRequestLabel,
					DelegationConditions:  delegationDecision.DelegationConditions,
				}*/
			}
		}
	}
	k.AppendFinalDelegationDecision(ctx, types.FinalDelegationDecision{
		Creator:                ctx.ChainID(),
		DelegationRequestLabel: msg.Label,
		Decision:               finalDecision,
		DecisionDomain: decisionDomain,
		//DelegationDecision: appliedDelegationDecision,
		Criterion: "min-delegatee-nb",
	})
}

func (k Keeper) GetMaxValidityBasedDecision(ctx sdk.Context, msg *types.MsgCheckDelegation, delegationDecisions []types.DelegationDecision) {
	var finalDecision string
	var decisionDomain string
	//var appliedDelegationDecision *types.DelegationDecision

	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
	} else {
		maxValidityPeriod := cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotBefore).UnixNano()
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
		for _, delegationDecision := range delegationDecisions {
			validityPeriod := cast.ToTime(delegationDecision.DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecision.DelegationConditions.Validity.NotBefore).UnixNano()
			if maxValidityPeriod < validityPeriod {
				maxValidityPeriod = validityPeriod
				finalDecision = delegationDecision.Decision
				decisionDomain = delegationDecision.DecisionDomain
				/*appliedDelegationDecision = &types.DelegationDecision{
					Creator: ctx.ChainID(),
					Decision: delegationDecision.Decision,
					DecisionDomain:delegationDecision.DecisionDomain,
					DelegationRequestLabel: delegationDecision.DelegationRequestLabel,
					DelegationConditions:  delegationDecision.DelegationConditions,
				}*/
			}
		}
	}
	k.AppendFinalDelegationDecision(ctx, types.FinalDelegationDecision{
		Creator:                ctx.ChainID(),
		DelegationRequestLabel: msg.Label,
		Decision:               finalDecision,
		DecisionDomain: decisionDomain,
		//DelegationDecision: appliedDelegationDecision,
		Criterion: "max-validity",
	})
}

func (k Keeper) GetMinValidityBasedDecision(ctx sdk.Context, msg *types.MsgCheckDelegation, delegationDecisions []types.DelegationDecision) {
	var finalDecision string
	var decisionDomain string
	//var appliedDelegationDecision *types.DelegationDecision

	if len(delegationDecisions) == 0 {
		finalDecision = "deny"
	} else if len(delegationDecisions) == 1 {
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
	} else {
		minValidityPeriod := cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecisions[0].DelegationConditions.Validity.NotBefore).UnixNano()
		finalDecision = delegationDecisions[0].Decision
		decisionDomain = delegationDecisions[0].DecisionDomain
		for _, delegationDecision := range delegationDecisions {
			validityPeriod := cast.ToTime(delegationDecision.DelegationConditions.Validity.NotAfter).UnixNano() - cast.ToTime(delegationDecision.DelegationConditions.Validity.NotBefore).UnixNano()
			if minValidityPeriod > validityPeriod {
				minValidityPeriod = validityPeriod
				finalDecision = delegationDecision.Decision
				decisionDomain = delegationDecision.DecisionDomain
				/*appliedDelegationDecision = &types.DelegationDecision{
					Creator: ctx.ChainID(),
					Decision: delegationDecision.Decision,
					DecisionDomain:delegationDecision.DecisionDomain,
					DelegationRequestLabel: delegationDecision.DelegationRequestLabel,
					DelegationConditions:  delegationDecision.DelegationConditions,
				}*/
			}
		}
	}
	k.AppendFinalDelegationDecision(ctx, types.FinalDelegationDecision{
		Creator:                ctx.ChainID(),
		DelegationRequestLabel: msg.Label,
		Decision:               finalDecision,
		DecisionDomain: decisionDomain,
		//DelegationDecision: appliedDelegationDecision,
		Criterion: "min-validity",
	})
}
