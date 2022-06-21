package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:                   PortID,
		LocalDomain:              nil,
		DomainList:               []Domain{},
		ForwardPolicy:            nil,
		ValidityList:             []Validity{},
		DecisionPolicy:           nil,
		PermissionList:           []Permission{},
		DelegationConditionsList: []DelegationConditions{},
		DelegationDecisionList:   []DelegationDecision{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in domain
	domainIdMap := make(map[uint64]bool)
	domainCount := gs.GetDomainCount()
	for _, elem := range gs.DomainList {
		if _, ok := domainIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for domain")
		}
		if elem.Id >= domainCount {
			return fmt.Errorf("domain id should be lower or equal than the last id")
		}
		domainIdMap[elem.Id] = true
	}
	// Check for duplicated ID in validity
	validityIdMap := make(map[uint64]bool)
	validityCount := gs.GetValidityCount()
	for _, elem := range gs.ValidityList {
		if _, ok := validityIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for validity")
		}
		if elem.Id >= validityCount {
			return fmt.Errorf("validity id should be lower or equal than the last id")
		}
		validityIdMap[elem.Id] = true
	}
	// Check for duplicated ID in permission
	permissionIdMap := make(map[uint64]bool)
	permissionCount := gs.GetPermissionCount()
	for _, elem := range gs.PermissionList {
		if _, ok := permissionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for permission")
		}
		if elem.Id >= permissionCount {
			return fmt.Errorf("permission id should be lower or equal than the last id")
		}
		permissionIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationConditions
	delegationConditionsIdMap := make(map[uint64]bool)
	delegationConditionsCount := gs.GetDelegationConditionsCount()
	for _, elem := range gs.DelegationConditionsList {
		if _, ok := delegationConditionsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationConditions")
		}
		if elem.Id >= delegationConditionsCount {
			return fmt.Errorf("delegationConditions id should be lower or equal than the last id")
		}
		delegationConditionsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationDecision
	delegationDecisionIdMap := make(map[uint64]bool)
	delegationDecisionCount := gs.GetDelegationDecisionCount()
	for _, elem := range gs.DelegationDecisionList {
		if _, ok := delegationDecisionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationDecision")
		}
		if elem.Id >= delegationDecisionCount {
			return fmt.Errorf("delegationDecision id should be lower or equal than the last id")
		}
		delegationDecisionIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
