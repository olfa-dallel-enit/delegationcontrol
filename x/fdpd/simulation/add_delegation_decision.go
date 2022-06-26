package simulation

import (
	"math/rand"

	"delegationcontrol/x/fdpd/keeper"
	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgAddDelegationDecision(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgAddDelegationDecision{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the AddDelegationDecision simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "AddDelegationDecision simulation not implemented"), nil, nil
	}
}
