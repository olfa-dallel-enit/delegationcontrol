package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
)

func (k msgServer) SendEstablishCooperation(goCtx context.Context, msg *types.MsgSendEstablishCooperation) (*types.MsgSendEstablishCooperationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.EstablishCooperationPacketData

	packet.Location = msg.Location

	// Transmit the packet
	err := k.TransmitEstablishCooperationPacket(
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

	return &types.MsgSendEstablishCooperationResponse{}, nil
}
