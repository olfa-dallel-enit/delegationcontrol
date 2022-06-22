package keeper

import (
	"encoding/binary"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetSelectionCriteriaCount get the total number of selectionCriteria
func (k Keeper) GetSelectionCriteriaCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SelectionCriteriaCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetSelectionCriteriaCount set the total number of selectionCriteria
func (k Keeper) SetSelectionCriteriaCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SelectionCriteriaCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendSelectionCriteria appends a selectionCriteria in the store with a new id and update the count
func (k Keeper) AppendSelectionCriteria(
	ctx sdk.Context,
	selectionCriteria types.SelectionCriteria,
) uint64 {
	// Create the selectionCriteria
	count := k.GetSelectionCriteriaCount(ctx)

	// Set the ID of the appended value
	selectionCriteria.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionCriteriaKey))
	appendedValue := k.cdc.MustMarshal(&selectionCriteria)
	store.Set(GetSelectionCriteriaIDBytes(selectionCriteria.Id), appendedValue)

	// Update selectionCriteria count
	k.SetSelectionCriteriaCount(ctx, count+1)

	return count
}

// SetSelectionCriteria set a specific selectionCriteria in the store
func (k Keeper) SetSelectionCriteria(ctx sdk.Context, selectionCriteria types.SelectionCriteria) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionCriteriaKey))
	b := k.cdc.MustMarshal(&selectionCriteria)
	store.Set(GetSelectionCriteriaIDBytes(selectionCriteria.Id), b)
}

// GetSelectionCriteria returns a selectionCriteria from its id
func (k Keeper) GetSelectionCriteria(ctx sdk.Context, id uint64) (val types.SelectionCriteria, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionCriteriaKey))
	b := store.Get(GetSelectionCriteriaIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSelectionCriteria removes a selectionCriteria from the store
func (k Keeper) RemoveSelectionCriteria(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionCriteriaKey))
	store.Delete(GetSelectionCriteriaIDBytes(id))
}

// GetAllSelectionCriteria returns all selectionCriteria
func (k Keeper) GetAllSelectionCriteria(ctx sdk.Context) (list []types.SelectionCriteria) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SelectionCriteriaKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SelectionCriteria
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSelectionCriteriaIDBytes returns the byte representation of the ID
func GetSelectionCriteriaIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSelectionCriteriaIDFromBytes returns ID in uint64 format from a byte array
func GetSelectionCriteriaIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
