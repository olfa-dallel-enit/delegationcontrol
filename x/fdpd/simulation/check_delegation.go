package simulation

import (
	"math/rand"

	"delegationcontrol/x/fdpd/keeper"
	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgCheckDelegation(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCheckDelegation{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CheckDelegation simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CheckDelegation simulation not implemented"), nil, nil
	}
}
