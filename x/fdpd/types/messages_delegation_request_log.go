package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationRequestLog = "create_delegation_request_log"
	TypeMsgUpdateDelegationRequestLog = "update_delegation_request_log"
	TypeMsgDeleteDelegationRequestLog = "delete_delegation_request_log"
)

var _ sdk.Msg = &MsgCreateDelegationRequestLog{}

func NewMsgCreateDelegationRequestLog(creator string, transaction string, requestLabel string, details string, function string) *MsgCreateDelegationRequestLog {
	return &MsgCreateDelegationRequestLog{
		Creator:      creator,
		Transaction:  transaction,
		RequestLabel: requestLabel,
		Details:      details,
		Function:     function,
	}
}

func (msg *MsgCreateDelegationRequestLog) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationRequestLog) Type() string {
	return TypeMsgCreateDelegationRequestLog
}

func (msg *MsgCreateDelegationRequestLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationRequestLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationRequestLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationRequestLog{}

func NewMsgUpdateDelegationRequestLog(creator string, id uint64, transaction string, requestLabel string, details string, function string) *MsgUpdateDelegationRequestLog {
	return &MsgUpdateDelegationRequestLog{
		Id:           id,
		Creator:      creator,
		Transaction:  transaction,
		RequestLabel: requestLabel,
		Details:      details,
		Function:     function,
	}
}

func (msg *MsgUpdateDelegationRequestLog) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationRequestLog) Type() string {
	return TypeMsgUpdateDelegationRequestLog
}

func (msg *MsgUpdateDelegationRequestLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationRequestLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationRequestLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationRequestLog{}

func NewMsgDeleteDelegationRequestLog(creator string, id uint64) *MsgDeleteDelegationRequestLog {
	return &MsgDeleteDelegationRequestLog{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationRequestLog) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationRequestLog) Type() string {
	return TypeMsgDeleteDelegationRequestLog
}

func (msg *MsgDeleteDelegationRequestLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationRequestLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationRequestLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
