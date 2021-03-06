// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: fdpd/delegation_conditions.proto

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

type DelegationConditions struct {
	Id             uint64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Cost           uint64    `protobuf:"varint,2,opt,name=cost,proto3" json:"cost,omitempty"`
	MaxDelegateeNb uint64    `protobuf:"varint,3,opt,name=maxDelegateeNb,proto3" json:"maxDelegateeNb,omitempty"`
	Validity       *Validity `protobuf:"bytes,4,opt,name=validity,proto3" json:"validity,omitempty"`
	Creator        string    `protobuf:"bytes,5,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *DelegationConditions) Reset()         { *m = DelegationConditions{} }
func (m *DelegationConditions) String() string { return proto.CompactTextString(m) }
func (*DelegationConditions) ProtoMessage()    {}
func (*DelegationConditions) Descriptor() ([]byte, []int) {
	return fileDescriptor_a69db7fab930e58c, []int{0}
}
func (m *DelegationConditions) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DelegationConditions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DelegationConditions.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DelegationConditions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DelegationConditions.Merge(m, src)
}
func (m *DelegationConditions) XXX_Size() int {
	return m.Size()
}
func (m *DelegationConditions) XXX_DiscardUnknown() {
	xxx_messageInfo_DelegationConditions.DiscardUnknown(m)
}

var xxx_messageInfo_DelegationConditions proto.InternalMessageInfo

func (m *DelegationConditions) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *DelegationConditions) GetCost() uint64 {
	if m != nil {
		return m.Cost
	}
	return 0
}

func (m *DelegationConditions) GetMaxDelegateeNb() uint64 {
	if m != nil {
		return m.MaxDelegateeNb
	}
	return 0
}

func (m *DelegationConditions) GetValidity() *Validity {
	if m != nil {
		return m.Validity
	}
	return nil
}

func (m *DelegationConditions) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*DelegationConditions)(nil), "delegationcontrol.fdpd.DelegationConditions")
}

func init() { proto.RegisterFile("fdpd/delegation_conditions.proto", fileDescriptor_a69db7fab930e58c) }

var fileDescriptor_a69db7fab930e58c = []byte{
	// 235 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x48, 0x4b, 0x29, 0x48,
	0xd1, 0x4f, 0x49, 0xcd, 0x49, 0x4d, 0x4f, 0x2c, 0xc9, 0xcc, 0xcf, 0x8b, 0x4f, 0xce, 0xcf, 0x4b,
	0xc9, 0x04, 0xb1, 0x8a, 0xf5, 0x0a, 0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0xc4, 0x10, 0x92, 0xc9, 0xf9,
	0x79, 0x25, 0x45, 0xf9, 0x39, 0x7a, 0x20, 0x3d, 0x52, 0xc2, 0x60, 0x9d, 0x65, 0x89, 0x39, 0x99,
	0x29, 0x99, 0x25, 0x95, 0x10, 0xc5, 0x4a, 0xbb, 0x18, 0xb9, 0x44, 0x5c, 0xe0, 0xea, 0x9d, 0xe1,
	0x66, 0x09, 0xf1, 0x71, 0x31, 0x65, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0xb0, 0x04, 0x31, 0x65,
	0xa6, 0x08, 0x09, 0x71, 0xb1, 0x24, 0xe7, 0x17, 0x97, 0x48, 0x30, 0x81, 0x45, 0xc0, 0x6c, 0x21,
	0x35, 0x2e, 0xbe, 0xdc, 0xc4, 0x0a, 0xa8, 0xf6, 0xd4, 0x54, 0xbf, 0x24, 0x09, 0x66, 0xb0, 0x2c,
	0x9a, 0xa8, 0x90, 0x0d, 0x17, 0x07, 0xcc, 0x5a, 0x09, 0x16, 0x05, 0x46, 0x0d, 0x6e, 0x23, 0x05,
	0x3d, 0xec, 0x8e, 0xd4, 0x0b, 0x83, 0xaa, 0x0b, 0x82, 0xeb, 0x10, 0x92, 0xe0, 0x62, 0x4f, 0x2e,
	0x4a, 0x4d, 0x2c, 0xc9, 0x2f, 0x92, 0x60, 0x55, 0x60, 0xd4, 0xe0, 0x0c, 0x82, 0x71, 0x9d, 0x2c,
	0x4e, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5,
	0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x0e, 0xc3, 0x78, 0xfd, 0x0a,
	0x7d, 0xb0, 0xff, 0x4b, 0x2a, 0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0, 0xbe, 0x37, 0x06, 0x04, 0x00,
	0x00, 0xff, 0xff, 0x73, 0x04, 0xf4, 0x16, 0x4e, 0x01, 0x00, 0x00,
}

func (m *DelegationConditions) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DelegationConditions) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DelegationConditions) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintDelegationConditions(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x2a
	}
	if m.Validity != nil {
		{
			size, err := m.Validity.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintDelegationConditions(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if m.MaxDelegateeNb != 0 {
		i = encodeVarintDelegationConditions(dAtA, i, uint64(m.MaxDelegateeNb))
		i--
		dAtA[i] = 0x18
	}
	if m.Cost != 0 {
		i = encodeVarintDelegationConditions(dAtA, i, uint64(m.Cost))
		i--
		dAtA[i] = 0x10
	}
	if m.Id != 0 {
		i = encodeVarintDelegationConditions(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintDelegationConditions(dAtA []byte, offset int, v uint64) int {
	offset -= sovDelegationConditions(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *DelegationConditions) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovDelegationConditions(uint64(m.Id))
	}
	if m.Cost != 0 {
		n += 1 + sovDelegationConditions(uint64(m.Cost))
	}
	if m.MaxDelegateeNb != 0 {
		n += 1 + sovDelegationConditions(uint64(m.MaxDelegateeNb))
	}
	if m.Validity != nil {
		l = m.Validity.Size()
		n += 1 + l + sovDelegationConditions(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovDelegationConditions(uint64(l))
	}
	return n
}

func sovDelegationConditions(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDelegationConditions(x uint64) (n int) {
	return sovDelegationConditions(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DelegationConditions) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDelegationConditions
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
			return fmt.Errorf("proto: DelegationConditions: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DelegationConditions: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationConditions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Cost", wireType)
			}
			m.Cost = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationConditions
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
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxDelegateeNb", wireType)
			}
			m.MaxDelegateeNb = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationConditions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MaxDelegateeNb |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Validity", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationConditions
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
				return ErrInvalidLengthDelegationConditions
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationConditions
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
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationConditions
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
				return ErrInvalidLengthDelegationConditions
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationConditions
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDelegationConditions(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDelegationConditions
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
func skipDelegationConditions(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDelegationConditions
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
					return 0, ErrIntOverflowDelegationConditions
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
					return 0, ErrIntOverflowDelegationConditions
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
				return 0, ErrInvalidLengthDelegationConditions
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDelegationConditions
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDelegationConditions
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDelegationConditions        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDelegationConditions          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDelegationConditions = fmt.Errorf("proto: unexpected end of group")
)
