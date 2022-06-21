package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePermission = "create_permission"
	TypeMsgUpdatePermission = "update_permission"
	TypeMsgDeletePermission = "delete_permission"
)

var _ sdk.Msg = &MsgCreatePermission{}

func NewMsgCreatePermission(creator string, action string, resource string) *MsgCreatePermission {
	return &MsgCreatePermission{
		Creator:  creator,
		Action:   action,
		Resource: resource,
	}
}

func (msg *MsgCreatePermission) Route() string {
	return RouterKey
}

func (msg *MsgCreatePermission) Type() string {
	return TypeMsgCreatePermission
}

func (msg *MsgCreatePermission) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePermission) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePermission) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePermission{}

func NewMsgUpdatePermission(creator string, id uint64, action string, resource string) *MsgUpdatePermission {
	return &MsgUpdatePermission{
		Id:       id,
		Creator:  creator,
		Action:   action,
		Resource: resource,
	}
}

func (msg *MsgUpdatePermission) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePermission) Type() string {
	return TypeMsgUpdatePermission
}

func (msg *MsgUpdatePermission) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePermission) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePermission) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePermission{}

func NewMsgDeletePermission(creator string, id uint64) *MsgDeletePermission {
	return &MsgDeletePermission{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePermission) Route() string {
	return RouterKey
}

func (msg *MsgDeletePermission) Type() string {
	return TypeMsgDeletePermission
}

func (msg *MsgDeletePermission) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePermission) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePermission) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
