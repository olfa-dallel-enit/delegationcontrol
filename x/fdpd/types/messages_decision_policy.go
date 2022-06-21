package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDecisionPolicy = "create_decision_policy"
	TypeMsgUpdateDecisionPolicy = "update_decision_policy"
	TypeMsgDeleteDecisionPolicy = "delete_decision_policy"
)

var _ sdk.Msg = &MsgCreateDecisionPolicy{}

func NewMsgCreateDecisionPolicy(creator string, domainList []string, locationList []string, cost uint64, maxDelegations uint64, validity *Validity) *MsgCreateDecisionPolicy {
	return &MsgCreateDecisionPolicy{
		Creator:        creator,
		DomainList:     domainList,
		LocationList:   locationList,
		Cost:           cost,
		MaxDelegations: maxDelegations,
		Validity:       validity,
	}
}

func (msg *MsgCreateDecisionPolicy) Route() string {
	return RouterKey
}

func (msg *MsgCreateDecisionPolicy) Type() string {
	return TypeMsgCreateDecisionPolicy
}

func (msg *MsgCreateDecisionPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDecisionPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDecisionPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDecisionPolicy{}

func NewMsgUpdateDecisionPolicy(creator string, domainList []string, locationList []string, cost uint64, maxDelegations uint64, validity *Validity) *MsgUpdateDecisionPolicy {
	return &MsgUpdateDecisionPolicy{
		Creator:        creator,
		DomainList:     domainList,
		LocationList:   locationList,
		Cost:           cost,
		MaxDelegations: maxDelegations,
		Validity:       validity,
	}
}

func (msg *MsgUpdateDecisionPolicy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDecisionPolicy) Type() string {
	return TypeMsgUpdateDecisionPolicy
}

func (msg *MsgUpdateDecisionPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDecisionPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDecisionPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDecisionPolicy{}

func NewMsgDeleteDecisionPolicy(creator string) *MsgDeleteDecisionPolicy {
	return &MsgDeleteDecisionPolicy{
		Creator: creator,
	}
}
func (msg *MsgDeleteDecisionPolicy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDecisionPolicy) Type() string {
	return TypeMsgDeleteDecisionPolicy
}

func (msg *MsgDeleteDecisionPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDecisionPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDecisionPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
