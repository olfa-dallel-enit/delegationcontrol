package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"delegationcontrol/x/fdpd/types"
)

func TestSelectionCriteriaMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateSelectionCriteria(ctx, &types.MsgCreateSelectionCriteria{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestSelectionCriteriaMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSelectionCriteria
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSelectionCriteria{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSelectionCriteria{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSelectionCriteria{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateSelectionCriteria(ctx, &types.MsgCreateSelectionCriteria{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateSelectionCriteria(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestSelectionCriteriaMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSelectionCriteria
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSelectionCriteria{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSelectionCriteria{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSelectionCriteria{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateSelectionCriteria(ctx, &types.MsgCreateSelectionCriteria{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteSelectionCriteria(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
