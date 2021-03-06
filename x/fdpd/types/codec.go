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
	cdc.RegisterConcrete(&MsgCreateSelectionPolicy{}, "fdpd/CreateSelectionPolicy", nil)
	cdc.RegisterConcrete(&MsgUpdateSelectionPolicy{}, "fdpd/UpdateSelectionPolicy", nil)
	cdc.RegisterConcrete(&MsgDeleteSelectionPolicy{}, "fdpd/DeleteSelectionPolicy", nil)
	cdc.RegisterConcrete(&MsgCreateSelectionCriteria{}, "fdpd/CreateSelectionCriteria", nil)
	cdc.RegisterConcrete(&MsgUpdateSelectionCriteria{}, "fdpd/UpdateSelectionCriteria", nil)
	cdc.RegisterConcrete(&MsgDeleteSelectionCriteria{}, "fdpd/DeleteSelectionCriteria", nil)
	cdc.RegisterConcrete(&MsgCheckDelegation{}, "fdpd/CheckDelegation", nil)
	cdc.RegisterConcrete(&MsgCreateDelegationRequest{}, "fdpd/CreateDelegationRequest", nil)
	cdc.RegisterConcrete(&MsgUpdateDelegationRequest{}, "fdpd/UpdateDelegationRequest", nil)
	cdc.RegisterConcrete(&MsgDeleteDelegationRequest{}, "fdpd/DeleteDelegationRequest", nil)
	cdc.RegisterConcrete(&MsgCreateFinalDelegationDecision{}, "fdpd/CreateFinalDelegationDecision", nil)
	cdc.RegisterConcrete(&MsgUpdateFinalDelegationDecision{}, "fdpd/UpdateFinalDelegationDecision", nil)
	cdc.RegisterConcrete(&MsgDeleteFinalDelegationDecision{}, "fdpd/DeleteFinalDelegationDecision", nil)
	cdc.RegisterConcrete(&MsgCreateDelegationRequestLog{}, "fdpd/CreateDelegationRequestLog", nil)
	cdc.RegisterConcrete(&MsgUpdateDelegationRequestLog{}, "fdpd/UpdateDelegationRequestLog", nil)
	cdc.RegisterConcrete(&MsgDeleteDelegationRequestLog{}, "fdpd/DeleteDelegationRequestLog", nil)
	cdc.RegisterConcrete(&MsgCreateCalculationTime{}, "fdpd/CreateCalculationTime", nil)
	cdc.RegisterConcrete(&MsgUpdateCalculationTime{}, "fdpd/UpdateCalculationTime", nil)
	cdc.RegisterConcrete(&MsgDeleteCalculationTime{}, "fdpd/DeleteCalculationTime", nil)
	cdc.RegisterConcrete(&MsgCalculateRequestDelegationTiming{}, "fdpd/CalculateRequestDelegationTiming", nil)
	cdc.RegisterConcrete(&MsgAddDelegationDecision{}, "fdpd/AddDelegationDecision", nil)
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
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSelectionPolicy{},
		&MsgUpdateSelectionPolicy{},
		&MsgDeleteSelectionPolicy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSelectionCriteria{},
		&MsgUpdateSelectionCriteria{},
		&MsgDeleteSelectionCriteria{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCheckDelegation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDelegationRequest{},
		&MsgUpdateDelegationRequest{},
		&MsgDeleteDelegationRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateFinalDelegationDecision{},
		&MsgUpdateFinalDelegationDecision{},
		&MsgDeleteFinalDelegationDecision{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDelegationRequestLog{},
		&MsgUpdateDelegationRequestLog{},
		&MsgDeleteDelegationRequestLog{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCalculationTime{},
		&MsgUpdateCalculationTime{},
		&MsgDeleteCalculationTime{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCalculateRequestDelegationTiming{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddDelegationDecision{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
