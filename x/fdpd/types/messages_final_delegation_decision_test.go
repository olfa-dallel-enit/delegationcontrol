package types

import (
	"testing"

	"delegationcontrol/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateFinalDelegationDecision_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateFinalDelegationDecision
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateFinalDelegationDecision{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateFinalDelegationDecision{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateFinalDelegationDecision_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateFinalDelegationDecision
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateFinalDelegationDecision{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateFinalDelegationDecision{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteFinalDelegationDecision_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteFinalDelegationDecision
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteFinalDelegationDecision{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteFinalDelegationDecision{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
