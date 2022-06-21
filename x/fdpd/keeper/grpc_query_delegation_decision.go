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

func (k Keeper) DelegationDecisionAll(c context.Context, req *types.QueryAllDelegationDecisionRequest) (*types.QueryAllDelegationDecisionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationDecisions []types.DelegationDecision
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationDecisionStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationDecisionKey))

	pageRes, err := query.Paginate(delegationDecisionStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationDecision types.DelegationDecision
		if err := k.cdc.Unmarshal(value, &delegationDecision); err != nil {
			return err
		}

		delegationDecisions = append(delegationDecisions, delegationDecision)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationDecisionResponse{DelegationDecision: delegationDecisions, Pagination: pageRes}, nil
}

func (k Keeper) DelegationDecision(c context.Context, req *types.QueryGetDelegationDecisionRequest) (*types.QueryGetDelegationDecisionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationDecision, found := k.GetDelegationDecision(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationDecisionResponse{DelegationDecision: delegationDecision}, nil
}
