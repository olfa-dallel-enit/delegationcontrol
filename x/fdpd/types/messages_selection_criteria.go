package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateSelectionCriteria = "create_selection_criteria"
	TypeMsgUpdateSelectionCriteria = "update_selection_criteria"
	TypeMsgDeleteSelectionCriteria = "delete_selection_criteria"
)

var _ sdk.Msg = &MsgCreateSelectionCriteria{}

func NewMsgCreateSelectionCriteria(creator string, domainList []string, delegatorLocationList []string, cost uint64, nbDelegations uint64, validity *Validity) *MsgCreateSelectionCriteria {
	return &MsgCreateSelectionCriteria{
		Creator:               creator,
		DomainList:            domainList,
		DelegatorLocationList: delegatorLocationList,
		Cost:                  cost,
		NbDelegations:         nbDelegations,
		Validity:              validity,
	}
}

func (msg *MsgCreateSelectionCriteria) Route() string {
	return RouterKey
}

func (msg *MsgCreateSelectionCriteria) Type() string {
	return TypeMsgCreateSelectionCriteria
}

func (msg *MsgCreateSelectionCriteria) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSelectionCriteria) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSelectionCriteria) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSelectionCriteria{}

func NewMsgUpdateSelectionCriteria(creator string, id uint64, domainList []string, delegatorLocationList []string, cost uint64, nbDelegations uint64, validity *Validity) *MsgUpdateSelectionCriteria {
	return &MsgUpdateSelectionCriteria{
		Id:                    id,
		Creator:               creator,
		DomainList:            domainList,
		DelegatorLocationList: delegatorLocationList,
		Cost:                  cost,
		NbDelegations:         nbDelegations,
		Validity:              validity,
	}
}

func (msg *MsgUpdateSelectionCriteria) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSelectionCriteria) Type() string {
	return TypeMsgUpdateSelectionCriteria
}

func (msg *MsgUpdateSelectionCriteria) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSelectionCriteria) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSelectionCriteria) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSelectionCriteria{}

func NewMsgDeleteSelectionCriteria(creator string, id uint64) *MsgDeleteSelectionCriteria {
	return &MsgDeleteSelectionCriteria{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSelectionCriteria) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSelectionCriteria) Type() string {
	return TypeMsgDeleteSelectionCriteria
}

func (msg *MsgDeleteSelectionCriteria) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSelectionCriteria) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSelectionCriteria) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
