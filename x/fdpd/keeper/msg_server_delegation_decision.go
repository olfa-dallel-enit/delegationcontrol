package keeper

import (
	"context"
	"fmt"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDelegationDecision(goCtx context.Context, msg *types.MsgCreateDelegationDecision) (*types.MsgCreateDelegationDecisionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationDecision = types.DelegationDecision{
		Creator:              msg.Creator,
		Decision:             msg.Decision,
		DelegationConditions: msg.DelegationConditions,
	}

	id := k.AppendDelegationDecision(
		ctx,
		delegationDecision,
	)

	return &types.MsgCreateDelegationDecisionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationDecision(goCtx context.Context, msg *types.MsgUpdateDelegationDecision) (*types.MsgUpdateDelegationDecisionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationDecision = types.DelegationDecision{
		Creator:              msg.Creator,
		Id:                   msg.Id,
		Decision:             msg.Decision,
		DelegationConditions: msg.DelegationConditions,
	}

	// Checks that the element exists
	val, found := k.GetDelegationDecision(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationDecision(ctx, delegationDecision)

	return &types.MsgUpdateDelegationDecisionResponse{}, nil
}

func (k msgServer) DeleteDelegationDecision(goCtx context.Context, msg *types.MsgDeleteDelegationDecision) (*types.MsgDeleteDelegationDecisionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationDecision(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationDecision(ctx, msg.Id)

	return &types.MsgDeleteDelegationDecisionResponse{}, nil
}
