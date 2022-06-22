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

func (k Keeper) DelegationRequestAll(c context.Context, req *types.QueryAllDelegationRequestRequest) (*types.QueryAllDelegationRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationRequests []types.DelegationRequest
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationRequestStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationRequestKey))

	pageRes, err := query.Paginate(delegationRequestStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationRequest types.DelegationRequest
		if err := k.cdc.Unmarshal(value, &delegationRequest); err != nil {
			return err
		}

		delegationRequests = append(delegationRequests, delegationRequest)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationRequestResponse{DelegationRequest: delegationRequests, Pagination: pageRes}, nil
}

func (k Keeper) DelegationRequest(c context.Context, req *types.QueryGetDelegationRequestRequest) (*types.QueryGetDelegationRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationRequest, found := k.GetDelegationRequest(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationRequestResponse{DelegationRequest: delegationRequest}, nil
}
