package keeper

import (
	"context"
	"fmt"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateSelectionCriteria(goCtx context.Context, msg *types.MsgCreateSelectionCriteria) (*types.MsgCreateSelectionCriteriaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var selectionCriteria = types.SelectionCriteria{
		Creator:               msg.Creator,
		DomainList:            msg.DomainList,
		DelegatorLocationList: msg.DelegatorLocationList,
		Cost:                  msg.Cost,
		NbDelegations:         msg.NbDelegations,
		Validity:              msg.Validity,
	}

	id := k.AppendSelectionCriteria(
		ctx,
		selectionCriteria,
	)

	return &types.MsgCreateSelectionCriteriaResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSelectionCriteria(goCtx context.Context, msg *types.MsgUpdateSelectionCriteria) (*types.MsgUpdateSelectionCriteriaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var selectionCriteria = types.SelectionCriteria{
		Creator:               msg.Creator,
		Id:                    msg.Id,
		DomainList:            msg.DomainList,
		DelegatorLocationList: msg.DelegatorLocationList,
		Cost:                  msg.Cost,
		NbDelegations:         msg.NbDelegations,
		Validity:              msg.Validity,
	}

	// Checks that the element exists
	val, found := k.GetSelectionCriteria(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSelectionCriteria(ctx, selectionCriteria)

	return &types.MsgUpdateSelectionCriteriaResponse{}, nil
}

func (k msgServer) DeleteSelectionCriteria(goCtx context.Context, msg *types.MsgDeleteSelectionCriteria) (*types.MsgDeleteSelectionCriteriaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetSelectionCriteria(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSelectionCriteria(ctx, msg.Id)

	return &types.MsgDeleteSelectionCriteriaResponse{}, nil
}
