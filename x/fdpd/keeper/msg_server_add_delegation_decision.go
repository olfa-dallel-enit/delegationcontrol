package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AddDelegationDecision(goCtx context.Context, msg *types.MsgAddDelegationDecision) (*types.MsgAddDelegationDecisionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	k.AppendDelegationDecision(ctx, types.DelegationDecision{
		Creator: ctx.ChainID(),
		Decision: msg.Decision,
		DecisionDomain: msg.DecisionDomain,
		DelegationRequestLabel: msg.DelegationRequestLabel,
		DelegationConditions: &types.DelegationConditions{
			Creator: ctx.ChainID(),
			Cost: msg.DelegationConditions.Cost,
			MaxDelegateeNb: msg.DelegationConditions.MaxDelegateeNb,
			Validity: &types.Validity{
				Creator: ctx.ChainID(),
				NotBefore: msg.DelegationConditions.Validity.NotBefore,
				NotAfter: msg.DelegationConditions.Validity.NotAfter,
			},
		},
	})

	return &types.MsgAddDelegationDecisionResponse{}, nil
}
