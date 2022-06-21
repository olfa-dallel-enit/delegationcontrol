package keeper

import (
	"context"

	"delegationcontrol/x/fdpd/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"encoding/json"
	"io/ioutil"
)

func (k msgServer) ConfigureLocalDomain(goCtx context.Context, msg *types.MsgConfigureLocalDomain) (*types.MsgConfigureLocalDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	configurationFile := "execution/chains/" + ctx.ChainID() + "/" + ctx.ChainID() + ".json"

	configurationData, _ := ioutil.ReadFile(configurationFile)
	var domain types.LocalDomain
	json.Unmarshal(configurationData, &domain)

	k.SetLocalDomain(ctx, types.LocalDomain{
		Name:     ctx.ChainID(),
		Location: domain.Location,
		Creator:  ctx.ChainID(),
	})

	return &types.MsgConfigureLocalDomainResponse{}, nil
}
