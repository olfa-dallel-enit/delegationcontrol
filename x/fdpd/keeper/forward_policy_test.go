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

func createTestForwardPolicy(keeper *keeper.Keeper, ctx sdk.Context) types.ForwardPolicy {
	item := types.ForwardPolicy{}
	keeper.SetForwardPolicy(ctx, item)
	return item
}

func TestForwardPolicyGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	item := createTestForwardPolicy(keeper, ctx)
	rst, found := keeper.GetForwardPolicy(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestForwardPolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	createTestForwardPolicy(keeper, ctx)
	keeper.RemoveForwardPolicy(ctx)
	_, found := keeper.GetForwardPolicy(ctx)
	require.False(t, found)
}
