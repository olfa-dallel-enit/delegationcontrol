package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationRequest = "create_delegation_request"
	TypeMsgUpdateDelegationRequest = "update_delegation_request"
	TypeMsgDeleteDelegationRequest = "delete_delegation_request"
)

var _ sdk.Msg = &MsgCreateDelegationRequest{}

func NewMsgCreateDelegationRequest(creator string, label string, delegationAction string, permission *Permission) *MsgCreateDelegationRequest {
	return &MsgCreateDelegationRequest{
		Creator:          creator,
		Label:            label,
		DelegationAction: delegationAction,
		Permission:       permission,
	}
}

func (msg *MsgCreateDelegationRequest) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationRequest) Type() string {
	return TypeMsgCreateDelegationRequest
}

func (msg *MsgCreateDelegationRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationRequest{}

func NewMsgUpdateDelegationRequest(creator string, id uint64, label string, delegationAction string, permission *Permission) *MsgUpdateDelegationRequest {
	return &MsgUpdateDelegationRequest{
		Id:               id,
		Creator:          creator,
		Label:            label,
		DelegationAction: delegationAction,
		Permission:       permission,
	}
}

func (msg *MsgUpdateDelegationRequest) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationRequest) Type() string {
	return TypeMsgUpdateDelegationRequest
}

func (msg *MsgUpdateDelegationRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationRequest{}

func NewMsgDeleteDelegationRequest(creator string, id uint64) *MsgDeleteDelegationRequest {
	return &MsgDeleteDelegationRequest{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationRequest) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationRequest) Type() string {
	return TypeMsgDeleteDelegationRequest
}

func (msg *MsgDeleteDelegationRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
