package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCalculateRequestDelegationTiming = "calculate_request_delegation_timing"

var _ sdk.Msg = &MsgCalculateRequestDelegationTiming{}

func NewMsgCalculateRequestDelegationTiming(creator string, requestLabel string) *MsgCalculateRequestDelegationTiming {
	return &MsgCalculateRequestDelegationTiming{
		Creator:      creator,
		RequestLabel: requestLabel,
	}
}

func (msg *MsgCalculateRequestDelegationTiming) Route() string {
	return RouterKey
}

func (msg *MsgCalculateRequestDelegationTiming) Type() string {
	return TypeMsgCalculateRequestDelegationTiming
}

func (msg *MsgCalculateRequestDelegationTiming) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCalculateRequestDelegationTiming) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCalculateRequestDelegationTiming) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
