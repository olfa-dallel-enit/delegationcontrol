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

func createNDelegationRequestLog(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationRequestLog {
	items := make([]types.DelegationRequestLog, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationRequestLog(ctx, items[i])
	}
	return items
}

func TestDelegationRequestLogGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequestLog(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationRequestLog(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationRequestLogRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequestLog(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationRequestLog(ctx, item.Id)
		_, found := keeper.GetDelegationRequestLog(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationRequestLogGetAll(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequestLog(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationRequestLog(ctx)),
	)
}

func TestDelegationRequestLogCount(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequestLog(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationRequestLogCount(ctx))
}
