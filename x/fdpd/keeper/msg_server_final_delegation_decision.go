package keeper

import (
	"context"
	"fmt"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateFinalDelegationDecision(goCtx context.Context, msg *types.MsgCreateFinalDelegationDecision) (*types.MsgCreateFinalDelegationDecisionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var finalDelegationDecision = types.FinalDelegationDecision{
		Creator:                msg.Creator,
		DelegationRequestLabel: msg.DelegationRequestLabel,
		Decision:               msg.Decision,
	}

	id := k.AppendFinalDelegationDecision(
		ctx,
		finalDelegationDecision,
	)

	return &types.MsgCreateFinalDelegationDecisionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateFinalDelegationDecision(goCtx context.Context, msg *types.MsgUpdateFinalDelegationDecision) (*types.MsgUpdateFinalDelegationDecisionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var finalDelegationDecision = types.FinalDelegationDecision{
		Creator:                msg.Creator,
		Id:                     msg.Id,
		DelegationRequestLabel: msg.DelegationRequestLabel,
		Decision:               msg.Decision,
	}

	// Checks that the element exists
	val, found := k.GetFinalDelegationDecision(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetFinalDelegationDecision(ctx, finalDelegationDecision)

	return &types.MsgUpdateFinalDelegationDecisionResponse{}, nil
}

func (k msgServer) DeleteFinalDelegationDecision(goCtx context.Context, msg *types.MsgDeleteFinalDelegationDecision) (*types.MsgDeleteFinalDelegationDecisionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetFinalDelegationDecision(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveFinalDelegationDecision(ctx, msg.Id)

	return &types.MsgDeleteFinalDelegationDecisionResponse{}, nil
}
