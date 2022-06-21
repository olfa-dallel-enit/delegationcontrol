package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDecisionPolicy(goCtx context.Context, msg *types.MsgCreateDecisionPolicy) (*types.MsgCreateDecisionPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetDecisionPolicy(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var decisionPolicy = types.DecisionPolicy{
		Creator:        msg.Creator,
		DomainList:     msg.DomainList,
		LocationList:   msg.LocationList,
		Cost:           msg.Cost,
		MaxDelegations: msg.MaxDelegations,
		Validity:       msg.Validity,
	}

	k.SetDecisionPolicy(
		ctx,
		decisionPolicy,
	)
	return &types.MsgCreateDecisionPolicyResponse{}, nil
}

func (k msgServer) UpdateDecisionPolicy(goCtx context.Context, msg *types.MsgUpdateDecisionPolicy) (*types.MsgUpdateDecisionPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDecisionPolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var decisionPolicy = types.DecisionPolicy{
		Creator:        msg.Creator,
		DomainList:     msg.DomainList,
		LocationList:   msg.LocationList,
		Cost:           msg.Cost,
		MaxDelegations: msg.MaxDelegations,
		Validity:       msg.Validity,
	}

	k.SetDecisionPolicy(ctx, decisionPolicy)

	return &types.MsgUpdateDecisionPolicyResponse{}, nil
}

func (k msgServer) DeleteDecisionPolicy(goCtx context.Context, msg *types.MsgDeleteDecisionPolicy) (*types.MsgDeleteDecisionPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDecisionPolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDecisionPolicy(ctx)

	return &types.MsgDeleteDecisionPolicyResponse{}, nil
}
