package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
)

func (k msgServer) CalculateRequestDelegationTiming(goCtx context.Context, msg *types.MsgCalculateRequestDelegationTiming) (*types.MsgCalculateRequestDelegationTimingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	delegationRequestLogList := k.GetAllDelegationRequestLogByLabel(ctx, msg.RequestLabel)

	startTimestamp := cast.ToUint64(delegationRequestLogList[0].Timestamp)
	endTimestamp := cast.ToUint64(delegationRequestLogList[0].Timestamp)
	for _, delegationRequestLog := range delegationRequestLogList {
		if cast.ToUint64(delegationRequestLog.Timestamp) < startTimestamp {
			startTimestamp = cast.ToUint64(delegationRequestLog.Timestamp)
		}
		if cast.ToUint64(delegationRequestLog.Timestamp) > endTimestamp {
			endTimestamp = cast.ToUint64(delegationRequestLog.Timestamp)
		}
	}

	k.AppendCalculationTime(ctx, types.CalculationTime{
		StartTimestamp: cast.ToString(startTimestamp),
		EndTimestamp:   cast.ToString(endTimestamp),
		Duration:       endTimestamp - startTimestamp,
		RequestLabel:   msg.RequestLabel,
	})

	return &types.MsgCalculateRequestDelegationTimingResponse{}, nil
}
