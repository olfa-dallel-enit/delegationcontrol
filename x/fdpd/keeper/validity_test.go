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

func createNValidity(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Validity {
	items := make([]types.Validity, n)
	for i := range items {
		items[i].Id = keeper.AppendValidity(ctx, items[i])
	}
	return items
}

func TestValidityGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNValidity(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetValidity(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestValidityRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNValidity(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveValidity(ctx, item.Id)
		_, found := keeper.GetValidity(ctx, item.Id)
		require.False(t, found)
	}
}

func TestValidityGetAll(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNValidity(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllValidity(ctx)),
	)
}

func TestValidityCount(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNValidity(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetValidityCount(ctx))
}
