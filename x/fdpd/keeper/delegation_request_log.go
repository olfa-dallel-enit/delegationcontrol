package keeper

import (
	"encoding/binary"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationRequestLogCount get the total number of delegationRequestLog
func (k Keeper) GetDelegationRequestLogCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationRequestLogCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationRequestLogCount set the total number of delegationRequestLog
func (k Keeper) SetDelegationRequestLogCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationRequestLogCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationRequestLog appends a delegationRequestLog in the store with a new id and update the count
func (k Keeper) AppendDelegationRequestLog(
	ctx sdk.Context,
	delegationRequestLog types.DelegationRequestLog,
) uint64 {
	// Create the delegationRequestLog
	count := k.GetDelegationRequestLogCount(ctx)

	// Set the ID of the appended value
	delegationRequestLog.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestLogKey))
	appendedValue := k.cdc.MustMarshal(&delegationRequestLog)
	store.Set(GetDelegationRequestLogIDBytes(delegationRequestLog.Id), appendedValue)

	// Update delegationRequestLog count
	k.SetDelegationRequestLogCount(ctx, count+1)

	return count
}

// SetDelegationRequestLog set a specific delegationRequestLog in the store
func (k Keeper) SetDelegationRequestLog(ctx sdk.Context, delegationRequestLog types.DelegationRequestLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestLogKey))
	b := k.cdc.MustMarshal(&delegationRequestLog)
	store.Set(GetDelegationRequestLogIDBytes(delegationRequestLog.Id), b)
}

// GetDelegationRequestLog returns a delegationRequestLog from its id
func (k Keeper) GetDelegationRequestLog(ctx sdk.Context, id uint64) (val types.DelegationRequestLog, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestLogKey))
	b := store.Get(GetDelegationRequestLogIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationRequestLog removes a delegationRequestLog from the store
func (k Keeper) RemoveDelegationRequestLog(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestLogKey))
	store.Delete(GetDelegationRequestLogIDBytes(id))
}

// GetAllDelegationRequestLog returns all delegationRequestLog
func (k Keeper) GetAllDelegationRequestLog(ctx sdk.Context) (list []types.DelegationRequestLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestLogKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationRequestLog
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationRequestLogIDBytes returns the byte representation of the ID
func GetDelegationRequestLogIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationRequestLogIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationRequestLogIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetAllDelegationRequestLogByLabel(ctx sdk.Context, label string) (list []types.DelegationRequestLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRequestLogKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationRequestLog
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.RequestLabel == label {
			list = append(list, val)
		}
	}

	return
}
