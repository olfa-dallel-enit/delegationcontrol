// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: fdpd/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the fdpd module's genesis state.
type GenesisState struct {
	Params                    Params                 `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	PortId                    string                 `protobuf:"bytes,2,opt,name=port_id,json=portId,proto3" json:"port_id,omitempty"`
	LocalDomain               *LocalDomain           `protobuf:"bytes,3,opt,name=localDomain,proto3" json:"localDomain,omitempty"`
	DomainList                []Domain               `protobuf:"bytes,4,rep,name=domainList,proto3" json:"domainList"`
	DomainCount               uint64                 `protobuf:"varint,5,opt,name=domainCount,proto3" json:"domainCount,omitempty"`
	ForwardPolicy             *ForwardPolicy         `protobuf:"bytes,6,opt,name=forwardPolicy,proto3" json:"forwardPolicy,omitempty"`
	ValidityList              []Validity             `protobuf:"bytes,7,rep,name=validityList,proto3" json:"validityList"`
	ValidityCount             uint64                 `protobuf:"varint,8,opt,name=validityCount,proto3" json:"validityCount,omitempty"`
	DecisionPolicy            *DecisionPolicy        `protobuf:"bytes,9,opt,name=decisionPolicy,proto3" json:"decisionPolicy,omitempty"`
	PermissionList            []Permission           `protobuf:"bytes,10,rep,name=permissionList,proto3" json:"permissionList"`
	PermissionCount           uint64                 `protobuf:"varint,11,opt,name=permissionCount,proto3" json:"permissionCount,omitempty"`
	DelegationConditionsList  []DelegationConditions `protobuf:"bytes,12,rep,name=delegationConditionsList,proto3" json:"delegationConditionsList"`
	DelegationConditionsCount uint64                 `protobuf:"varint,13,opt,name=delegationConditionsCount,proto3" json:"delegationConditionsCount,omitempty"`
	DelegationDecisionList    []DelegationDecision   `protobuf:"bytes,14,rep,name=delegationDecisionList,proto3" json:"delegationDecisionList"`
	DelegationDecisionCount   uint64                 `protobuf:"varint,15,opt,name=delegationDecisionCount,proto3" json:"delegationDecisionCount,omitempty"`
	SelectionPolicy           *SelectionPolicy       `protobuf:"bytes,16,opt,name=selectionPolicy,proto3" json:"selectionPolicy,omitempty"`
	SelectionCriteriaList     []SelectionCriteria    `protobuf:"bytes,17,rep,name=selectionCriteriaList,proto3" json:"selectionCriteriaList"`
	SelectionCriteriaCount    uint64                 `protobuf:"varint,18,opt,name=selectionCriteriaCount,proto3" json:"selectionCriteriaCount,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_009418220533af18, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetPortId() string {
	if m != nil {
		return m.PortId
	}
	return ""
}

func (m *GenesisState) GetLocalDomain() *LocalDomain {
	if m != nil {
		return m.LocalDomain
	}
	return nil
}

func (m *GenesisState) GetDomainList() []Domain {
	if m != nil {
		return m.DomainList
	}
	return nil
}

func (m *GenesisState) GetDomainCount() uint64 {
	if m != nil {
		return m.DomainCount
	}
	return 0
}

func (m *GenesisState) GetForwardPolicy() *ForwardPolicy {
	if m != nil {
		return m.ForwardPolicy
	}
	return nil
}

func (m *GenesisState) GetValidityList() []Validity {
	if m != nil {
		return m.ValidityList
	}
	return nil
}

func (m *GenesisState) GetValidityCount() uint64 {
	if m != nil {
		return m.ValidityCount
	}
	return 0
}

func (m *GenesisState) GetDecisionPolicy() *DecisionPolicy {
	if m != nil {
		return m.DecisionPolicy
	}
	return nil
}

func (m *GenesisState) GetPermissionList() []Permission {
	if m != nil {
		return m.PermissionList
	}
	return nil
}

