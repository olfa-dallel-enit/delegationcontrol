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

func (k Keeper) SelectionCriteriaAll(c context.Context, req *types.QueryAllSelectionCriteriaRequest) (*types.QueryAllSelectionCriteriaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var selectionCriterias []types.SelectionCriteria
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	selectionCriteriaStore := prefix.NewStore(store, types.KeyPrefix(types.SelectionCriteriaKey))

	pageRes, err := query.Paginate(selectionCriteriaStore, req.Pagination, func(key []byte, value []byte) error {
		var selectionCriteria types.SelectionCriteria
		if err := k.cdc.Unmarshal(value, &selectionCriteria); err != nil {
			return err
		}

		selectionCriterias = append(selectionCriterias, selectionCriteria)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSelectionCriteriaResponse{SelectionCriteria: selectionCriterias, Pagination: pageRes}, nil
}

func (k Keeper) SelectionCriteria(c context.Context, req *types.QueryGetSelectionCriteriaRequest) (*types.QueryGetSelectionCriteriaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	selectionCriteria, found := k.GetSelectionCriteria(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetSelectionCriteriaResponse{SelectionCriteria: selectionCriteria}, nil
}
