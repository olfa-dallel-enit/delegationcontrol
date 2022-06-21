package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateLocalDomain{}, "fdpd/CreateLocalDomain", nil)
	cdc.RegisterConcrete(&MsgUpdateLocalDomain{}, "fdpd/UpdateLocalDomain", nil)
	cdc.RegisterConcrete(&MsgDeleteLocalDomain{}, "fdpd/DeleteLocalDomain", nil)
	cdc.RegisterConcrete(&MsgCreateDomain{}, "fdpd/CreateDomain", nil)
	cdc.RegisterConcrete(&MsgUpdateDomain{}, "fdpd/UpdateDomain", nil)
	cdc.RegisterConcrete(&MsgDeleteDomain{}, "fdpd/DeleteDomain", nil)
	cdc.RegisterConcrete(&MsgSendEstablishCooperation{}, "fdpd/SendEstablishCooperation", nil)
	cdc.RegisterConcrete(&MsgCreateForwardPolicy{}, "fdpd/CreateForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgUpdateForwardPolicy{}, "fdpd/UpdateForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgDeleteForwardPolicy{}, "fdpd/DeleteForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgCreateValidity{}, "fdpd/CreateValidity", nil)
	cdc.RegisterConcrete(&MsgUpdateValidity{}, "fdpd/UpdateValidity", nil)
	cdc.RegisterConcrete(&MsgDeleteValidity{}, "fdpd/DeleteValidity", nil)
	cdc.RegisterConcrete(&MsgCreateDecisionPolicy{}, "fdpd/CreateDecisionPolicy", nil)
	cdc.RegisterConcrete(&MsgUpdateDecisionPolicy{}, "fdpd/UpdateDecisionPolicy", nil)
	cdc.RegisterConcrete(&MsgDeleteDecisionPolicy{}, "fdpd/DeleteDecisionPolicy", nil)
	cdc.RegisterConcrete(&MsgCreatePermission{}, "fdpd/CreatePermission", nil)
	cdc.RegisterConcrete(&MsgUpdatePermission{}, "fdpd/UpdatePermission", nil)
	cdc.RegisterConcrete(&MsgDeletePermission{}, "fdpd/DeletePermission", nil)
	cdc.RegisterConcrete(&MsgCreateDelegationConditions{}, "fdpd/CreateDelegationConditions", nil)
	cdc.RegisterConcrete(&MsgUpdateDelegationConditions{}, "fdpd/UpdateDelegationConditions", nil)
	cdc.RegisterConcrete(&MsgDeleteDelegationConditions{}, "fdpd/DeleteDelegationConditions", nil)
	cdc.RegisterConcrete(&MsgSendRequestDelegation{}, "fdpd/SendRequestDelegation", nil)
	cdc.RegisterConcrete(&MsgConfigureLocalDomain{}, "fdpd/ConfigureLocalDomain", nil)
	cdc.RegisterConcrete(&MsgCreateDelegationDecision{}, "fdpd/CreateDelegationDecision", nil)
	cdc.RegisterConcrete(&MsgUpdateDelegationDecision{}, "fdpd/UpdateDelegationDecision", nil)
	cdc.RegisterConcrete(&MsgDeleteDelegationDecision{}, "fdpd/DeleteDelegationDecision", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLocalDomain{},
		&MsgUpdateLocalDomain{},
		&MsgDeleteLocalDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDomain{},
		&MsgUpdateDomain{},
		&MsgDeleteDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendEstablishCooperation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateForwardPolicy{},
		&MsgUpdateForwardPolicy{},
		&MsgDeleteForwardPolicy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateValidity{},
		&MsgUpdateValidity{},
		&MsgDeleteValidity{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDecisionPolicy{},
		&MsgUpdateDecisionPolicy{},
		&MsgDeleteDecisionPolicy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePermission{},
		&MsgUpdatePermission{},
		&MsgDeletePermission{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDelegationConditions{},
		&MsgUpdateDelegationConditions{},
		&MsgDeleteDelegationConditions{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendRequestDelegation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgConfigureLocalDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDelegationDecision{},
		&MsgUpdateDelegationDecision{},
		&MsgDeleteDelegationDecision{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
