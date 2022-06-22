package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CheckDelegation(goCtx context.Context, msg *types.MsgCheckDelegation) (*types.MsgCheckDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCheckDelegationResponse{}, nil
}
