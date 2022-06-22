package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCheckDelegation = "check_delegation"

var _ sdk.Msg = &MsgCheckDelegation{}

func NewMsgCheckDelegation(creator string, delegationAction string, permission *Permission, selectionCriteria *SelectionCriteria) *MsgCheckDelegation {
	return &MsgCheckDelegation{
		Creator:           creator,
		DelegationAction:  delegationAction,
		Permission:        permission,
		SelectionCriteria: selectionCriteria,
	}
}

func (msg *MsgCheckDelegation) Route() string {
	return RouterKey
}

func (msg *MsgCheckDelegation) Type() string {
	return TypeMsgCheckDelegation
}

func (msg *MsgCheckDelegation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCheckDelegation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCheckDelegation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}