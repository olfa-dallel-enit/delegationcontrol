/* eslint-disable */
import { Permission } from "../fdpd/permission";
import { DelegationConditions } from "../fdpd/delegation_conditions";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "delegationcontrol.fdpd";

export interface FdpdPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  requestDelegationPacket: RequestDelegationPacketData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  establishCooperationPacket: EstablishCooperationPacketData | undefined;
}

export interface NoData {}

/** EstablishCooperationPacketData defines a struct for the packet payload */
export interface EstablishCooperationPacketData {
  location: string;
  sender: string;
}

/** EstablishCooperationPacketAck defines a struct for the packet acknowledgment */
export interface EstablishCooperationPacketAck {
  confirmation: string;
  confirmedBy: string;
  location: string;
}

/** RequestDelegationPacketData defines a struct for the packet payload */
export interface RequestDelegationPacketData {
  delegationAction: string;
  permission: Permission | undefined;
}

/** RequestDelegationPacketAck defines a struct for the packet acknowledgment */
export interface RequestDelegationPacketAck {
  confirmation: string;
  confirmedBy: string;
  decision: string;
  delegationConditions: DelegationConditions | undefined;
}

const baseFdpdPacketData: object = {};

export const FdpdPacketData = {
  encode(message: FdpdPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.requestDelegationPacket !== undefined) {
      RequestDelegationPacketData.encode(
        message.requestDelegationPacket,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.establishCooperationPacket !== undefined) {
      EstablishCooperationPacketData.encode(
        message.establishCooperationPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FdpdPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFdpdPacketData } as FdpdPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 3:
          message.requestDelegationPacket = RequestDelegationPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.establishCooperationPacket = EstablishCooperationPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FdpdPacketData {
    const message = { ...baseFdpdPacketData } as FdpdPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.requestDelegationPacket !== undefined &&
      object.requestDelegationPacket !== null
    ) {
      message.requestDelegationPacket = RequestDelegationPacketData.fromJSON(
        object.requestDelegationPacket
      );
    } else {
      message.requestDelegationPacket = undefined;
    }
    if (
      object.establishCooperationPacket !== undefined &&
      object.establishCooperationPacket !== null
    ) {
      message.establishCooperationPacket = EstablishCooperationPacketData.fromJSON(
        object.establishCooperationPacket
      );
    } else {
      message.establishCooperationPacket = undefined;
    }
    return message;
  },

  toJSON(message: FdpdPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.requestDelegationPacket !== undefined &&
      (obj.requestDelegationPacket = message.requestDelegationPacket
        ? RequestDelegationPacketData.toJSON(message.requestDelegationPacket)
        : undefined);
    message.establishCooperationPacket !== undefined &&
      (obj.establishCooperationPacket = message.establishCooperationPacket
        ? EstablishCooperationPacketData.toJSON(
            message.establishCooperationPacket
          )
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FdpdPacketData>): FdpdPacketData {
    const message = { ...baseFdpdPacketData } as FdpdPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.requestDelegationPacket !== undefined &&
      object.requestDelegationPacket !== null
    ) {
      message.requestDelegationPacket = RequestDelegationPacketData.fromPartial(
        object.requestDelegationPacket
      );
    } else {
      message.requestDelegationPacket = undefined;
    }
    if (
      object.establishCooperationPacket !== undefined &&
      object.establishCooperationPacket !== null
    ) {
      message.establishCooperationPacket = EstablishCooperationPacketData.fromPartial(
        object.establishCooperationPacket
      );
    } else {
      message.establishCooperationPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseEstablishCooperationPacketData: object = { location: "", sender: "" };

export const EstablishCooperationPacketData = {
  encode(
    message: EstablishCooperationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstablishCooperationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstablishCooperationPacketData,
    } as EstablishCooperationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstablishCooperationPacketData {
    const message = {
      ...baseEstablishCooperationPacketData,
    } as EstablishCooperationPacketData;
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: EstablishCooperationPacketData): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstablishCooperationPacketData>
  ): EstablishCooperationPacketData {
    const message = {
      ...baseEstablishCooperationPacketData,
    } as EstablishCooperationPacketData;
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseEstablishCooperationPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
  location: "",
};

export const EstablishCooperationPacketAck = {
  encode(
    message: EstablishCooperationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstablishCooperationPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        case 3:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstablishCooperationPacketAck {
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
    if (object.confirmation !== undefined && object.confirmation !== null) {
      message.confirmation = String(object.confirmation);
    } else {
      message.confirmation = "";
    }
    if (object.confirmedBy !== undefined && object.confirmedBy !== null) {
      message.confirmedBy = String(object.confirmedBy);
    } else {
      message.confirmedBy = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: EstablishCooperationPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstablishCooperationPacketAck>
  ): EstablishCooperationPacketAck {
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
    if (object.confirmation !== undefined && object.confirmation !== null) {
      message.confirmation = object.confirmation;
    } else {
      message.confirmation = "";
    }
    if (object.confirmedBy !== undefined && object.confirmedBy !== null) {
      message.confirmedBy = object.confirmedBy;
    } else {
      message.confirmedBy = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseRequestDelegationPacketData: object = { delegationAction: "" };

export const RequestDelegationPacketData = {
  encode(
    message: RequestDelegationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delegationAction !== "") {
      writer.uint32(10).string(message.delegationAction);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RequestDelegationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestDelegationPacketData,
    } as RequestDelegationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationAction = reader.string();
          break;
        case 2:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestDelegationPacketData {
    const message = {
      ...baseRequestDelegationPacketData,
    } as RequestDelegationPacketData;
    if (
      object.delegationAction !== undefined &&
      object.delegationAction !== null
    ) {
      message.delegationAction = String(object.delegationAction);
    } else {
      message.delegationAction = "";
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = Permission.fromJSON(object.permission);
    } else {
      message.permission = undefined;
    }
    return message;
  },

  toJSON(message: RequestDelegationPacketData): unknown {
    const obj: any = {};
    message.delegationAction !== undefined &&
      (obj.delegationAction = message.delegationAction);
    message.permission !== undefined &&
      (obj.permission = message.permission
        ? Permission.toJSON(message.permission)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestDelegationPacketData>
  ): RequestDelegationPacketData {
    const message = {
      ...baseRequestDelegationPacketData,
    } as RequestDelegationPacketData;
    if (
      object.delegationAction !== undefined &&
      object.delegationAction !== null
    ) {
      message.delegationAction = object.delegationAction;
    } else {
      message.delegationAction = "";
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = Permission.fromPartial(object.permission);
    } else {
      message.permission = undefined;
    }
    return message;
  },
};

const baseRequestDelegationPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
  decision: "",
};

export const RequestDelegationPacketAck = {
  encode(
    message: RequestDelegationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    if (message.decision !== "") {
      writer.uint32(26).string(message.decision);
    }
    if (message.delegationConditions !== undefined) {
      DelegationConditions.encode(
        message.delegationConditions,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RequestDelegationPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestDelegationPacketAck,
    } as RequestDelegationPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        case 3:
          message.decision = reader.string();
          break;
        case 4:
          message.delegationConditions = DelegationConditions.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestDelegationPacketAck {
    const message = {
      ...baseRequestDelegationPacketAck,
    } as RequestDelegationPacketAck;
    if (object.confirmation !== undefined && object.confirmation !== null) {
      message.confirmation = String(object.confirmation);
    } else {
      message.confirmation = "";
    }
    if (object.confirmedBy !== undefined && object.confirmedBy !== null) {
      message.confirmedBy = String(object.confirmedBy);
    } else {
      message.confirmedBy = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromJSON(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    return message;
  },

  toJSON(message: RequestDelegationPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    message.decision !== undefined && (obj.decision = message.decision);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestDelegationPacketAck>
  ): RequestDelegationPacketAck {
    const message = {
      ...baseRequestDelegationPacketAck,
    } as RequestDelegationPacketAck;
    if (object.confirmation !== undefined && object.confirmation !== null) {
      message.confirmation = object.confirmation;
    } else {
      message.confirmation = "";
    }
    if (object.confirmedBy !== undefined && object.confirmedBy !== null) {
      message.confirmedBy = object.confirmedBy;
    } else {
      message.confirmedBy = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromPartial(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
