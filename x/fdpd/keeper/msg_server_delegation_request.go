package keeper

import (
	"context"
	"fmt"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDelegationRequest(goCtx context.Context, msg *types.MsgCreateDelegationRequest) (*types.MsgCreateDelegationRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationRequest = types.DelegationRequest{
		Creator:          msg.Creator,
		Label:            msg.Label,
		DelegationAction: msg.DelegationAction,
		Permission:       msg.Permission,
	}

	id := k.AppendDelegationRequest(
		ctx,
		delegationRequest,
	)

	return &types.MsgCreateDelegationRequestResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationRequest(goCtx context.Context, msg *types.MsgUpdateDelegationRequest) (*types.MsgUpdateDelegationRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationRequest = types.DelegationRequest{
		Creator:          msg.Creator,
		Id:               msg.Id,
		Label:            msg.Label,
		DelegationAction: msg.DelegationAction,
		Permission:       msg.Permission,
	}

	// Checks that the element exists
	val, found := k.GetDelegationRequest(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationRequest(ctx, delegationRequest)

	return &types.MsgUpdateDelegationRequestResponse{}, nil
}

func (k msgServer) DeleteDelegationRequest(goCtx context.Context, msg *types.MsgDeleteDelegationRequest) (*types.MsgDeleteDelegationRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationRequest(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationRequest(ctx, msg.Id)

	return &types.MsgDeleteDelegationRequestResponse{}, nil
}