func (m *GenesisState) GetPermissionCount() uint64 {
	if m != nil {
		return m.PermissionCount
	}
	return 0
}

func (m *GenesisState) GetDelegationConditionsList() []DelegationConditions {
	if m != nil {
		return m.DelegationConditionsList
	}
	return nil
}

func (m *GenesisState) GetDelegationConditionsCount() uint64 {
	if m != nil {
		return m.DelegationConditionsCount
	}
	return 0
}

func (m *GenesisState) GetDelegationDecisionList() []DelegationDecision {
	if m != nil {
		return m.DelegationDecisionList
	}
	return nil
}

func (m *GenesisState) GetDelegationDecisionCount() uint64 {
	if m != nil {
		return m.DelegationDecisionCount
	}
	return 0
}

func (m *GenesisState) GetSelectionPolicy() *SelectionPolicy {
	if m != nil {
		return m.SelectionPolicy
	}
	return nil
}

func (m *GenesisState) GetSelectionCriteriaList() []SelectionCriteria {
	if m != nil {
		return m.SelectionCriteriaList
	}
	return nil
}

func (m *GenesisState) GetSelectionCriteriaCount() uint64 {
	if m != nil {
		return m.SelectionCriteriaCount
	}
	return 0
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "delegationcontrol.fdpd.GenesisState")
}

func init() { proto.RegisterFile("fdpd/genesis.proto", fileDescriptor_009418220533af18) }

