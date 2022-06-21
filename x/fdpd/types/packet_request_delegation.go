package types

// ValidateBasic is used for validating the packet
func (p RequestDelegationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RequestDelegationPacketData) GetBytes() ([]byte, error) {
	var modulePacket FdpdPacketData

	modulePacket.Packet = &FdpdPacketData_RequestDelegationPacket{&p}

	return modulePacket.Marshal()
}
