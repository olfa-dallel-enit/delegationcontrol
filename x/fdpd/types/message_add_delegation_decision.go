package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddDelegationDecision = "add_delegation_decision"

var _ sdk.Msg = &MsgAddDelegationDecision{}

func NewMsgAddDelegationDecision(creator string, decision string, delegationConditions *DelegationConditions, decisionDomain string, delegationRequestLabel string) *MsgAddDelegationDecision {
	return &MsgAddDelegationDecision{
		Creator:                creator,
		Decision:               decision,
		DelegationConditions:   delegationConditions,
		DecisionDomain:         decisionDomain,
		DelegationRequestLabel: delegationRequestLabel,
	}
}

func (msg *MsgAddDelegationDecision) Route() string {
	return RouterKey
}

func (msg *MsgAddDelegationDecision) Type() string {
	return TypeMsgAddDelegationDecision
}

func (msg *MsgAddDelegationDecision) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddDelegationDecision) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddDelegationDecision) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
