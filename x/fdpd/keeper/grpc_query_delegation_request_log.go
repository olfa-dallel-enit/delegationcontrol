package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DelegationRequestLogAll(c context.Context, req *types.QueryAllDelegationRequestLogRequest) (*types.QueryAllDelegationRequestLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationRequestLogs []types.DelegationRequestLog
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationRequestLogStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationRequestLogKey))

	pageRes, err := query.Paginate(delegationRequestLogStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationRequestLog types.DelegationRequestLog
		if err := k.cdc.Unmarshal(value, &delegationRequestLog); err != nil {
			return err
		}

		delegationRequestLogs = append(delegationRequestLogs, delegationRequestLog)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationRequestLogResponse{DelegationRequestLog: delegationRequestLogs, Pagination: pageRes}, nil
}

func (k Keeper) DelegationRequestLog(c context.Context, req *types.QueryGetDelegationRequestLogRequest) (*types.QueryGetDelegationRequestLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationRequestLog, found := k.GetDelegationRequestLog(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationRequestLogResponse{DelegationRequestLog: delegationRequestLog}, nil
}
