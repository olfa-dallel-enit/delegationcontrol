package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "delegationcontrol/testutil/keeper"
	"delegationcontrol/testutil/nullify"
	"delegationcontrol/x/fdpd/keeper"
	"delegationcontrol/x/fdpd/types"
)

func createTestSelectionPolicy(keeper *keeper.Keeper, ctx sdk.Context) types.SelectionPolicy {
	item := types.SelectionPolicy{}
	keeper.SetSelectionPolicy(ctx, item)
	return item
}

func TestSelectionPolicyGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	item := createTestSelectionPolicy(keeper, ctx)
	rst, found := keeper.GetSelectionPolicy(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSelectionPolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	createTestSelectionPolicy(keeper, ctx)
	keeper.RemoveSelectionPolicy(ctx)
	_, found := keeper.GetSelectionPolicy(ctx)
	require.False(t, found)
}
