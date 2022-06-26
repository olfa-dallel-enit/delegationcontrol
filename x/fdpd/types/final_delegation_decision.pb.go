// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: fdpd/final_delegation_decision.proto

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

type FinalDelegationDecision struct {
	Id                     uint64              `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	DelegationRequestLabel string              `protobuf:"bytes,2,opt,name=delegationRequestLabel,proto3" json:"delegationRequestLabel,omitempty"`
	Decision               string              `protobuf:"bytes,3,opt,name=decision,proto3" json:"decision,omitempty"`
	Creator                string              `protobuf:"bytes,4,opt,name=creator,proto3" json:"creator,omitempty"`
	DecisionDomain         string              `protobuf:"bytes,5,opt,name=decisionDomain,proto3" json:"decisionDomain,omitempty"`
	DelegationDecision     *DelegationDecision `protobuf:"bytes,6,opt,name=DelegationDecision,proto3" json:"DelegationDecision,omitempty"`
	Criterion              string              `protobuf:"bytes,7,opt,name=criterion,proto3" json:"criterion,omitempty"`
}

func (m *FinalDelegationDecision) Reset()         { *m = FinalDelegationDecision{} }
func (m *FinalDelegationDecision) String() string { return proto.CompactTextString(m) }
func (*FinalDelegationDecision) ProtoMessage()    {}
func (*FinalDelegationDecision) Descriptor() ([]byte, []int) {
	return fileDescriptor_e7914a9674187037, []int{0}
}
func (m *FinalDelegationDecision) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *FinalDelegationDecision) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_FinalDelegationDecision.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *FinalDelegationDecision) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FinalDelegationDecision.Merge(m, src)
}
func (m *FinalDelegationDecision) XXX_Size() int {
	return m.Size()
}
func (m *FinalDelegationDecision) XXX_DiscardUnknown() {
	xxx_messageInfo_FinalDelegationDecision.DiscardUnknown(m)
}

var xxx_messageInfo_FinalDelegationDecision proto.InternalMessageInfo

func (m *FinalDelegationDecision) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *FinalDelegationDecision) GetDelegationRequestLabel() string {
	if m != nil {
		return m.DelegationRequestLabel
	}
	return ""
}

func (m *FinalDelegationDecision) GetDecision() string {
	if m != nil {
		return m.Decision
	}
	return ""
}

func (m *FinalDelegationDecision) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *FinalDelegationDecision) GetDecisionDomain() string {
	if m != nil {
		return m.DecisionDomain
	}
	return ""
}

func (m *FinalDelegationDecision) GetDelegationDecision() *DelegationDecision {
	if m != nil {
		return m.DelegationDecision
	}
	return nil
}

func (m *FinalDelegationDecision) GetCriterion() string {
	if m != nil {
		return m.Criterion
	}
	return ""
}

func init() {
	proto.RegisterType((*FinalDelegationDecision)(nil), "delegationcontrol.fdpd.FinalDelegationDecision")
}

func init() {
	proto.RegisterFile("fdpd/final_delegation_decision.proto", fileDescriptor_e7914a9674187037)
}

var fileDescriptor_e7914a9674187037 = []byte{
	// 274 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x49, 0x4b, 0x29, 0x48,
	0xd1, 0x4f, 0xcb, 0xcc, 0x4b, 0xcc, 0x89, 0x4f, 0x49, 0xcd, 0x49, 0x4d, 0x4f, 0x2c, 0xc9, 0xcc,
	0xcf, 0x8b, 0x4f, 0x49, 0x4d, 0xce, 0x2c, 0xce, 0xcc, 0xcf, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0x43, 0x48, 0x25, 0xe7, 0xe7, 0x95, 0x14, 0xe5, 0xe7, 0xe8, 0x81, 0xf4, 0x49, 0xc9,
	0x81, 0x75, 0xe3, 0xd4, 0xa7, 0xb4, 0x93, 0x89, 0x4b, 0xdc, 0x0d, 0x64, 0xb6, 0x0b, 0x5c, 0x89,
	0x0b, 0x54, 0x85, 0x10, 0x1f, 0x17, 0x53, 0x66, 0x8a, 0x04, 0xa3, 0x02, 0xa3, 0x06, 0x4b, 0x10,
	0x53, 0x66, 0x8a, 0x90, 0x19, 0x17, 0x92, 0x2d, 0x41, 0xa9, 0x85, 0xa5, 0xa9, 0xc5, 0x25, 0x3e,
	0x89, 0x49, 0xa9, 0x39, 0x12, 0x4c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x38, 0x64, 0x85, 0xa4, 0xb8,
	0x38, 0x60, 0xb6, 0x4a, 0x30, 0x83, 0x55, 0xc2, 0xf9, 0x42, 0x12, 0x5c, 0xec, 0xc9, 0x45, 0xa9,
	0x89, 0x25, 0xf9, 0x45, 0x12, 0x2c, 0x60, 0x29, 0x18, 0x57, 0x48, 0x8d, 0x8b, 0x0f, 0xa6, 0xca,
	0x25, 0x3f, 0x37, 0x31, 0x33, 0x4f, 0x82, 0x15, 0xac, 0x00, 0x4d, 0x54, 0x28, 0x8a, 0x4b, 0x08,
	0xd3, 0xed, 0x12, 0x6c, 0x0a, 0x8c, 0x1a, 0xdc, 0x46, 0x5a, 0x7a, 0xd8, 0x83, 0x45, 0x0f, 0x53,
	0x47, 0x10, 0x16, 0x53, 0x84, 0x64, 0xb8, 0x38, 0x93, 0x8b, 0x32, 0x4b, 0x52, 0x8b, 0x40, 0x46,
	0xb2, 0x83, 0xad, 0x47, 0x08, 0x38, 0x59, 0x9c, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3,
	0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c,
	0x43, 0x94, 0x1c, 0x86, 0xb5, 0xfa, 0x15, 0xfa, 0xe0, 0x98, 0x28, 0xa9, 0x2c, 0x48, 0x2d, 0x4e,
	0x62, 0x03, 0x07, 0xbe, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0xd6, 0x95, 0x8d, 0x50, 0xdc, 0x01,
	0x00, 0x00,
}

func (m *FinalDelegationDecision) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *FinalDelegationDecision) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *FinalDelegationDecision) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Criterion) > 0 {
		i -= len(m.Criterion)
		copy(dAtA[i:], m.Criterion)
		i = encodeVarintFinalDelegationDecision(dAtA, i, uint64(len(m.Criterion)))
		i--
		dAtA[i] = 0x3a
	}
	if m.DelegationDecision != nil {
		{
			size, err := m.DelegationDecision.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintFinalDelegationDecision(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x32
	}
	if len(m.DecisionDomain) > 0 {
		i -= len(m.DecisionDomain)
		copy(dAtA[i:], m.DecisionDomain)
		i = encodeVarintFinalDelegationDecision(dAtA, i, uint64(len(m.DecisionDomain)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintFinalDelegationDecision(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Decision) > 0 {
		i -= len(m.Decision)
		copy(dAtA[i:], m.Decision)
		i = encodeVarintFinalDelegationDecision(dAtA, i, uint64(len(m.Decision)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.DelegationRequestLabel) > 0 {
		i -= len(m.DelegationRequestLabel)
		copy(dAtA[i:], m.DelegationRequestLabel)
		i = encodeVarintFinalDelegationDecision(dAtA, i, uint64(len(m.DelegationRequestLabel)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintFinalDelegationDecision(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintFinalDelegationDecision(dAtA []byte, offset int, v uint64) int {
	offset -= sovFinalDelegationDecision(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *FinalDelegationDecision) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovFinalDelegationDecision(uint64(m.Id))
	}
	l = len(m.DelegationRequestLabel)
	if l > 0 {
		n += 1 + l + sovFinalDelegationDecision(uint64(l))
	}
	l = len(m.Decision)
	if l > 0 {
		n += 1 + l + sovFinalDelegationDecision(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovFinalDelegationDecision(uint64(l))
	}
	l = len(m.DecisionDomain)
	if l > 0 {
		n += 1 + l + sovFinalDelegationDecision(uint64(l))
	}
	if m.DelegationDecision != nil {
		l = m.DelegationDecision.Size()
		n += 1 + l + sovFinalDelegationDecision(uint64(l))
	}
	l = len(m.Criterion)
	if l > 0 {
		n += 1 + l + sovFinalDelegationDecision(uint64(l))
	}
	return n
}

func sovFinalDelegationDecision(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozFinalDelegationDecision(x uint64) (n int) {
	return sovFinalDelegationDecision(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *FinalDelegationDecision) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFinalDelegationDecision
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
			return fmt.Errorf("proto: FinalDelegationDecision: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: FinalDelegationDecision: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFinalDelegationDecision
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
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DelegationRequestLabel", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFinalDelegationDecision
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
				return ErrInvalidLengthFinalDelegationDecision
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFinalDelegationDecision
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DelegationRequestLabel = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Decision", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFinalDelegationDecision
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
				return ErrInvalidLengthFinalDelegationDecision
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFinalDelegationDecision
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Decision = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFinalDelegationDecision
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
				return ErrInvalidLengthFinalDelegationDecision
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFinalDelegationDecision
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DecisionDomain", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFinalDelegationDecision
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
				return ErrInvalidLengthFinalDelegationDecision
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFinalDelegationDecision
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DecisionDomain = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DelegationDecision", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFinalDelegationDecision
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
				return ErrInvalidLengthFinalDelegationDecision
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFinalDelegationDecision
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.DelegationDecision == nil {
				m.DelegationDecision = &DelegationDecision{}
			}
			if err := m.DelegationDecision.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Criterion", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFinalDelegationDecision
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
				return ErrInvalidLengthFinalDelegationDecision
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFinalDelegationDecision
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Criterion = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipFinalDelegationDecision(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFinalDelegationDecision
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
func skipFinalDelegationDecision(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowFinalDelegationDecision
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
					return 0, ErrIntOverflowFinalDelegationDecision
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
					return 0, ErrIntOverflowFinalDelegationDecision
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
				return 0, ErrInvalidLengthFinalDelegationDecision
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupFinalDelegationDecision
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthFinalDelegationDecision
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthFinalDelegationDecision        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowFinalDelegationDecision          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupFinalDelegationDecision = fmt.Errorf("proto: unexpected end of group")
)
