package keeper

import (
	"encoding/binary"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationRequestCount get the total number of delegationRequest
func (k Keeper) GetDelegationRequestCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationRequestCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationRequestCount set the total number of delegationRequest
func (k Keeper) SetDelegationRequestCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationRequestCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationRequest appends a delegationRequest in the store with a new id and update the count
func (k Keeper) AppendDelegationRequest(
	ctx sdk.Context,
	delegationRequest types.DelegationRequest,
) uint64 {
	// Create the delegationRequest
	count := k.GetDelegationRequestCount(ctx)

	// Set the ID of the appended value
	delegationRequest.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestKey))
	appendedValue := k.cdc.MustMarshal(&delegationRequest)
	store.Set(GetDelegationRequestIDBytes(delegationRequest.Id), appendedValue)

	// Update delegationRequest count
	k.SetDelegationRequestCount(ctx, count+1)

	return count
}

// SetDelegationRequest set a specific delegationRequest in the store
func (k Keeper) SetDelegationRequest(ctx sdk.Context, delegationRequest types.DelegationRequest) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestKey))
	b := k.cdc.MustMarshal(&delegationRequest)
	store.Set(GetDelegationRequestIDBytes(delegationRequest.Id), b)
}

// GetDelegationRequest returns a delegationRequest from its id
func (k Keeper) GetDelegationRequest(ctx sdk.Context, id uint64) (val types.DelegationRequest, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestKey))
	b := store.Get(GetDelegationRequestIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationRequest removes a delegationRequest from the store
func (k Keeper) RemoveDelegationRequest(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestKey))
	store.Delete(GetDelegationRequestIDBytes(id))
}

// GetAllDelegationRequest returns all delegationRequest
func (k Keeper) GetAllDelegationRequest(ctx sdk.Context) (list []types.DelegationRequest) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationRequest
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationRequestIDBytes returns the byte representation of the ID
func GetDelegationRequestIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationRequestIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationRequestIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
