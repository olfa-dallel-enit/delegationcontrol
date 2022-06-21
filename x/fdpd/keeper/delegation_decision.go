package keeper

import (
	"encoding/binary"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationDecisionCount get the total number of delegationDecision
func (k Keeper) GetDelegationDecisionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationDecisionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationDecisionCount set the total number of delegationDecision
func (k Keeper) SetDelegationDecisionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationDecisionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationDecision appends a delegationDecision in the store with a new id and update the count
func (k Keeper) AppendDelegationDecision(
	ctx sdk.Context,
	delegationDecision types.DelegationDecision,
) uint64 {
	// Create the delegationDecision
	count := k.GetDelegationDecisionCount(ctx)

	// Set the ID of the appended value
	delegationDecision.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationDecisionKey))
	appendedValue := k.cdc.MustMarshal(&delegationDecision)
	store.Set(GetDelegationDecisionIDBytes(delegationDecision.Id), appendedValue)

	// Update delegationDecision count
	k.SetDelegationDecisionCount(ctx, count+1)

	return count
}

// SetDelegationDecision set a specific delegationDecision in the store
func (k Keeper) SetDelegationDecision(ctx sdk.Context, delegationDecision types.DelegationDecision) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationDecisionKey))
	b := k.cdc.MustMarshal(&delegationDecision)
	store.Set(GetDelegationDecisionIDBytes(delegationDecision.Id), b)
}

// GetDelegationDecision returns a delegationDecision from its id
func (k Keeper) GetDelegationDecision(ctx sdk.Context, id uint64) (val types.DelegationDecision, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationDecisionKey))
	b := store.Get(GetDelegationDecisionIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationDecision removes a delegationDecision from the store
func (k Keeper) RemoveDelegationDecision(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationDecisionKey))
	store.Delete(GetDelegationDecisionIDBytes(id))
}

// GetAllDelegationDecision returns all delegationDecision
func (k Keeper) GetAllDelegationDecision(ctx sdk.Context) (list []types.DelegationDecision) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationDecisionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationDecision
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationDecisionIDBytes returns the byte representation of the ID
func GetDelegationDecisionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationDecisionIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationDecisionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
