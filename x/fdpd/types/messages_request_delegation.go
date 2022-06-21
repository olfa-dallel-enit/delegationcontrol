package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendRequestDelegation = "send_request_delegation"

var _ sdk.Msg = &MsgSendRequestDelegation{}

func NewMsgSendRequestDelegation(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	delegationAction string,
	permission *Permission,
	forwardMode string,
) *MsgSendRequestDelegation {
	return &MsgSendRequestDelegation{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		DelegationAction: delegationAction,
		Permission:       permission,
		ForwardMode:      forwardMode,
	}
}

func (msg *MsgSendRequestDelegation) Route() string {
	return RouterKey
}

func (msg *MsgSendRequestDelegation) Type() string {
	return TypeMsgSendRequestDelegation
}

func (msg *MsgSendRequestDelegation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendRequestDelegation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendRequestDelegation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
