package keeper

import (
	"delegationcontrol/x/fdpd/types"
)

var _ types.QueryServer = Keeper{}
