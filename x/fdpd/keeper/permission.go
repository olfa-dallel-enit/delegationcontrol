package keeper

import (
	"encoding/binary"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPermissionCount get the total number of permission
func (k Keeper) GetPermissionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PermissionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPermissionCount set the total number of permission
func (k Keeper) SetPermissionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PermissionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPermission appends a permission in the store with a new id and update the count
func (k Keeper) AppendPermission(
	ctx sdk.Context,
	permission types.Permission,
) uint64 {
	// Create the permission
	count := k.GetPermissionCount(ctx)

	// Set the ID of the appended value
	permission.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PermissionKey))
	appendedValue := k.cdc.MustMarshal(&permission)
	store.Set(GetPermissionIDBytes(permission.Id), appendedValue)

	// Update permission count
	k.SetPermissionCount(ctx, count+1)

	return count
}

// SetPermission set a specific permission in the store
func (k Keeper) SetPermission(ctx sdk.Context, permission types.Permission) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PermissionKey))
	b := k.cdc.MustMarshal(&permission)
	store.Set(GetPermissionIDBytes(permission.Id), b)
}

// GetPermission returns a permission from its id
func (k Keeper) GetPermission(ctx sdk.Context, id uint64) (val types.Permission, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PermissionKey))
	b := store.Get(GetPermissionIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePermission removes a permission from the store
func (k Keeper) RemovePermission(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PermissionKey))
	store.Delete(GetPermissionIDBytes(id))
}

// GetAllPermission returns all permission
func (k Keeper) GetAllPermission(ctx sdk.Context) (list []types.Permission) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PermissionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Permission
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPermissionIDBytes returns the byte representation of the ID
func GetPermissionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPermissionIDFromBytes returns ID in uint64 format from a byte array
func GetPermissionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
