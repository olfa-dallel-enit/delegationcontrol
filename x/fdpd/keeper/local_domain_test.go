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

func createTestLocalDomain(keeper *keeper.Keeper, ctx sdk.Context) types.LocalDomain {
	item := types.LocalDomain{}
	keeper.SetLocalDomain(ctx, item)
	return item
}

func TestLocalDomainGet(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	item := createTestLocalDomain(keeper, ctx)
	rst, found := keeper.GetLocalDomain(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestLocalDomainRemove(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	createTestLocalDomain(keeper, ctx)
	keeper.RemoveLocalDomain(ctx)
	_, found := keeper.GetLocalDomain(ctx)
	require.False(t, found)
}
