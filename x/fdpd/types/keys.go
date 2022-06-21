package types

const (
	// ModuleName defines the module name
	ModuleName = "fdpd"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_fdpd"

	// Version defines the current version the IBC module supports
	Version = "fdpd-1"

	// PortID is the default port id that module binds to
	PortID = "fdpd"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("fdpd-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	LocalDomainKey = "LocalDomain-value-"
)

const (
	DomainKey      = "Domain-value-"
	DomainCountKey = "Domain-count-"
)

const (
	ForwardPolicyKey = "ForwardPolicy-value-"
)

const (
	ValidityKey      = "Validity-value-"
	ValidityCountKey = "Validity-count-"
)

const (
	DecisionPolicyKey = "DecisionPolicy-value-"
)

const (
	PermissionKey      = "Permission-value-"
	PermissionCountKey = "Permission-count-"
)

const (
	DelegationConditionsKey      = "DelegationConditions-value-"
	DelegationConditionsCountKey = "DelegationConditions-count-"
)

const (
	DelegationDecisionKey      = "DelegationDecision-value-"
	DelegationDecisionCountKey = "DelegationDecision-count-"
)
