package types

import (
	"testing"

	"delegationcontrol/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateDelegationRequestLog_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateDelegationRequestLog
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateDelegationRequestLog{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateDelegationRequestLog{
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

func TestMsgUpdateDelegationRequestLog_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateDelegationRequestLog
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateDelegationRequestLog{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateDelegationRequestLog{
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

func TestMsgDeleteDelegationRequestLog_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteDelegationRequestLog
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteDelegationRequestLog{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteDelegationRequestLog{
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
