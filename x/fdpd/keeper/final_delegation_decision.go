package keeper

import (
	"encoding/binary"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetFinalDelegationDecisionCount get the total number of finalDelegationDecision
func (k Keeper) GetFinalDelegationDecisionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FinalDelegationDecisionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetFinalDelegationDecisionCount set the total number of finalDelegationDecision
func (k Keeper) SetFinalDelegationDecisionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FinalDelegationDecisionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendFinalDelegationDecision appends a finalDelegationDecision in the store with a new id and update the count
func (k Keeper) AppendFinalDelegationDecision(
	ctx sdk.Context,
	finalDelegationDecision types.FinalDelegationDecision,
) uint64 {
	// Create the finalDelegationDecision
	count := k.GetFinalDelegationDecisionCount(ctx)

	// Set the ID of the appended value
	finalDelegationDecision.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalDelegationDecisionKey))
	appendedValue := k.cdc.MustMarshal(&finalDelegationDecision)
	store.Set(GetFinalDelegationDecisionIDBytes(finalDelegationDecision.Id), appendedValue)

	// Update finalDelegationDecision count
	k.SetFinalDelegationDecisionCount(ctx, count+1)

	return count
}

// SetFinalDelegationDecision set a specific finalDelegationDecision in the store
func (k Keeper) SetFinalDelegationDecision(ctx sdk.Context, finalDelegationDecision types.FinalDelegationDecision) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalDelegationDecisionKey))
	b := k.cdc.MustMarshal(&finalDelegationDecision)
	store.Set(GetFinalDelegationDecisionIDBytes(finalDelegationDecision.Id), b)
}

// GetFinalDelegationDecision returns a finalDelegationDecision from its id
func (k Keeper) GetFinalDelegationDecision(ctx sdk.Context, id uint64) (val types.FinalDelegationDecision, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalDelegationDecisionKey))
	b := store.Get(GetFinalDelegationDecisionIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFinalDelegationDecision removes a finalDelegationDecision from the store
func (k Keeper) RemoveFinalDelegationDecision(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalDelegationDecisionKey))
	store.Delete(GetFinalDelegationDecisionIDBytes(id))
}

// GetAllFinalDelegationDecision returns all finalDelegationDecision
func (k Keeper) GetAllFinalDelegationDecision(ctx sdk.Context) (list []types.FinalDelegationDecision) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalDelegationDecisionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.FinalDelegationDecision
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFinalDelegationDecisionIDBytes returns the byte representation of the ID
func GetFinalDelegationDecisionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFinalDelegationDecisionIDFromBytes returns ID in uint64 format from a byte array
func GetFinalDelegationDecisionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
