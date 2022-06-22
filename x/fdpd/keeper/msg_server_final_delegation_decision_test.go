package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"delegationcontrol/x/fdpd/types"
)

func TestFinalDelegationDecisionMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateFinalDelegationDecision(ctx, &types.MsgCreateFinalDelegationDecision{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestFinalDelegationDecisionMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateFinalDelegationDecision
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateFinalDelegationDecision{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateFinalDelegationDecision{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateFinalDelegationDecision{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateFinalDelegationDecision(ctx, &types.MsgCreateFinalDelegationDecision{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateFinalDelegationDecision(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestFinalDelegationDecisionMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteFinalDelegationDecision
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteFinalDelegationDecision{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteFinalDelegationDecision{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteFinalDelegationDecision{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateFinalDelegationDecision(ctx, &types.MsgCreateFinalDelegationDecision{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteFinalDelegationDecision(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
