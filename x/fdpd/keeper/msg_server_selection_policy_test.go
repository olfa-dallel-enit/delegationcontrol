package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "delegationcontrol/testutil/keeper"
	"delegationcontrol/x/fdpd/keeper"
	"delegationcontrol/x/fdpd/types"
)

func TestSelectionPolicyMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.FdpdKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateSelectionPolicy{Creator: creator}
	_, err := srv.CreateSelectionPolicy(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetSelectionPolicy(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestSelectionPolicyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSelectionPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSelectionPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSelectionPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.FdpdKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateSelectionPolicy{Creator: creator}
			_, err := srv.CreateSelectionPolicy(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateSelectionPolicy(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetSelectionPolicy(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestSelectionPolicyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSelectionPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSelectionPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSelectionPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.FdpdKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateSelectionPolicy(wctx, &types.MsgCreateSelectionPolicy{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteSelectionPolicy(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetSelectionPolicy(ctx)
				require.False(t, found)
			}
		})
	}
}
