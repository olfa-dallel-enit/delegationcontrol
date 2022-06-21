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

func (k Keeper) PermissionAll(c context.Context, req *types.QueryAllPermissionRequest) (*types.QueryAllPermissionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var permissions []types.Permission
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	permissionStore := prefix.NewStore(store, types.KeyPrefix(types.PermissionKey))

	pageRes, err := query.Paginate(permissionStore, req.Pagination, func(key []byte, value []byte) error {
		var permission types.Permission
		if err := k.cdc.Unmarshal(value, &permission); err != nil {
			return err
		}

		permissions = append(permissions, permission)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPermissionResponse{Permission: permissions, Pagination: pageRes}, nil
}

func (k Keeper) Permission(c context.Context, req *types.QueryGetPermissionRequest) (*types.QueryGetPermissionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	permission, found := k.GetPermission(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPermissionResponse{Permission: permission}, nil
}
