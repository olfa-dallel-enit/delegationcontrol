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

func (k Keeper) FinalDelegationDecisionAll(c context.Context, req *types.QueryAllFinalDelegationDecisionRequest) (*types.QueryAllFinalDelegationDecisionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var finalDelegationDecisions []types.FinalDelegationDecision
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	finalDelegationDecisionStore := prefix.NewStore(store, types.KeyPrefix(types.FinalDelegationDecisionKey))

	pageRes, err := query.Paginate(finalDelegationDecisionStore, req.Pagination, func(key []byte, value []byte) error {
		var finalDelegationDecision types.FinalDelegationDecision
		if err := k.cdc.Unmarshal(value, &finalDelegationDecision); err != nil {
			return err
		}

		finalDelegationDecisions = append(finalDelegationDecisions, finalDelegationDecision)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFinalDelegationDecisionResponse{FinalDelegationDecision: finalDelegationDecisions, Pagination: pageRes}, nil
}

func (k Keeper) FinalDelegationDecision(c context.Context, req *types.QueryGetFinalDelegationDecisionRequest) (*types.QueryGetFinalDelegationDecisionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	finalDelegationDecision, found := k.GetFinalDelegationDecision(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetFinalDelegationDecisionResponse{FinalDelegationDecision: finalDelegationDecision}, nil
}
