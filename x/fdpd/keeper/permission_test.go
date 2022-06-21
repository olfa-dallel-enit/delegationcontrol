package keeper_test

import (
	"testing"

	keepertest "delegationcontrol/testutil/keeper"
	"delegationcontrol/testutil/nullify"
	"delegationcontrol/x/fdpd/keeper"
	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNPermission(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Permission {
	items := make([]types.Permission, n)
	for i := range items {
		items[i].Id = keeper.AppendPermission(ctx, items[i])
	}
	return items
}

func TestPermissionGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNPermission(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPermission(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPermissionRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNPermission(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePermission(ctx, item.Id)
		_, found := keeper.GetPermission(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPermissionGetAll(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNPermission(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPermission(ctx)),
	)
}

func TestPermissionCount(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNPermission(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPermissionCount(ctx))
}
