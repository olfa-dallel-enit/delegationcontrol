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

func init() {
	proto.RegisterType((*GenesisState)(nil), "delegationcontrol.fdpd.GenesisState")
}

func init() { proto.RegisterFile("fdpd/genesis.proto", fileDescriptor_009418220533af18) }

var fileDescriptor_009418220533af18 = []byte{
	// 533 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x94, 0xcd, 0x6e, 0xd3, 0x40,
	0x10, 0xc7, 0x63, 0x1a, 0x12, 0x3a, 0xf9, 0xa8, 0x58, 0x3e, 0xe2, 0xe6, 0xb0, 0x58, 0xe5, 0x43,
	0x11, 0x42, 0x89, 0x04, 0x97, 0x1e, 0x7a, 0x6a, 0x0b, 0x08, 0xa8, 0x50, 0x64, 0x24, 0x0e, 0x5c,
	0x22, 0xe3, 0x75, 0xc3, 0x4a, 0x8e, 0xd7, 0xb2, 0x97, 0x8f, 0xbe, 0x05, 0x8f, 0xd5, 0x63, 0x8f,
	0x9c, 0x10, 0x4a, 0x9e, 0x80, 0x37, 0x40, 0x9e, 0xdd, 0x6d, 0x6c, 0xa7, 0x4b, 0x6f, 0xde, 0x99,
	0xff, 0x7f, 0xfc, 0x9b, 0x99, 0xd5, 0x02, 0x39, 0x65, 0x29, 0x9b, 0xcc, 0xa3, 0x24, 0xca, 0x79,
	0x3e, 0x4e, 0x33, 0x21, 0x05, 0xb9, 0xcf, 0xa2, 0x38, 0x9a, 0x07, 0x92, 0x8b, 0x24, 0x14, 0x89,
	0xcc, 0x44, 0x3c, 0x2e, 0x54, 0xc3, 0xbb, 0x73, 0x31, 0x17, 0x28, 0x99, 0x14, 0x5f, 0x4a, 0x3d,
	0xbc, 0x8d, 0x15, 0xd2, 0x20, 0x0b, 0x16, 0xba, 0xc0, 0x70, 0x80, 0xa1, 0x58, 0x84, 0x41, 0x3c,
	0x63, 0x62, 0x11, 0xf0, 0xa4, 0xa2, 0xad, 0x84, 0x76, 0x31, 0x74, 0x2a, 0xb2, 0xef, 0x41, 0xc6,
	0x66, 0xa9, 0x88, 0x79, 0x78, 0xa6, 0x53, 0x77, 0x30, 0xf5, 0x2d, 0x88, 0x39, 0xe3, 0xd2, 0x04,
	0x87, 0xaa, 0x44, 0x14, 0xf2, 0x9c, 0x8b, 0xa4, 0x6a, 0xb8, 0xa7, 0x50, 0xa2, 0x6c, 0xc1, 0xf3,
	0x22, 0xab, 0xc3, 0x9e, 0xb6, 0x98, 0xa6, 0x66, 0xa1, 0x48, 0x18, 0x2f, 0xbe, 0x0c, 0x30, 0xad,
	0x2b, 0x4c, 0x7d, 0x95, 0xdf, 0xfb, 0xdb, 0x86, 0xee, 0x6b, 0x35, 0xa3, 0x0f, 0x32, 0x90, 0x11,
	0x39, 0x80, 0x96, 0xea, 0xd8, 0x75, 0x3c, 0x67, 0xd4, 0x79, 0x4e, 0xc7, 0x57, 0xcf, 0x6c, 0x3c,
	0x45, 0xd5, 0x61, 0xf3, 0xfc, 0xf7, 0x83, 0x86, 0xaf, 0x3d, 0x64, 0x00, 0xed, 0x54, 0x64, 0x72,
	0xc6, 0x99, 0x7b, 0xc3, 0x73, 0x46, 0xdb, 0x7e, 0xab, 0x38, 0xbe, 0x61, 0xe4, 0x25, 0x74, 0x70,
	0x6a, 0xc7, 0x38, 0x21, 0x77, 0x0b, 0x6b, 0x3f, 0xb4, 0xd5, 0x3e, 0x59, 0x4b, 0xfd, 0xb2, 0x8f,
	0x1c, 0x03, 0xa8, 0x19, 0x9f, 0xf0, 0x5c, 0xba, 0x4d, 0x6f, 0xeb, 0x7f, 0x84, 0xca, 0xa3, 0x09,
	0x4b, 0x3e, 0xe2, 0x41, 0x47, 0x9d, 0x8e, 0xc4, 0xd7, 0x44, 0xba, 0x37, 0x3d, 0x67, 0xd4, 0xf4,
	0xcb, 0x21, 0xf2, 0x0e, 0x7a, 0x7a, 0x71, 0x53, 0x5c, 0x83, 0xdb, 0x42, 0xe0, 0xc7, 0xb6, 0x5f,
	0xbd, 0x2a, 0x8b, 0xfd, 0xaa, 0x97, 0xbc, 0x85, 0xae, 0x59, 0x35, 0x62, 0xb7, 0x11, 0xdb, 0xb3,
	0xd5, 0xfa, 0xa8, 0xb5, 0x1a, 0xbc, 0xe2, 0x25, 0x8f, 0xa0, 0x67, 0xce, 0x0a, 0xfe, 0x16, 0xc2,
	0x57, 0x83, 0xe4, 0x3d, 0xf4, 0xcd, 0x9e, 0x35, 0xff, 0x36, 0xf2, 0x3f, 0xb1, 0x8e, 0xaa, 0xa2,
	0xf6, 0x6b, 0x6e, 0x32, 0x85, 0xfe, 0xfa, 0xee, 0x61, 0x0f, 0x80, 0x3d, 0xec, 0x59, 0x2f, 0xc7,
	0xa5, 0x5a, 0x77, 0x51, 0xf3, 0x93, 0x11, 0xec, 0xac, 0x23, 0xaa, 0x93, 0x0e, 0x76, 0x52, 0x0f,
	0x93, 0x04, 0xdc, 0xf5, 0x4f, 0x8e, 0x2e, 0xef, 0x37, 0x52, 0x74, 0x91, 0xe2, 0x99, 0xbd, 0xab,
	0x4d, 0x9f, 0xe6, 0xb1, 0xd6, 0x24, 0x07, 0xb0, 0x7b, 0x55, 0x4e, 0x31, 0xf6, 0x90, 0xd1, 0x2e,
	0x20, 0x5f, 0xa0, 0xf4, 0xc6, 0x98, 0xa9, 0x22, 0x6b, 0x1f, 0x59, 0x9f, 0x5e, 0xcf, 0x6a, 0x5c,
	0x9a, 0xd4, 0x52, 0x8f, 0xec, 0xc3, 0x60, 0x33, 0xa3, 0x28, 0x77, 0x90, 0xd2, 0x96, 0x3e, 0xdc,
	0x3f, 0x5f, 0x52, 0xe7, 0x62, 0x49, 0x9d, 0x3f, 0x4b, 0xea, 0xfc, 0x5c, 0xd1, 0xc6, 0xc5, 0x8a,
	0x36, 0x7e, 0xad, 0x68, 0xe3, 0x13, 0xdd, 0x80, 0x9b, 0xfc, 0x98, 0xe0, 0x0b, 0x22, 0xcf, 0xd2,
	0x28, 0xff, 0xdc, 0xc2, 0x47, 0xe3, 0xc5, 0xbf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xea, 0xc3, 0x81,
	0x7d, 0x5c, 0x05, 0x00, 0x00,
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
