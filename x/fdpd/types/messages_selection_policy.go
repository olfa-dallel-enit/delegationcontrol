package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateSelectionPolicy = "create_selection_policy"
	TypeMsgUpdateSelectionPolicy = "update_selection_policy"
	TypeMsgDeleteSelectionPolicy = "delete_selection_policy"
)

var _ sdk.Msg = &MsgCreateSelectionPolicy{}

func NewMsgCreateSelectionPolicy(creator string, domainList []string, delegatorLocationList []string, cost uint64, nbDelegations uint64, validity *Validity) *MsgCreateSelectionPolicy {
	return &MsgCreateSelectionPolicy{
		Creator:               creator,
		DomainList:            domainList,
		DelegatorLocationList: delegatorLocationList,
		Cost:                  cost,
		NbDelegations:         nbDelegations,
		Validity:              validity,
	}
}

func (msg *MsgCreateSelectionPolicy) Route() string {
	return RouterKey
}

func (msg *MsgCreateSelectionPolicy) Type() string {
	return TypeMsgCreateSelectionPolicy
}

func (msg *MsgCreateSelectionPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSelectionPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSelectionPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSelectionPolicy{}

func NewMsgUpdateSelectionPolicy(creator string, domainList []string, delegatorLocationList []string, cost uint64, nbDelegations uint64, validity *Validity) *MsgUpdateSelectionPolicy {
	return &MsgUpdateSelectionPolicy{
		Creator:               creator,
		DomainList:            domainList,
		DelegatorLocationList: delegatorLocationList,
		Cost:                  cost,
		NbDelegations:         nbDelegations,
		Validity:              validity,
	}
}

func (msg *MsgUpdateSelectionPolicy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSelectionPolicy) Type() string {
	return TypeMsgUpdateSelectionPolicy
}

func (msg *MsgUpdateSelectionPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSelectionPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSelectionPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSelectionPolicy{}

func NewMsgDeleteSelectionPolicy(creator string) *MsgDeleteSelectionPolicy {
	return &MsgDeleteSelectionPolicy{
		Creator: creator,
	}
}
func (msg *MsgDeleteSelectionPolicy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSelectionPolicy) Type() string {
	return TypeMsgDeleteSelectionPolicy
}

func (msg *MsgDeleteSelectionPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSelectionPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSelectionPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
