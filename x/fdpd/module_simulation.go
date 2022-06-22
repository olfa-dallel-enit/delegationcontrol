package fdpd

import (
	"math/rand"

	"delegationcontrol/testutil/sample"
	fdpdsimulation "delegationcontrol/x/fdpd/simulation"
	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = fdpdsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateLocalDomain = "op_weight_msg_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateLocalDomain int = 100

	opWeightMsgUpdateLocalDomain = "op_weight_msg_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateLocalDomain int = 100

	opWeightMsgDeleteLocalDomain = "op_weight_msg_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteLocalDomain int = 100

	opWeightMsgCreateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDomain int = 100

	opWeightMsgUpdateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDomain int = 100

	opWeightMsgDeleteDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDomain int = 100

	opWeightMsgCreateForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateForwardPolicy int = 100

	opWeightMsgUpdateForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateForwardPolicy int = 100

	opWeightMsgDeleteForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteForwardPolicy int = 100

	opWeightMsgCreateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateValidity int = 100

	opWeightMsgUpdateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateValidity int = 100

	opWeightMsgDeleteValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteValidity int = 100

	opWeightMsgCreateDecisionPolicy = "op_weight_msg_decision_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDecisionPolicy int = 100

	opWeightMsgUpdateDecisionPolicy = "op_weight_msg_decision_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDecisionPolicy int = 100

	opWeightMsgDeleteDecisionPolicy = "op_weight_msg_decision_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDecisionPolicy int = 100

	opWeightMsgCreatePermission = "op_weight_msg_permission"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePermission int = 100

	opWeightMsgUpdatePermission = "op_weight_msg_permission"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePermission int = 100

	opWeightMsgDeletePermission = "op_weight_msg_permission"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePermission int = 100

	opWeightMsgCreateDelegationConditions = "op_weight_msg_delegation_conditions"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDelegationConditions int = 100

	opWeightMsgUpdateDelegationConditions = "op_weight_msg_delegation_conditions"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDelegationConditions int = 100

	opWeightMsgDeleteDelegationConditions = "op_weight_msg_delegation_conditions"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDelegationConditions int = 100

	opWeightMsgConfigureLocalDomain = "op_weight_msg_configure_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgConfigureLocalDomain int = 100

	opWeightMsgCreateDelegationDecision = "op_weight_msg_delegation_decision"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDelegationDecision int = 100

	opWeightMsgUpdateDelegationDecision = "op_weight_msg_delegation_decision"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDelegationDecision int = 100

	opWeightMsgDeleteDelegationDecision = "op_weight_msg_delegation_decision"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDelegationDecision int = 100

	opWeightMsgCreateSelectionPolicy = "op_weight_msg_selection_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSelectionPolicy int = 100

	opWeightMsgUpdateSelectionPolicy = "op_weight_msg_selection_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSelectionPolicy int = 100

	opWeightMsgDeleteSelectionPolicy = "op_weight_msg_selection_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteSelectionPolicy int = 100

	opWeightMsgCreateSelectionCriteria = "op_weight_msg_selection_criteria"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSelectionCriteria int = 100

	opWeightMsgUpdateSelectionCriteria = "op_weight_msg_selection_criteria"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSelectionCriteria int = 100

	opWeightMsgDeleteSelectionCriteria = "op_weight_msg_selection_criteria"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteSelectionCriteria int = 100

	opWeightMsgCheckDelegation = "op_weight_msg_check_delegation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCheckDelegation int = 100

	opWeightMsgCreateDelegationRequest = "op_weight_msg_delegation_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDelegationRequest int = 100

	opWeightMsgUpdateDelegationRequest = "op_weight_msg_delegation_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDelegationRequest int = 100

	opWeightMsgDeleteDelegationRequest = "op_weight_msg_delegation_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDelegationRequest int = 100

	opWeightMsgCreateFinalDelegationDecision = "op_weight_msg_final_delegation_decision"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateFinalDelegationDecision int = 100

	opWeightMsgUpdateFinalDelegationDecision = "op_weight_msg_final_delegation_decision"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateFinalDelegationDecision int = 100

	opWeightMsgDeleteFinalDelegationDecision = "op_weight_msg_final_delegation_decision"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteFinalDelegationDecision int = 100

	opWeightMsgCreateDelegationRequestLog = "op_weight_msg_delegation_request_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDelegationRequestLog int = 100

	opWeightMsgUpdateDelegationRequestLog = "op_weight_msg_delegation_request_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDelegationRequestLog int = 100

	opWeightMsgDeleteDelegationRequestLog = "op_weight_msg_delegation_request_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDelegationRequestLog int = 100

	opWeightMsgCreateCalculationTime = "op_weight_msg_calculation_time"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCalculationTime int = 100

	opWeightMsgUpdateCalculationTime = "op_weight_msg_calculation_time"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCalculationTime int = 100

	opWeightMsgDeleteCalculationTime = "op_weight_msg_calculation_time"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCalculationTime int = 100

	opWeightMsgCalculateRequestDelegationTiming = "op_weight_msg_calculate_request_delegation_timing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCalculateRequestDelegationTiming int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	fdpdGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		DomainList: []types.Domain{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DomainCount: 2,
		ValidityList: []types.Validity{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ValidityCount: 2,
		PermissionList: []types.Permission{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		PermissionCount: 2,
		DelegationConditionsList: []types.DelegationConditions{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DelegationConditionsCount: 2,
		DelegationDecisionList: []types.DelegationDecision{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DelegationDecisionCount: 2,
		SelectionCriteriaList: []types.SelectionCriteria{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		SelectionCriteriaCount: 2,
		DelegationRequestList: []types.DelegationRequest{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DelegationRequestCount: 2,
		FinalDelegationDecisionList: []types.FinalDelegationDecision{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		FinalDelegationDecisionCount: 2,
		DelegationRequestLogList: []types.DelegationRequestLog{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DelegationRequestLogCount: 2,
		CalculationTimeList: []types.CalculationTime{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CalculationTimeCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&fdpdGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateLocalDomain, &weightMsgCreateLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgCreateLocalDomain = defaultWeightMsgCreateLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateLocalDomain,
		fdpdsimulation.SimulateMsgCreateLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateLocalDomain, &weightMsgUpdateLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateLocalDomain = defaultWeightMsgUpdateLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateLocalDomain,
		fdpdsimulation.SimulateMsgUpdateLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteLocalDomain, &weightMsgDeleteLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteLocalDomain = defaultWeightMsgDeleteLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteLocalDomain,
		fdpdsimulation.SimulateMsgDeleteLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDomain, &weightMsgCreateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDomain = defaultWeightMsgCreateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDomain,
		fdpdsimulation.SimulateMsgCreateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDomain, &weightMsgUpdateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDomain = defaultWeightMsgUpdateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDomain,
		fdpdsimulation.SimulateMsgUpdateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDomain, &weightMsgDeleteDomain, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDomain = defaultWeightMsgDeleteDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDomain,
		fdpdsimulation.SimulateMsgDeleteDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateForwardPolicy, &weightMsgCreateForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateForwardPolicy = defaultWeightMsgCreateForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateForwardPolicy,
		fdpdsimulation.SimulateMsgCreateForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateForwardPolicy, &weightMsgUpdateForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateForwardPolicy = defaultWeightMsgUpdateForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateForwardPolicy,
		fdpdsimulation.SimulateMsgUpdateForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteForwardPolicy, &weightMsgDeleteForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteForwardPolicy = defaultWeightMsgDeleteForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteForwardPolicy,
		fdpdsimulation.SimulateMsgDeleteForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateValidity, &weightMsgCreateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgCreateValidity = defaultWeightMsgCreateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateValidity,
		fdpdsimulation.SimulateMsgCreateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateValidity, &weightMsgUpdateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateValidity = defaultWeightMsgUpdateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateValidity,
		fdpdsimulation.SimulateMsgUpdateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteValidity, &weightMsgDeleteValidity, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteValidity = defaultWeightMsgDeleteValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteValidity,
		fdpdsimulation.SimulateMsgDeleteValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDecisionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDecisionPolicy, &weightMsgCreateDecisionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDecisionPolicy = defaultWeightMsgCreateDecisionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDecisionPolicy,
		fdpdsimulation.SimulateMsgCreateDecisionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDecisionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDecisionPolicy, &weightMsgUpdateDecisionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDecisionPolicy = defaultWeightMsgUpdateDecisionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDecisionPolicy,
		fdpdsimulation.SimulateMsgUpdateDecisionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDecisionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDecisionPolicy, &weightMsgDeleteDecisionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDecisionPolicy = defaultWeightMsgDeleteDecisionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDecisionPolicy,
		fdpdsimulation.SimulateMsgDeleteDecisionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePermission int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePermission, &weightMsgCreatePermission, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePermission = defaultWeightMsgCreatePermission
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePermission,
		fdpdsimulation.SimulateMsgCreatePermission(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePermission int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePermission, &weightMsgUpdatePermission, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePermission = defaultWeightMsgUpdatePermission
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePermission,
		fdpdsimulation.SimulateMsgUpdatePermission(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePermission int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePermission, &weightMsgDeletePermission, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePermission = defaultWeightMsgDeletePermission
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePermission,
		fdpdsimulation.SimulateMsgDeletePermission(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDelegationConditions int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDelegationConditions, &weightMsgCreateDelegationConditions, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDelegationConditions = defaultWeightMsgCreateDelegationConditions
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDelegationConditions,
		fdpdsimulation.SimulateMsgCreateDelegationConditions(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDelegationConditions int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDelegationConditions, &weightMsgUpdateDelegationConditions, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDelegationConditions = defaultWeightMsgUpdateDelegationConditions
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDelegationConditions,
		fdpdsimulation.SimulateMsgUpdateDelegationConditions(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDelegationConditions int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDelegationConditions, &weightMsgDeleteDelegationConditions, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDelegationConditions = defaultWeightMsgDeleteDelegationConditions
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDelegationConditions,
		fdpdsimulation.SimulateMsgDeleteDelegationConditions(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgConfigureLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgConfigureLocalDomain, &weightMsgConfigureLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgConfigureLocalDomain = defaultWeightMsgConfigureLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgConfigureLocalDomain,
		fdpdsimulation.SimulateMsgConfigureLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDelegationDecision int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDelegationDecision, &weightMsgCreateDelegationDecision, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDelegationDecision = defaultWeightMsgCreateDelegationDecision
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDelegationDecision,
		fdpdsimulation.SimulateMsgCreateDelegationDecision(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDelegationDecision int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDelegationDecision, &weightMsgUpdateDelegationDecision, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDelegationDecision = defaultWeightMsgUpdateDelegationDecision
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDelegationDecision,
		fdpdsimulation.SimulateMsgUpdateDelegationDecision(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDelegationDecision int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDelegationDecision, &weightMsgDeleteDelegationDecision, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDelegationDecision = defaultWeightMsgDeleteDelegationDecision
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDelegationDecision,
		fdpdsimulation.SimulateMsgDeleteDelegationDecision(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSelectionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateSelectionPolicy, &weightMsgCreateSelectionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSelectionPolicy = defaultWeightMsgCreateSelectionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSelectionPolicy,
		fdpdsimulation.SimulateMsgCreateSelectionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSelectionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateSelectionPolicy, &weightMsgUpdateSelectionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSelectionPolicy = defaultWeightMsgUpdateSelectionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSelectionPolicy,
		fdpdsimulation.SimulateMsgUpdateSelectionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteSelectionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteSelectionPolicy, &weightMsgDeleteSelectionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteSelectionPolicy = defaultWeightMsgDeleteSelectionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteSelectionPolicy,
		fdpdsimulation.SimulateMsgDeleteSelectionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSelectionCriteria int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateSelectionCriteria, &weightMsgCreateSelectionCriteria, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSelectionCriteria = defaultWeightMsgCreateSelectionCriteria
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSelectionCriteria,
		fdpdsimulation.SimulateMsgCreateSelectionCriteria(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSelectionCriteria int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateSelectionCriteria, &weightMsgUpdateSelectionCriteria, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSelectionCriteria = defaultWeightMsgUpdateSelectionCriteria
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSelectionCriteria,
		fdpdsimulation.SimulateMsgUpdateSelectionCriteria(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteSelectionCriteria int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteSelectionCriteria, &weightMsgDeleteSelectionCriteria, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteSelectionCriteria = defaultWeightMsgDeleteSelectionCriteria
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteSelectionCriteria,
		fdpdsimulation.SimulateMsgDeleteSelectionCriteria(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCheckDelegation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCheckDelegation, &weightMsgCheckDelegation, nil,
		func(_ *rand.Rand) {
			weightMsgCheckDelegation = defaultWeightMsgCheckDelegation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCheckDelegation,
		fdpdsimulation.SimulateMsgCheckDelegation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDelegationRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDelegationRequest, &weightMsgCreateDelegationRequest, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDelegationRequest = defaultWeightMsgCreateDelegationRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDelegationRequest,
		fdpdsimulation.SimulateMsgCreateDelegationRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDelegationRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDelegationRequest, &weightMsgUpdateDelegationRequest, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDelegationRequest = defaultWeightMsgUpdateDelegationRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDelegationRequest,
		fdpdsimulation.SimulateMsgUpdateDelegationRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDelegationRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDelegationRequest, &weightMsgDeleteDelegationRequest, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDelegationRequest = defaultWeightMsgDeleteDelegationRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDelegationRequest,
		fdpdsimulation.SimulateMsgDeleteDelegationRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateFinalDelegationDecision int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateFinalDelegationDecision, &weightMsgCreateFinalDelegationDecision, nil,
		func(_ *rand.Rand) {
			weightMsgCreateFinalDelegationDecision = defaultWeightMsgCreateFinalDelegationDecision
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateFinalDelegationDecision,
		fdpdsimulation.SimulateMsgCreateFinalDelegationDecision(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateFinalDelegationDecision int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateFinalDelegationDecision, &weightMsgUpdateFinalDelegationDecision, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateFinalDelegationDecision = defaultWeightMsgUpdateFinalDelegationDecision
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateFinalDelegationDecision,
		fdpdsimulation.SimulateMsgUpdateFinalDelegationDecision(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteFinalDelegationDecision int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteFinalDelegationDecision, &weightMsgDeleteFinalDelegationDecision, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteFinalDelegationDecision = defaultWeightMsgDeleteFinalDelegationDecision
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteFinalDelegationDecision,
		fdpdsimulation.SimulateMsgDeleteFinalDelegationDecision(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDelegationRequestLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDelegationRequestLog, &weightMsgCreateDelegationRequestLog, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDelegationRequestLog = defaultWeightMsgCreateDelegationRequestLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDelegationRequestLog,
		fdpdsimulation.SimulateMsgCreateDelegationRequestLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDelegationRequestLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDelegationRequestLog, &weightMsgUpdateDelegationRequestLog, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDelegationRequestLog = defaultWeightMsgUpdateDelegationRequestLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDelegationRequestLog,
		fdpdsimulation.SimulateMsgUpdateDelegationRequestLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDelegationRequestLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDelegationRequestLog, &weightMsgDeleteDelegationRequestLog, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDelegationRequestLog = defaultWeightMsgDeleteDelegationRequestLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDelegationRequestLog,
		fdpdsimulation.SimulateMsgDeleteDelegationRequestLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCalculationTime int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCalculationTime, &weightMsgCreateCalculationTime, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCalculationTime = defaultWeightMsgCreateCalculationTime
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCalculationTime,
		fdpdsimulation.SimulateMsgCreateCalculationTime(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCalculationTime int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCalculationTime, &weightMsgUpdateCalculationTime, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCalculationTime = defaultWeightMsgUpdateCalculationTime
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCalculationTime,
		fdpdsimulation.SimulateMsgUpdateCalculationTime(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCalculationTime int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCalculationTime, &weightMsgDeleteCalculationTime, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCalculationTime = defaultWeightMsgDeleteCalculationTime
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCalculationTime,
		fdpdsimulation.SimulateMsgDeleteCalculationTime(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCalculateRequestDelegationTiming int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCalculateRequestDelegationTiming, &weightMsgCalculateRequestDelegationTiming, nil,
		func(_ *rand.Rand) {
			weightMsgCalculateRequestDelegationTiming = defaultWeightMsgCalculateRequestDelegationTiming
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCalculateRequestDelegationTiming,
		fdpdsimulation.SimulateMsgCalculateRequestDelegationTiming(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
