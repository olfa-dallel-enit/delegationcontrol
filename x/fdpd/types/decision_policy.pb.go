// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: fdpd/decision_policy.proto

package types

import (
	fmt "fmt"
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

type DecisionPolicy struct {
	DomainList     []string  `protobuf:"bytes,1,rep,name=domainList,proto3" json:"domainList,omitempty"`
	LocationList   []string  `protobuf:"bytes,2,rep,name=locationList,proto3" json:"locationList,omitempty"`
	Cost           uint64    `protobuf:"varint,3,opt,name=cost,proto3" json:"cost,omitempty"`
	MaxDelegations uint64    `protobuf:"varint,4,opt,name=maxDelegations,proto3" json:"maxDelegations,omitempty"`
	Validity       *Validity `protobuf:"bytes,5,opt,name=validity,proto3" json:"validity,omitempty"`
	Creator        string    `protobuf:"bytes,6,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *DecisionPolicy) Reset()         { *m = DecisionPolicy{} }
func (m *DecisionPolicy) String() string { return proto.CompactTextString(m) }
func (*DecisionPolicy) ProtoMessage()    {}
func (*DecisionPolicy) Descriptor() ([]byte, []int) {
	return fileDescriptor_38d4bbe11b38161d, []int{0}
}
func (m *DecisionPolicy) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DecisionPolicy) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DecisionPolicy.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DecisionPolicy) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DecisionPolicy.Merge(m, src)
}
func (m *DecisionPolicy) XXX_Size() int {
	return m.Size()
}
func (m *DecisionPolicy) XXX_DiscardUnknown() {
	xxx_messageInfo_DecisionPolicy.DiscardUnknown(m)
}

var xxx_messageInfo_DecisionPolicy proto.InternalMessageInfo

func (m *DecisionPolicy) GetDomainList() []string {
	if m != nil {
		return m.DomainList
	}
	return nil
}

func (m *DecisionPolicy) GetLocationList() []string {
	if m != nil {
		return m.LocationList
	}
	return nil
}

func (m *DecisionPolicy) GetCost() uint64 {
	if m != nil {
		return m.Cost
	}
	return 0
}

func (m *DecisionPolicy) GetMaxDelegations() uint64 {
	if m != nil {
		return m.MaxDelegations
	}
	return 0
}

func (m *DecisionPolicy) GetValidity() *Validity {
	if m != nil {
		return m.Validity
	}
	return nil
}

func (m *DecisionPolicy) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*DecisionPolicy)(nil), "delegationcontrol.fdpd.DecisionPolicy")
}

func init() { proto.RegisterFile("fdpd/decision_policy.proto", fileDescriptor_38d4bbe11b38161d) }

var fileDescriptor_38d4bbe11b38161d = []byte{
	// 263 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4a, 0x4b, 0x29, 0x48,
	0xd1, 0x4f, 0x49, 0x4d, 0xce, 0x2c, 0xce, 0xcc, 0xcf, 0x8b, 0x2f, 0xc8, 0xcf, 0xc9, 0x4c, 0xae,
	0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x4b, 0x49, 0xcd, 0x49, 0x4d, 0x4f, 0x2c, 0xc9,
	0xcc, 0xcf, 0x4b, 0xce, 0xcf, 0x2b, 0x29, 0xca, 0xcf, 0xd1, 0x03, 0xa9, 0x96, 0x12, 0x06, 0xeb,
	0x29, 0x4b, 0xcc, 0xc9, 0x4c, 0xc9, 0x2c, 0x81, 0x2a, 0x56, 0x7a, 0xc1, 0xc8, 0xc5, 0xe7, 0x02,
	0x35, 0x26, 0x00, 0x6c, 0x8a, 0x90, 0x1c, 0x17, 0x57, 0x4a, 0x7e, 0x6e, 0x62, 0x66, 0x9e, 0x4f,
	0x66, 0x71, 0x89, 0x04, 0xa3, 0x02, 0xb3, 0x06, 0x67, 0x10, 0x92, 0x88, 0x90, 0x12, 0x17, 0x4f,
	0x4e, 0x7e, 0x32, 0xd8, 0x7c, 0xb0, 0x0a, 0x26, 0xb0, 0x0a, 0x14, 0x31, 0x21, 0x21, 0x2e, 0x96,
	0xe4, 0xfc, 0xe2, 0x12, 0x09, 0x66, 0x05, 0x46, 0x0d, 0x96, 0x20, 0x30, 0x5b, 0x48, 0x8d, 0x8b,
	0x2f, 0x37, 0xb1, 0xc2, 0x05, 0xee, 0xb8, 0x62, 0x09, 0x16, 0xb0, 0x2c, 0x9a, 0xa8, 0x90, 0x0d,
	0x17, 0x07, 0xcc, 0x91, 0x12, 0xac, 0x0a, 0x8c, 0x1a, 0xdc, 0x46, 0x0a, 0x7a, 0xd8, 0xbd, 0xa4,
	0x17, 0x06, 0x55, 0x17, 0x04, 0xd7, 0x21, 0x24, 0xc1, 0xc5, 0x9e, 0x5c, 0x94, 0x9a, 0x58, 0x92,
	0x5f, 0x24, 0xc1, 0xa6, 0xc0, 0xa8, 0xc1, 0x19, 0x04, 0xe3, 0x3a, 0x59, 0x9c, 0x78, 0x24, 0xc7,
	0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c,
	0xc7, 0x70, 0xe3, 0xb1, 0x1c, 0x43, 0x94, 0x1c, 0x86, 0xf1, 0xfa, 0x15, 0xfa, 0xe0, 0xd0, 0x2a,
	0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0x87, 0x95, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0x44,
	0xe8, 0x83, 0x4a, 0x76, 0x01, 0x00, 0x00,
}

func (m *DecisionPolicy) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DecisionPolicy) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DecisionPolicy) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintDecisionPolicy(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x32
	}
	if m.Validity != nil {
		{
			size, err := m.Validity.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintDecisionPolicy(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x2a
	}
	if m.MaxDelegations != 0 {
		i = encodeVarintDecisionPolicy(dAtA, i, uint64(m.MaxDelegations))
		i--
		dAtA[i] = 0x20
	}
	if m.Cost != 0 {
		i = encodeVarintDecisionPolicy(dAtA, i, uint64(m.Cost))
		i--
		dAtA[i] = 0x18
	}
	if len(m.LocationList) > 0 {
		for iNdEx := len(m.LocationList) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.LocationList[iNdEx])
			copy(dAtA[i:], m.LocationList[iNdEx])
			i = encodeVarintDecisionPolicy(dAtA, i, uint64(len(m.LocationList[iNdEx])))
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.DomainList) > 0 {
		for iNdEx := len(m.DomainList) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.DomainList[iNdEx])
			copy(dAtA[i:], m.DomainList[iNdEx])
			i = encodeVarintDecisionPolicy(dAtA, i, uint64(len(m.DomainList[iNdEx])))
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintDecisionPolicy(dAtA []byte, offset int, v uint64) int {
	offset -= sovDecisionPolicy(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *DecisionPolicy) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.DomainList) > 0 {
		for _, s := range m.DomainList {
			l = len(s)
			n += 1 + l + sovDecisionPolicy(uint64(l))
		}
	}
	if len(m.LocationList) > 0 {
		for _, s := range m.LocationList {
			l = len(s)
			n += 1 + l + sovDecisionPolicy(uint64(l))
		}
	}
	if m.Cost != 0 {
		n += 1 + sovDecisionPolicy(uint64(m.Cost))
	}
	if m.MaxDelegations != 0 {
		n += 1 + sovDecisionPolicy(uint64(m.MaxDelegations))
	}
	if m.Validity != nil {
		l = m.Validity.Size()
		n += 1 + l + sovDecisionPolicy(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovDecisionPolicy(uint64(l))
	}
	return n
}

func sovDecisionPolicy(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDecisionPolicy(x uint64) (n int) {
	return sovDecisionPolicy(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DecisionPolicy) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDecisionPolicy
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
			return fmt.Errorf("proto: DecisionPolicy: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DecisionPolicy: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DomainList", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecisionPolicy
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
				return ErrInvalidLengthDecisionPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDecisionPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DomainList = append(m.DomainList, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LocationList", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecisionPolicy
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
				return ErrInvalidLengthDecisionPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDecisionPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LocationList = append(m.LocationList, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Cost", wireType)
			}
			m.Cost = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecisionPolicy
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Cost |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxDelegations", wireType)
			}
			m.MaxDelegations = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecisionPolicy
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MaxDelegations |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Validity", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecisionPolicy
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
				return ErrInvalidLengthDecisionPolicy
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDecisionPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Validity == nil {
				m.Validity = &Validity{}
			}
			if err := m.Validity.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecisionPolicy
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
				return ErrInvalidLengthDecisionPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDecisionPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDecisionPolicy(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDecisionPolicy
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
func skipDecisionPolicy(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDecisionPolicy
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
					return 0, ErrIntOverflowDecisionPolicy
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
					return 0, ErrIntOverflowDecisionPolicy
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
				return 0, ErrInvalidLengthDecisionPolicy
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDecisionPolicy
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDecisionPolicy
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDecisionPolicy        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDecisionPolicy          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDecisionPolicy = fmt.Errorf("proto: unexpected end of group")
)
