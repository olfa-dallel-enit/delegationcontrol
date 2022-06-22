package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateFinalDelegationDecision = "create_final_delegation_decision"
	TypeMsgUpdateFinalDelegationDecision = "update_final_delegation_decision"
	TypeMsgDeleteFinalDelegationDecision = "delete_final_delegation_decision"
)

var _ sdk.Msg = &MsgCreateFinalDelegationDecision{}

func NewMsgCreateFinalDelegationDecision(creator string, delegationRequestLabel string, decision string) *MsgCreateFinalDelegationDecision {
	return &MsgCreateFinalDelegationDecision{
		Creator:                creator,
		DelegationRequestLabel: delegationRequestLabel,
		Decision:               decision,
	}
}

func (msg *MsgCreateFinalDelegationDecision) Route() string {
	return RouterKey
}

func (msg *MsgCreateFinalDelegationDecision) Type() string {
	return TypeMsgCreateFinalDelegationDecision
}

func (msg *MsgCreateFinalDelegationDecision) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateFinalDelegationDecision) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateFinalDelegationDecision) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateFinalDelegationDecision{}

func NewMsgUpdateFinalDelegationDecision(creator string, id uint64, delegationRequestLabel string, decision string) *MsgUpdateFinalDelegationDecision {
	return &MsgUpdateFinalDelegationDecision{
		Id:                     id,
		Creator:                creator,
		DelegationRequestLabel: delegationRequestLabel,
		Decision:               decision,
	}
}

func (msg *MsgUpdateFinalDelegationDecision) Route() string {
	return RouterKey
}

func (msg *MsgUpdateFinalDelegationDecision) Type() string {
	return TypeMsgUpdateFinalDelegationDecision
}

func (msg *MsgUpdateFinalDelegationDecision) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateFinalDelegationDecision) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateFinalDelegationDecision) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteFinalDelegationDecision{}

func NewMsgDeleteFinalDelegationDecision(creator string, id uint64) *MsgDeleteFinalDelegationDecision {
	return &MsgDeleteFinalDelegationDecision{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteFinalDelegationDecision) Route() string {
	return RouterKey
}

func (msg *MsgDeleteFinalDelegationDecision) Type() string {
	return TypeMsgDeleteFinalDelegationDecision
}

func (msg *MsgDeleteFinalDelegationDecision) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteFinalDelegationDecision) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteFinalDelegationDecision) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
