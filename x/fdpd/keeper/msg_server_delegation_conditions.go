package keeper

import (
	"context"
	"fmt"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDelegationConditions(goCtx context.Context, msg *types.MsgCreateDelegationConditions) (*types.MsgCreateDelegationConditionsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationConditions = types.DelegationConditions{
		Creator:        msg.Creator,
		Cost:           msg.Cost,
		MaxDelegateeNb: msg.MaxDelegateeNb,
		Validity:       msg.Validity,
	}

	id := k.AppendDelegationConditions(
		ctx,
		delegationConditions,
	)

	return &types.MsgCreateDelegationConditionsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationConditions(goCtx context.Context, msg *types.MsgUpdateDelegationConditions) (*types.MsgUpdateDelegationConditionsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationConditions = types.DelegationConditions{
		Creator:        msg.Creator,
		Id:             msg.Id,
		Cost:           msg.Cost,
		MaxDelegateeNb: msg.MaxDelegateeNb,
		Validity:       msg.Validity,
	}

	// Checks that the element exists
	val, found := k.GetDelegationConditions(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationConditions(ctx, delegationConditions)

	return &types.MsgUpdateDelegationConditionsResponse{}, nil
}

func (k msgServer) DeleteDelegationConditions(goCtx context.Context, msg *types.MsgDeleteDelegationConditions) (*types.MsgDeleteDelegationConditionsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationConditions(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationConditions(ctx, msg.Id)

	return &types.MsgDeleteDelegationConditionsResponse{}, nil
}
