package keeper

import (
	"errors"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// TransmitEstablishCooperationPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitEstablishCooperationPacket(
	ctx sdk.Context,
	packetData types.EstablishCooperationPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.ChannelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.ScopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.ChannelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvEstablishCooperationPacket processes packet reception
func (k Keeper) OnRecvEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) (packetAck types.EstablishCooperationPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	localDomain, found := k.GetLocalDomain(ctx)
	if found {
		k.AppendDomain(ctx, types.Domain{
			Name:       data.Sender,
			Location:   data.Location,
			IbcChannel: packet.DestinationChannel,
			Creator:    ctx.ChainID(),
		})

		packetAck.Confirmation = "Confirmed"
		packetAck.ConfirmedBy = ctx.ChainID()
		packetAck.Location = localDomain.Location
	}

	return packetAck, nil
}

// OnAcknowledgementEstablishCooperationPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.EstablishCooperationPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		if packetAck.Confirmation == "Confirmed" {
			k.AppendDomain(ctx, types.Domain{
				Name:       packetAck.ConfirmedBy,
				Location:   packetAck.Location,
				IbcChannel: packet.SourceChannel,
				Creator:    ctx.ChainID(),
			})
		}

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutEstablishCooperationPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) error {

	// TODO: packet timeout logic

	return nil
}
