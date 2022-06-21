package types

// ValidateBasic is used for validating the packet
func (p EstablishCooperationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p EstablishCooperationPacketData) GetBytes() ([]byte, error) {
	var modulePacket FdpdPacketData

	modulePacket.Packet = &FdpdPacketData_EstablishCooperationPacket{&p}

	return modulePacket.Marshal()
}
