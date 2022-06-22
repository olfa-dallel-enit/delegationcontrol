package keeper

import (
	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetSelectionPolicy set selectionPolicy in the store
func (k Keeper) SetSelectionPolicy(ctx sdk.Context, selectionPolicy types.SelectionPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionPolicyKey))
	b := k.cdc.MustMarshal(&selectionPolicy)
	store.Set([]byte{0}, b)
}

// GetSelectionPolicy returns selectionPolicy
func (k Keeper) GetSelectionPolicy(ctx sdk.Context) (val types.SelectionPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSelectionPolicy removes selectionPolicy from the store
func (k Keeper) RemoveSelectionPolicy(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionPolicyKey))
	store.Delete([]byte{0})
}
