package fdpd

import (
	"fmt"

	"delegationcontrol/x/fdpd/keeper"
	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
		case *types.MsgCreateLocalDomain:
			res, err := msgServer.CreateLocalDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateLocalDomain:
			res, err := msgServer.UpdateLocalDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteLocalDomain:
			res, err := msgServer.DeleteLocalDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateDomain:
			res, err := msgServer.CreateDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDomain:
			res, err := msgServer.UpdateDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDomain:
			res, err := msgServer.DeleteDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgSendEstablishCooperation:
			res, err := msgServer.SendEstablishCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateForwardPolicy:
			res, err := msgServer.CreateForwardPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateForwardPolicy:
			res, err := msgServer.UpdateForwardPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteForwardPolicy:
			res, err := msgServer.DeleteForwardPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateValidity:
			res, err := msgServer.CreateValidity(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateValidity:
			res, err := msgServer.UpdateValidity(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteValidity:
			res, err := msgServer.DeleteValidity(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDecisionPolicy:
			res, err := msgServer.CreateDecisionPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateDecisionPolicy:
			res, err := msgServer.UpdateDecisionPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteDecisionPolicy:
			res, err := msgServer.DeleteDecisionPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreatePermission:
			res, err := msgServer.CreatePermission(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdatePermission:
			res, err := msgServer.UpdatePermission(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeletePermission:
			res, err := msgServer.DeletePermission(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDelegationConditions:
			res, err := msgServer.CreateDelegationConditions(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationConditions:
			res, err := msgServer.UpdateDelegationConditions(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationConditions:
			res, err := msgServer.DeleteDelegationConditions(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgSendRequestDelegation:
			res, err := msgServer.SendRequestDelegation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgConfigureLocalDomain:
			res, err := msgServer.ConfigureLocalDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateDelegationDecision:
			res, err := msgServer.CreateDelegationDecision(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationDecision:
			res, err := msgServer.UpdateDelegationDecision(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationDecision:
			res, err := msgServer.DeleteDelegationDecision(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

			// this line is used by starport scaffolding # 1
		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
