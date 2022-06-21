package keeper_test

import (
	"testing"

	testkeeper "delegationcontrol/testutil/keeper"
	"delegationcontrol/x/fdpd/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.FdpdKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
