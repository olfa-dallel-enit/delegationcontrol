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

func createNSelectionCriteria(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SelectionCriteria {
	items := make([]types.SelectionCriteria, n)
	for i := range items {
		items[i].Id = keeper.AppendSelectionCriteria(ctx, items[i])
	}
	return items
}

func TestSelectionCriteriaGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNSelectionCriteria(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetSelectionCriteria(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestSelectionCriteriaRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNSelectionCriteria(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSelectionCriteria(ctx, item.Id)
		_, found := keeper.GetSelectionCriteria(ctx, item.Id)
		require.False(t, found)
	}
}

func TestSelectionCriteriaGetAll(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNSelectionCriteria(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSelectionCriteria(ctx)),
	)
}

func TestSelectionCriteriaCount(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNSelectionCriteria(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetSelectionCriteriaCount(ctx))
}
