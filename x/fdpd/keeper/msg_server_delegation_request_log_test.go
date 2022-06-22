package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"delegationcontrol/x/fdpd/types"
)

func TestDelegationRequestLogMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDelegationRequestLog(ctx, &types.MsgCreateDelegationRequestLog{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestDelegationRequestLogMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDelegationRequestLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDelegationRequestLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationRequestLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationRequestLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDelegationRequestLog(ctx, &types.MsgCreateDelegationRequestLog{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDelegationRequestLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDelegationRequestLogMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDelegationRequestLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDelegationRequestLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDelegationRequestLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDelegationRequestLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDelegationRequestLog(ctx, &types.MsgCreateDelegationRequestLog{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDelegationRequestLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
