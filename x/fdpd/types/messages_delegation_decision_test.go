package types

import (
	"testing"

	"delegationcontrol/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateDelegationDecision_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateDelegationDecision
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateDelegationDecision{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateDelegationDecision{
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

func TestMsgUpdateDelegationDecision_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateDelegationDecision
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateDelegationDecision{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateDelegationDecision{
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

func TestMsgDeleteDelegationDecision_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteDelegationDecision
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteDelegationDecision{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteDelegationDecision{
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
