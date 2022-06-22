package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateSelectionPolicy(goCtx context.Context, msg *types.MsgCreateSelectionPolicy) (*types.MsgCreateSelectionPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetSelectionPolicy(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var selectionPolicy = types.SelectionPolicy{
		Creator:               msg.Creator,
		DomainList:            msg.DomainList,
		DelegatorLocationList: msg.DelegatorLocationList,
		Cost:                  msg.Cost,
		NbDelegations:         msg.NbDelegations,
		Validity:              msg.Validity,
	}

	k.SetSelectionPolicy(
		ctx,
		selectionPolicy,
	)
	return &types.MsgCreateSelectionPolicyResponse{}, nil
}

func (k msgServer) UpdateSelectionPolicy(goCtx context.Context, msg *types.MsgUpdateSelectionPolicy) (*types.MsgUpdateSelectionPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSelectionPolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var selectionPolicy = types.SelectionPolicy{
		Creator:               msg.Creator,
		DomainList:            msg.DomainList,
		DelegatorLocationList: msg.DelegatorLocationList,
		Cost:                  msg.Cost,
		NbDelegations:         msg.NbDelegations,
		Validity:              msg.Validity,
	}

	k.SetSelectionPolicy(ctx, selectionPolicy)

	return &types.MsgUpdateSelectionPolicyResponse{}, nil
}

func (k msgServer) DeleteSelectionPolicy(goCtx context.Context, msg *types.MsgDeleteSelectionPolicy) (*types.MsgDeleteSelectionPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSelectionPolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSelectionPolicy(ctx)

	return &types.MsgDeleteSelectionPolicyResponse{}, nil
}
