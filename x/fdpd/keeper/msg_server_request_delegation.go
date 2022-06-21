package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
)

func (k msgServer) SendRequestDelegation(goCtx context.Context, msg *types.MsgSendRequestDelegation) (*types.MsgSendRequestDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.RequestDelegationPacketData

	packet.DelegationAction = msg.DelegationAction
	packet.Permission = msg.Permission
	packet.ForwardMode = msg.ForwardMode

	// Transmit the packet
	err := k.TransmitRequestDelegationPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendRequestDelegationResponse{}, nil
}
