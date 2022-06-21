package keeper

import (
	"context"
	"fmt"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePermission(goCtx context.Context, msg *types.MsgCreatePermission) (*types.MsgCreatePermissionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var permission = types.Permission{
		Creator:  msg.Creator,
		Action:   msg.Action,
		Resource: msg.Resource,
	}

	id := k.AppendPermission(
		ctx,
		permission,
	)

	return &types.MsgCreatePermissionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePermission(goCtx context.Context, msg *types.MsgUpdatePermission) (*types.MsgUpdatePermissionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var permission = types.Permission{
		Creator:  msg.Creator,
		Id:       msg.Id,
		Action:   msg.Action,
		Resource: msg.Resource,
	}

	// Checks that the element exists
	val, found := k.GetPermission(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPermission(ctx, permission)

	return &types.MsgUpdatePermissionResponse{}, nil
}

func (k msgServer) DeletePermission(goCtx context.Context, msg *types.MsgDeletePermission) (*types.MsgDeletePermissionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetPermission(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePermission(ctx, msg.Id)

	return &types.MsgDeletePermissionResponse{}, nil
}
