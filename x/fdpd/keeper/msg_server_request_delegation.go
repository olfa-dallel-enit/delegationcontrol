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

	forwardPolicy, found := k.GetForwardPolicy(ctx)

	if found {
		// Construct the packet
		var packet types.RequestDelegationPacketData

		packet.Label = msg.DelegationRequest.Label
		packet.DelegationAction = msg.DelegationRequest.DelegationAction
		packet.AccessAction = msg.DelegationRequest.Permission.Action
		packet.Resource = msg.DelegationRequest.Permission.Resource

		switch forwardPolicy.Mode {
		case "broadcast":
			for _, domain := range k.GetAllDomain(ctx) {
				// Transmit the packet
				k.TransmitRequestDelegationPacket(
					ctx,
					packet,
					msg.Port,
					domain.IbcChannel,
					clienttypes.ZeroHeight(),
					msg.TimeoutTimestamp,
				)
			}
		case "multicast":
			for _, domainName := range forwardPolicy.DomainList {
				domain, exist := k.GetDomainByName(ctx, domainName)
				if exist {
					k.TransmitRequestDelegationPacket(
						ctx,
						packet,
						msg.Port,
						domain.IbcChannel,
						clienttypes.ZeroHeight(),
						msg.TimeoutTimestamp,
					)
				}
			}
		case "unicast":
			domainName := forwardPolicy.DomainList[0]
			domain, exist := k.GetDomainByName(ctx, domainName)
			if exist {
				k.TransmitRequestDelegationPacket(
					ctx,
					packet,
					msg.Port,
					domain.IbcChannel,
					clienttypes.ZeroHeight(),
					msg.TimeoutTimestamp,
				)
			}
		case "geocast":
			for _, location := range forwardPolicy.LocationList {
				for _, domain := range k.GetAllDomainByLocation(ctx, location) {
					k.TransmitRequestDelegationPacket(
						ctx,
						packet,
						msg.Port,
						domain.IbcChannel,
						clienttypes.ZeroHeight(),
						msg.TimeoutTimestamp,
					)
				}
			}
		}
	}

	return &types.MsgSendRequestDelegationResponse{}, nil
}
