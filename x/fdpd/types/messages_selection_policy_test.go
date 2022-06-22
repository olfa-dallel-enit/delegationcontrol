package types

import (
	"testing"

	"delegationcontrol/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateSelectionPolicy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateSelectionPolicy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateSelectionPolicy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateSelectionPolicy{
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

func TestMsgUpdateSelectionPolicy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateSelectionPolicy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateSelectionPolicy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateSelectionPolicy{
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

func TestMsgDeleteSelectionPolicy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteSelectionPolicy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteSelectionPolicy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteSelectionPolicy{
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
