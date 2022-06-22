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

func createNDelegationRequest(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationRequest {
	items := make([]types.DelegationRequest, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationRequest(ctx, items[i])
	}
	return items
}

func TestDelegationRequestGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequest(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationRequest(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationRequestRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequest(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationRequest(ctx, item.Id)
		_, found := keeper.GetDelegationRequest(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationRequestGetAll(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequest(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationRequest(ctx)),
	)
}

func TestDelegationRequestCount(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationRequest(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationRequestCount(ctx))
}
