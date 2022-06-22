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

func createNFinalDelegationDecision(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.FinalDelegationDecision {
	items := make([]types.FinalDelegationDecision, n)
	for i := range items {
		items[i].Id = keeper.AppendFinalDelegationDecision(ctx, items[i])
	}
	return items
}

func TestFinalDelegationDecisionGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNFinalDelegationDecision(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetFinalDelegationDecision(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestFinalDelegationDecisionRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNFinalDelegationDecision(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFinalDelegationDecision(ctx, item.Id)
		_, found := keeper.GetFinalDelegationDecision(ctx, item.Id)
		require.False(t, found)
	}
}

func TestFinalDelegationDecisionGetAll(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNFinalDelegationDecision(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFinalDelegationDecision(ctx)),
	)
}

func TestFinalDelegationDecisionCount(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	items := createNFinalDelegationDecision(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetFinalDelegationDecisionCount(ctx))
}
