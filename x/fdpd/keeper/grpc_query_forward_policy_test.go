package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "delegationcontrol/testutil/keeper"
	"delegationcontrol/testutil/nullify"
	"delegationcontrol/x/fdpd/types"
)

func TestForwardPolicyQuery(t *testing.T) {
	keeper, ctx := keepertest.FdpdKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestForwardPolicy(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetForwardPolicyRequest
		response *types.QueryGetForwardPolicyResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetForwardPolicyRequest{},
			response: &types.QueryGetForwardPolicyResponse{ForwardPolicy: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ForwardPolicy(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
