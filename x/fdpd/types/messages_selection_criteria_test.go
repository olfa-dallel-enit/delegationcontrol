package types

import (
	"testing"

	"delegationcontrol/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateSelectionCriteria_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateSelectionCriteria
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateSelectionCriteria{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateSelectionCriteria{
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

func TestMsgUpdateSelectionCriteria_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateSelectionCriteria
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateSelectionCriteria{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateSelectionCriteria{
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

func TestMsgDeleteSelectionCriteria_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteSelectionCriteria
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteSelectionCriteria{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteSelectionCriteria{
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