var fileDescriptor_009418220533af18 = []byte{
	// 603 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x94, 0x4d, 0x6f, 0xd3, 0x40,
	0x10, 0x86, 0x63, 0x5a, 0x52, 0x32, 0xf9, 0xa2, 0x0b, 0x6d, 0xdc, 0x20, 0x8c, 0x55, 0xbe, 0x02,
	0x42, 0x89, 0x04, 0x12, 0xea, 0xa1, 0xa7, 0xa6, 0x80, 0x80, 0x0a, 0x05, 0x57, 0xe2, 0xc0, 0x25,
	0x32, 0xf6, 0x36, 0xac, 0xe4, 0x78, 0x2d, 0x7b, 0xf9, 0xe8, 0xbf, 0xe0, 0x67, 0xf5, 0xd8, 0x23,
	0x27, 0x84, 0x92, 0x3f, 0x82, 0x32, 0xbb, 0x9b, 0xc4, 0x4e, 0x96, 0xde, 0xe2, 0x99, 0xf7, 0x1d,
	0x3f, 0xef, 0x78, 0xb3, 0x40, 0xce, 0xc2, 0x24, 0xec, 0x8d, 0x68, 0x4c, 0x33, 0x96, 0x75, 0x93,
	0x94, 0x0b, 0x4e, 0x76, 0x43, 0x1a, 0xd1, 0x91, 0x2f, 0x18, 0x8f, 0x03, 0x1e, 0x8b, 0x94, 0x47,
	0xdd, 0x99, 0xaa, 0x7d, 0x7b, 0xc4, 0x47, 0x1c, 0x25, 0xbd, 0xd9, 0x2f, 0xa9, 0x6e, 0x6f, 0xe3,
	0x84, 0xc4, 0x4f, 0xfd, 0xb1, 0x1a, 0xd0, 0x6e, 0x61, 0x29, 0xe2, 0x81, 0x1f, 0x0d, 0x43, 0x3e,
	0xf6, 0x59, 0x9c, 0xd3, 0xe6, 0x4a, 0x7b, 0x58, 0x3a, 0xe3, 0xe9, 0x0f, 0x3f, 0x0d, 0x87, 0x09,
	0x8f, 0x58, 0x70, 0xae, 0x5a, 0xb7, 0xb0, 0xf5, 0xdd, 0x8f, 0x58, 0xc8, 0x84, 0x2e, 0xb6, 0xe5,
	0x08, 0x1a, 0xb0, 0x8c, 0xf1, 0x38, 0x6f, 0xd8, 0x91, 0x28, 0x34, 0x1d, 0xb3, 0x6c, 0xd6, 0x55,
	0x65, 0x57, 0x59, 0x74, 0xa8, 0x61, 0xc0, 0xe3, 0x90, 0xcd, 0x7e, 0x69, 0x60, 0xa7, 0xa8, 0xd0,
	0xf3, 0x55, 0xff, 0x0e, 0xf6, 0x33, 0x1a, 0xd1, 0x40, 0xac, 0xbc, 0xf5, 0x6e, 0xa1, 0x19, 0xa4,
	0x4c, 0xd0, 0x94, 0xf9, 0xb2, 0xbd, 0x3f, 0xad, 0x40, 0xed, 0x8d, 0xdc, 0xef, 0xa9, 0xf0, 0x05,
	0x25, 0x87, 0x50, 0x96, 0xdb, 0xb2, 0x2d, 0xd7, 0xea, 0x54, 0x9f, 0x3b, 0xdd, 0xf5, 0xfb, 0xee,
	0x0e, 0x50, 0x75, 0xb4, 0x79, 0xf1, 0xe7, 0x5e, 0xc9, 0x53, 0x1e, 0xd2, 0x82, 0xad, 0x84, 0xa7,
	0x62, 0xc8, 0x42, 0xfb, 0x9a, 0x6b, 0x75, 0x2a, 0x5e, 0x79, 0xf6, 0xf8, 0x36, 0x24, 0xaf, 0xa0,
	0x8a, 0x1b, 0x3f, 0xc6, 0xed, 0xda, 0x1b, 0x38, 0xfb, 0xbe, 0x69, 0xf6, 0xc9, 0x42, 0xea, 0x2d,
	0xfb, 0xc8, 0x31, 0x80, 0xfc, 0x3e, 0x27, 0x2c, 0x13, 0xf6, 0xa6, 0xbb, 0xf1, 0x3f, 0x42, 0xe9,
	0x51, 0x84, 0x4b, 0x3e, 0xe2, 0x42, 0x55, 0x3e, 0xf5, 0xf9, 0xb7, 0x58, 0xd8, 0xd7, 0x5d, 0xab,
	0xb3, 0xe9, 0x2d, 0x97, 0xc8, 0x7b, 0xa8, 0xab, 0x8f, 0x3e, 0xc0, 0x65, 0xda, 0x65, 0x04, 0x7e,
	0x68, 0x7a, 0xd5, 0xeb, 0x65, 0xb1, 0x97, 0xf7, 0x92, 0x77, 0x50, 0xd3, 0xc7, 0x04, 0xb1, 0xb7,
	0x10, 0xdb, 0x35, 0xcd, 0xfa, 0xa4, 0xb4, 0x0a, 0x3c, 0xe7, 0x25, 0x0f, 0xa0, 0xae, 0x9f, 0x25,
	0xfc, 0x0d, 0x84, 0xcf, 0x17, 0xc9, 0x07, 0x68, 0xe8, 0x33, 0xa2, 0xf8, 0x2b, 0xc8, 0xff, 0xc8,
	0xb8, 0xaa, 0x9c, 0xda, 0x2b, 0xb8, 0xc9, 0x00, 0x1a, 0x8b, 0x73, 0x8b, 0x19, 0x00, 0x33, 0xec,
	0x1b, 0x0f, 0xc7, 0x5c, 0xad, 0x52, 0x14, 0xfc, 0xa4, 0x03, 0xcd, 0x45, 0x45, 0x26, 0xa9, 0x62,
	0x92, 0x62, 0x99, 0xc4, 0x60, 0x2f, 0x5e, 0xd2, 0x9f, 0xff, 0x37, 0x90, 0xa2, 0x86, 0x14, 0xcf,
	0xcc, 0xa9, 0x56, 0x7d, 0x8a, 0xc7, 0x38, 0x93, 0x1c, 0xc2, 0xde, 0xba, 0x9e, 0x64, 0xac, 0x23,
	0xa3, 0x59, 0x40, 0xbe, 0xc2, 0xd2, 0xfd, 0xa4, 0xb7, 0x8a, 0xac, 0x0d, 0x64, 0x7d, 0x7a, 0x35,
	0xab, 0x76, 0x29, 0x52, 0xc3, 0x3c, 0x72, 0x00, 0xad, 0xd5, 0x8e, 0xa4, 0x6c, 0x22, 0xa5, 0xa9,
	0x4d, 0x3e, 0x42, 0x73, 0x7e, 0x1f, 0xa8, 0xe3, 0x71, 0x13, 0x8f, 0xc7, 0x63, 0x13, 0xdc, 0x69,
	0x5e, 0xee, 0x15, 0xfd, 0x84, 0xc2, 0xce, 0xbc, 0xd4, 0x57, 0x37, 0x0c, 0xa6, 0xde, 0xc6, 0xd4,
	0x4f, 0xae, 0x1c, 0xac, 0x4d, 0x2a, 0xf4, 0xfa, 0x69, 0xe4, 0x25, 0xec, 0xae, 0x34, 0x64, 0x64,
	0x82, 0x91, 0x0d, 0xdd, 0xa3, 0x83, 0x8b, 0x89, 0x63, 0x5d, 0x4e, 0x1c, 0xeb, 0xef, 0xc4, 0xb1,
	0x7e, 0x4d, 0x9d, 0xd2, 0xe5, 0xd4, 0x29, 0xfd, 0x9e, 0x3a, 0xa5, 0xcf, 0xce, 0x0a, 0x58, 0xef,
	0x67, 0x0f, 0xaf, 0x4c, 0x71, 0x9e, 0xd0, 0xec, 0x4b, 0x19, 0xaf, 0xc9, 0x17, 0xff, 0x02, 0x00,
	0x00, 0xff, 0xff, 0x64, 0x09, 0x6e, 0x8f, 0x8a, 0x06, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.SelectionCriteriaCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.SelectionCriteriaCount))
		i--
		dAtA[i] = 0x1
		i--
		dAtA[i] = 0x90
	}
	if len(m.SelectionCriteriaList) > 0 {
		for iNdEx := len(m.SelectionCriteriaList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SelectionCriteriaList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1
			i--
			dAtA[i] = 0x8a
		}
	}
	if m.SelectionPolicy != nil {
		{
			size, err := m.SelectionPolicy.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1
		i--
		dAtA[i] = 0x82
	}
	if m.DelegationDecisionCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.DelegationDecisionCount))
		i--
		dAtA[i] = 0x78
	}
	if len(m.DelegationDecisionList) > 0 {
		for iNdEx := len(m.DelegationDecisionList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DelegationDecisionList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x72
		}
	}
	if m.DelegationConditionsCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.DelegationConditionsCount))
		i--
		dAtA[i] = 0x68
	}
	if len(m.DelegationConditionsList) > 0 {
		for iNdEx := len(m.DelegationConditionsList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DelegationConditionsList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x62
		}
	}
	if m.PermissionCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.PermissionCount))
		i--
		dAtA[i] = 0x58
	}
	if len(m.PermissionList) > 0 {
		for iNdEx := len(m.PermissionList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PermissionList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x52
		}
	}
	if m.DecisionPolicy != nil {
		{
			size, err := m.DecisionPolicy.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x4a
	}
	if m.ValidityCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.ValidityCount))
		i--
		dAtA[i] = 0x40
	}
	if len(m.ValidityList) > 0 {
		for iNdEx := len(m.ValidityList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ValidityList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if m.ForwardPolicy != nil {
		{
			size, err := m.ForwardPolicy.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x32
	}
	if m.DomainCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.DomainCount))
		i--
		dAtA[i] = 0x28
	}
	if len(m.DomainList) > 0 {
		for iNdEx := len(m.DomainList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DomainList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if m.LocalDomain != nil {
		{
			size, err := m.LocalDomain.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if len(m.PortId) > 0 {
		i -= len(m.PortId)
		copy(dAtA[i:], m.PortId)
		i = encodeVarintGenesis(dAtA, i, uint64(len(m.PortId)))
		i--
		dAtA[i] = 0x12
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	l = len(m.PortId)
	if l > 0 {
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.LocalDomain != nil {
		l = m.LocalDomain.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.DomainList) > 0 {
		for _, e := range m.DomainList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.DomainCount != 0 {
		n += 1 + sovGenesis(uint64(m.DomainCount))
	}
	if m.ForwardPolicy != nil {
		l = m.ForwardPolicy.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.ValidityList) > 0 {
		for _, e := range m.ValidityList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.ValidityCount != 0 {
		n += 1 + sovGenesis(uint64(m.ValidityCount))
	}
	if m.DecisionPolicy != nil {
		l = m.DecisionPolicy.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.PermissionList) > 0 {
		for _, e := range m.PermissionList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.PermissionCount != 0 {
		n += 1 + sovGenesis(uint64(m.PermissionCount))
	}
	if len(m.DelegationConditionsList) > 0 {
		for _, e := range m.DelegationConditionsList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.DelegationConditionsCount != 0 {
		n += 1 + sovGenesis(uint64(m.DelegationConditionsCount))
	}
	if len(m.DelegationDecisionList) > 0 {
		for _, e := range m.DelegationDecisionList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.DelegationDecisionCount != 0 {
		n += 1 + sovGenesis(uint64(m.DelegationDecisionCount))
	}
	if m.SelectionPolicy != nil {
		l = m.SelectionPolicy.Size()
		n += 2 + l + sovGenesis(uint64(l))
	}
	if len(m.SelectionCriteriaList) > 0 {
		for _, e := range m.SelectionCriteriaList {
			l = e.Size()
			n += 2 + l + sovGenesis(uint64(l))
		}
	}
	if m.SelectionCriteriaCount != 0 {
		n += 2 + sovGenesis(uint64(m.SelectionCriteriaCount))
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PortId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PortId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LocalDomain", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.LocalDomain == nil {
				m.LocalDomain = &LocalDomain{}
			}
			if err := m.LocalDomain.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DomainList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DomainList = append(m.DomainList, Domain{})
			if err := m.DomainList[len(m.DomainList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DomainCount", wireType)
			}
			m.DomainCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DomainCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ForwardPolicy", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ForwardPolicy == nil {
				m.ForwardPolicy = &ForwardPolicy{}
			}
			if err := m.ForwardPolicy.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidityList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ValidityList = append(m.ValidityList, Validity{})
			if err := m.ValidityList[len(m.ValidityList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidityCount", wireType)
			}
			m.ValidityCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ValidityCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DecisionPolicy", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.DecisionPolicy == nil {
				m.DecisionPolicy = &DecisionPolicy{}
			}
			if err := m.DecisionPolicy.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PermissionList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PermissionList = append(m.PermissionList, Permission{})
			if err := m.PermissionList[len(m.PermissionList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PermissionCount", wireType)
			}
			m.PermissionCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PermissionCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DelegationConditionsList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DelegationConditionsList = append(m.DelegationConditionsList, DelegationConditions{})
			if err := m.DelegationConditionsList[len(m.DelegationConditionsList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 13:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DelegationConditionsCount", wireType)
			}
			m.DelegationConditionsCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DelegationConditionsCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DelegationDecisionList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DelegationDecisionList = append(m.DelegationDecisionList, DelegationDecision{})
			if err := m.DelegationDecisionList[len(m.DelegationDecisionList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 15:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DelegationDecisionCount", wireType)
			}
			m.DelegationDecisionCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DelegationDecisionCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 16:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SelectionPolicy", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.SelectionPolicy == nil {
				m.SelectionPolicy = &SelectionPolicy{}
			}
			if err := m.SelectionPolicy.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 17:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SelectionCriteriaList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SelectionCriteriaList = append(m.SelectionCriteriaList, SelectionCriteria{})
			if err := m.SelectionCriteriaList[len(m.SelectionCriteriaList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 18:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field SelectionCriteriaCount", wireType)
			}
			m.SelectionCriteriaCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.SelectionCriteriaCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
