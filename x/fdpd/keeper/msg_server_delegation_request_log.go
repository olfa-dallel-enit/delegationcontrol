package keeper

import (
	"context"
	"fmt"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDelegationRequestLog(goCtx context.Context, msg *types.MsgCreateDelegationRequestLog) (*types.MsgCreateDelegationRequestLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationRequestLog = types.DelegationRequestLog{
		Creator:      msg.Creator,
		Transaction:  msg.Transaction,
		RequestLabel: msg.RequestLabel,
		Details:      msg.Details,
		Function:     msg.Function,
	}

	id := k.AppendDelegationRequestLog(
		ctx,
		delegationRequestLog,
	)

	return &types.MsgCreateDelegationRequestLogResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationRequestLog(goCtx context.Context, msg *types.MsgUpdateDelegationRequestLog) (*types.MsgUpdateDelegationRequestLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationRequestLog = types.DelegationRequestLog{
		Creator:      msg.Creator,
		Id:           msg.Id,
		Transaction:  msg.Transaction,
		RequestLabel: msg.RequestLabel,
		Details:      msg.Details,
		Function:     msg.Function,
	}

	// Checks that the element exists
	val, found := k.GetDelegationRequestLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationRequestLog(ctx, delegationRequestLog)

	return &types.MsgUpdateDelegationRequestLogResponse{}, nil
}

func (k msgServer) DeleteDelegationRequestLog(goCtx context.Context, msg *types.MsgDeleteDelegationRequestLog) (*types.MsgDeleteDelegationRequestLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationRequestLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationRequestLog(ctx, msg.Id)

	return &types.MsgDeleteDelegationRequestLogResponse{}, nil
}
