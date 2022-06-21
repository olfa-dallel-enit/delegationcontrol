package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"delegationcontrol/x/fdpd/types"
)

func TestDelegationDecisionMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDelegationDecision(ctx, &types.MsgCreateDelegationDecision{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestDelegationDecisionMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDelegationDecision
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDelegationDecision{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationDecision{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationDecision{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDelegationDecision(ctx, &types.MsgCreateDelegationDecision{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDelegationDecision(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDelegationDecisionMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDelegationDecision
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDelegationDecision{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDelegationDecision{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDelegationDecision{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDelegationDecision(ctx, &types.MsgCreateDelegationDecision{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDelegationDecision(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
