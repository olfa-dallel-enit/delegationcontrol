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

func createNDelegationDecision(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationDecision {
	items := make([]types.DelegationDecision, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationDecision(ctx, items[i])
	}
	return items
}

func TestDelegationDecisionGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationDecision(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationDecision(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationDecisionRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationDecision(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationDecision(ctx, item.Id)
		_, found := keeper.GetDelegationDecision(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationDecisionGetAll(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationDecision(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationDecision(ctx)),
	)
}

func TestDelegationDecisionCount(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNDelegationDecision(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationDecisionCount(ctx))
}
