package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationDecision = "create_delegation_decision"
	TypeMsgUpdateDelegationDecision = "update_delegation_decision"
	TypeMsgDeleteDelegationDecision = "delete_delegation_decision"
)

var _ sdk.Msg = &MsgCreateDelegationDecision{}

func NewMsgCreateDelegationDecision(creator string, decision string, delegationConditions *DelegationConditions) *MsgCreateDelegationDecision {
	return &MsgCreateDelegationDecision{
		Creator:              creator,
		Decision:             decision,
		DelegationConditions: delegationConditions,
	}
}

func (msg *MsgCreateDelegationDecision) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationDecision) Type() string {
	return TypeMsgCreateDelegationDecision
}

func (msg *MsgCreateDelegationDecision) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationDecision) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationDecision) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationDecision{}

func NewMsgUpdateDelegationDecision(creator string, id uint64, decision string, delegationConditions *DelegationConditions) *MsgUpdateDelegationDecision {
	return &MsgUpdateDelegationDecision{
		Id:                   id,
		Creator:              creator,
		Decision:             decision,
		DelegationConditions: delegationConditions,
	}
}

func (msg *MsgUpdateDelegationDecision) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationDecision) Type() string {
	return TypeMsgUpdateDelegationDecision
}

func (msg *MsgUpdateDelegationDecision) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationDecision) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationDecision) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationDecision{}

func NewMsgDeleteDelegationDecision(creator string, id uint64) *MsgDeleteDelegationDecision {
	return &MsgDeleteDelegationDecision{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationDecision) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationDecision) Type() string {
	return TypeMsgDeleteDelegationDecision
}

func (msg *MsgDeleteDelegationDecision) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationDecision) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationDecision) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
