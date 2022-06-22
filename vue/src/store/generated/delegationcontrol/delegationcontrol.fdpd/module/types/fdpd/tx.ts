/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Validity } from "../fdpd/validity";
import { Permission } from "../fdpd/permission";
import { DelegationConditions } from "../fdpd/delegation_conditions";

export const protobufPackage = "delegationcontrol.fdpd";

export interface MsgCreateLocalDomain {
  creator: string;
  name: string;
  location: string;
}

export interface MsgCreateLocalDomainResponse {}

export interface MsgUpdateLocalDomain {
  creator: string;
  name: string;
  location: string;
}

export interface MsgUpdateLocalDomainResponse {}

export interface MsgDeleteLocalDomain {
  creator: string;
}

export interface MsgDeleteLocalDomainResponse {}

export interface MsgCreateDomain {
  creator: string;
  name: string;
  location: string;
  ibcChannel: string;
}

export interface MsgCreateDomainResponse {
  id: number;
}

export interface MsgUpdateDomain {
  creator: string;
  id: number;
  name: string;
  location: string;
  ibcChannel: string;
}

export interface MsgUpdateDomainResponse {}

export interface MsgDeleteDomain {
  creator: string;
  id: number;
}

export interface MsgDeleteDomainResponse {}

export interface MsgSendEstablishCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendEstablishCooperationResponse {}

export interface MsgCreateForwardPolicy {
  creator: string;
  mode: string;
  domainList: string[];
  locationList: string[];
}

export interface MsgCreateForwardPolicyResponse {}

export interface MsgUpdateForwardPolicy {
  creator: string;
  mode: string;
  domainList: string[];
  locationList: string[];
}

export interface MsgUpdateForwardPolicyResponse {}

export interface MsgDeleteForwardPolicy {
  creator: string;
}

export interface MsgDeleteForwardPolicyResponse {}

export interface MsgCreateValidity {
  creator: string;
  notBefore: string;
  notAfter: string;
}

export interface MsgCreateValidityResponse {
  id: number;
}

export interface MsgUpdateValidity {
  creator: string;
  id: number;
  notBefore: string;
  notAfter: string;
}

export interface MsgUpdateValidityResponse {}

export interface MsgDeleteValidity {
  creator: string;
  id: number;
}

export interface MsgDeleteValidityResponse {}

export interface MsgCreateDecisionPolicy {
  creator: string;
  domainList: string[];
  locationList: string[];
  cost: number;
  maxDelegations: number;
  validity: Validity | undefined;
}

export interface MsgCreateDecisionPolicyResponse {}

export interface MsgUpdateDecisionPolicy {
  creator: string;
  domainList: string[];
  locationList: string[];
  cost: number;
  maxDelegations: number;
  validity: Validity | undefined;
}

export interface MsgUpdateDecisionPolicyResponse {}

export interface MsgDeleteDecisionPolicy {
  creator: string;
}

export interface MsgDeleteDecisionPolicyResponse {}

export interface MsgCreatePermission {
  creator: string;
  action: string;
  resource: string;
}

export interface MsgCreatePermissionResponse {
  id: number;
}

export interface MsgUpdatePermission {
  creator: string;
  id: number;
  action: string;
  resource: string;
}

export interface MsgUpdatePermissionResponse {}

export interface MsgDeletePermission {
  creator: string;
  id: number;
}

export interface MsgDeletePermissionResponse {}

export interface MsgCreateDelegationConditions {
  creator: string;
  cost: number;
  maxDelegations: number;
  validity: Validity | undefined;
}

export interface MsgCreateDelegationConditionsResponse {
  id: number;
}

export interface MsgUpdateDelegationConditions {
  creator: string;
  id: number;
  cost: number;
  maxDelegations: number;
  validity: Validity | undefined;
}

export interface MsgUpdateDelegationConditionsResponse {}

export interface MsgDeleteDelegationConditions {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationConditionsResponse {}

export interface MsgSendRequestDelegation {
  creator: string;
  port: string;
  timeoutTimestamp: number;
  delegationAction: string;
  permission: Permission | undefined;
}

export interface MsgSendRequestDelegationResponse {}

export interface MsgConfigureLocalDomain {
  creator: string;
}

export interface MsgConfigureLocalDomainResponse {}

export interface MsgCreateDelegationDecision {
  creator: string;
  decision: string;
  delegationConditions: DelegationConditions | undefined;
}

export interface MsgCreateDelegationDecisionResponse {
  id: number;
}

export interface MsgUpdateDelegationDecision {
  creator: string;
  id: number;
  decision: string;
  delegationConditions: DelegationConditions | undefined;
}

export interface MsgUpdateDelegationDecisionResponse {}

export interface MsgDeleteDelegationDecision {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationDecisionResponse {}

export interface MsgCreateSelectionPolicy {
  creator: string;
  domainList: string[];
  delegatorLocationList: string[];
  cost: number;
  nbDelegations: number;
  validity: Validity | undefined;
}

export interface MsgCreateSelectionPolicyResponse {}

export interface MsgUpdateSelectionPolicy {
  creator: string;
  domainList: string[];
  delegatorLocationList: string[];
  cost: number;
  nbDelegations: number;
  validity: Validity | undefined;
}

export interface MsgUpdateSelectionPolicyResponse {}

export interface MsgDeleteSelectionPolicy {
  creator: string;
}

export interface MsgDeleteSelectionPolicyResponse {}

const baseMsgCreateLocalDomain: object = {
  creator: "",
  name: "",
  location: "",
};

export const MsgCreateLocalDomain = {
  encode(
    message: MsgCreateLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLocalDomain } as MsgCreateLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLocalDomain {
    const message = { ...baseMsgCreateLocalDomain } as MsgCreateLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: MsgCreateLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateLocalDomain>): MsgCreateLocalDomain {
    const message = { ...baseMsgCreateLocalDomain } as MsgCreateLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseMsgCreateLocalDomainResponse: object = {};

export const MsgCreateLocalDomainResponse = {
  encode(
    _: MsgCreateLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateLocalDomainResponse,
    } as MsgCreateLocalDomainResponse;
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

  fromJSON(_: any): MsgCreateLocalDomainResponse {
    const message = {
      ...baseMsgCreateLocalDomainResponse,
    } as MsgCreateLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgCreateLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateLocalDomainResponse>
  ): MsgCreateLocalDomainResponse {
    const message = {
      ...baseMsgCreateLocalDomainResponse,
    } as MsgCreateLocalDomainResponse;
    return message;
  },
};

const baseMsgUpdateLocalDomain: object = {
  creator: "",
  name: "",
  location: "",
};

export const MsgUpdateLocalDomain = {
  encode(
    message: MsgUpdateLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateLocalDomain } as MsgUpdateLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLocalDomain {
    const message = { ...baseMsgUpdateLocalDomain } as MsgUpdateLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateLocalDomain>): MsgUpdateLocalDomain {
    const message = { ...baseMsgUpdateLocalDomain } as MsgUpdateLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseMsgUpdateLocalDomainResponse: object = {};

export const MsgUpdateLocalDomainResponse = {
  encode(
    _: MsgUpdateLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateLocalDomainResponse,
    } as MsgUpdateLocalDomainResponse;
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

  fromJSON(_: any): MsgUpdateLocalDomainResponse {
    const message = {
      ...baseMsgUpdateLocalDomainResponse,
    } as MsgUpdateLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgUpdateLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateLocalDomainResponse>
  ): MsgUpdateLocalDomainResponse {
    const message = {
      ...baseMsgUpdateLocalDomainResponse,
    } as MsgUpdateLocalDomainResponse;
    return message;
  },
};

const baseMsgDeleteLocalDomain: object = { creator: "" };

export const MsgDeleteLocalDomain = {
  encode(
    message: MsgDeleteLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteLocalDomain } as MsgDeleteLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLocalDomain {
    const message = { ...baseMsgDeleteLocalDomain } as MsgDeleteLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteLocalDomain>): MsgDeleteLocalDomain {
    const message = { ...baseMsgDeleteLocalDomain } as MsgDeleteLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteLocalDomainResponse: object = {};

export const MsgDeleteLocalDomainResponse = {
  encode(
    _: MsgDeleteLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteLocalDomainResponse,
    } as MsgDeleteLocalDomainResponse;
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

  fromJSON(_: any): MsgDeleteLocalDomainResponse {
    const message = {
      ...baseMsgDeleteLocalDomainResponse,
    } as MsgDeleteLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgDeleteLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteLocalDomainResponse>
  ): MsgDeleteLocalDomainResponse {
    const message = {
      ...baseMsgDeleteLocalDomainResponse,
    } as MsgDeleteLocalDomainResponse;
    return message;
  },
};

const baseMsgCreateDomain: object = {
  creator: "",
  name: "",
  location: "",
  ibcChannel: "",
};

export const MsgCreateDomain = {
  encode(message: MsgCreateDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    if (message.ibcChannel !== "") {
      writer.uint32(34).string(message.ibcChannel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.location = reader.string();
          break;
        case 4:
          message.ibcChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomain {
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.ibcChannel !== undefined && object.ibcChannel !== null) {
      message.ibcChannel = String(object.ibcChannel);
    } else {
      message.ibcChannel = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.location !== undefined && (obj.location = message.location);
    message.ibcChannel !== undefined && (obj.ibcChannel = message.ibcChannel);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDomain>): MsgCreateDomain {
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.ibcChannel !== undefined && object.ibcChannel !== null) {
      message.ibcChannel = object.ibcChannel;
    } else {
      message.ibcChannel = "";
    }
    return message;
  },
};

const baseMsgCreateDomainResponse: object = { id: 0 };

export const MsgCreateDomainResponse = {
  encode(
    message: MsgCreateDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomainResponse {
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDomainResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDomainResponse>
  ): MsgCreateDomainResponse {
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDomain: object = {
  creator: "",
  id: 0,
  name: "",
  location: "",
  ibcChannel: "",
};

export const MsgUpdateDomain = {
  encode(message: MsgUpdateDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    if (message.ibcChannel !== "") {
      writer.uint32(42).string(message.ibcChannel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.location = reader.string();
          break;
        case 5:
          message.ibcChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDomain {
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.ibcChannel !== undefined && object.ibcChannel !== null) {
      message.ibcChannel = String(object.ibcChannel);
    } else {
      message.ibcChannel = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.location !== undefined && (obj.location = message.location);
    message.ibcChannel !== undefined && (obj.ibcChannel = message.ibcChannel);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDomain>): MsgUpdateDomain {
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.ibcChannel !== undefined && object.ibcChannel !== null) {
      message.ibcChannel = object.ibcChannel;
    } else {
      message.ibcChannel = "";
    }
    return message;
  },
};

const baseMsgUpdateDomainResponse: object = {};

export const MsgUpdateDomainResponse = {
  encode(_: MsgUpdateDomainResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
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

  fromJSON(_: any): MsgUpdateDomainResponse {
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
    return message;
  },

  toJSON(_: MsgUpdateDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDomainResponse>
  ): MsgUpdateDomainResponse {
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
    return message;
  },
};

const baseMsgDeleteDomain: object = { creator: "", id: 0 };

export const MsgDeleteDomain = {
  encode(message: MsgDeleteDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomain {
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDomain>): MsgDeleteDomain {
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDomainResponse: object = {};

export const MsgDeleteDomainResponse = {
  encode(_: MsgDeleteDomainResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
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

  fromJSON(_: any): MsgDeleteDomainResponse {
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
    return message;
  },

  toJSON(_: MsgDeleteDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDomainResponse>
  ): MsgDeleteDomainResponse {
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
    return message;
  },
};

const baseMsgSendEstablishCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendEstablishCooperation = {
  encode(
    message: MsgSendEstablishCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEstablishCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendEstablishCooperation {
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendEstablishCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendEstablishCooperation>
  ): MsgSendEstablishCooperation {
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendEstablishCooperationResponse: object = {};

export const MsgSendEstablishCooperationResponse = {
  encode(
    _: MsgSendEstablishCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEstablishCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
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

  fromJSON(_: any): MsgSendEstablishCooperationResponse {
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendEstablishCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendEstablishCooperationResponse>
  ): MsgSendEstablishCooperationResponse {
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
    return message;
  },
};

const baseMsgCreateForwardPolicy: object = {
  creator: "",
  mode: "",
  domainList: "",
  locationList: "",
};

export const MsgCreateForwardPolicy = {
  encode(
    message: MsgCreateForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mode !== "") {
      writer.uint32(26).string(message.mode);
    }
    for (const v of message.domainList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.mode = reader.string();
          break;
        case 4:
          message.domainList.push(reader.string());
          break;
        case 5:
          message.locationList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateForwardPolicy {
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = String(object.mode);
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateForwardPolicy>
  ): MsgCreateForwardPolicy {
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateForwardPolicyResponse: object = {};

export const MsgCreateForwardPolicyResponse = {
  encode(
    _: MsgCreateForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
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

  fromJSON(_: any): MsgCreateForwardPolicyResponse {
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgCreateForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateForwardPolicyResponse>
  ): MsgCreateForwardPolicyResponse {
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
    return message;
  },
};

const baseMsgUpdateForwardPolicy: object = {
  creator: "",
  mode: "",
  domainList: "",
  locationList: "",
};

export const MsgUpdateForwardPolicy = {
  encode(
    message: MsgUpdateForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mode !== "") {
      writer.uint32(26).string(message.mode);
    }
    for (const v of message.domainList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.mode = reader.string();
          break;
        case 4:
          message.domainList.push(reader.string());
          break;
        case 5:
          message.locationList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateForwardPolicy {
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = String(object.mode);
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateForwardPolicy>
  ): MsgUpdateForwardPolicy {
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateForwardPolicyResponse: object = {};

export const MsgUpdateForwardPolicyResponse = {
  encode(
    _: MsgUpdateForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
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

  fromJSON(_: any): MsgUpdateForwardPolicyResponse {
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateForwardPolicyResponse>
  ): MsgUpdateForwardPolicyResponse {
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
    return message;
  },
};

const baseMsgDeleteForwardPolicy: object = { creator: "" };

export const MsgDeleteForwardPolicy = {
  encode(
    message: MsgDeleteForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteForwardPolicy {
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteForwardPolicy>
  ): MsgDeleteForwardPolicy {
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteForwardPolicyResponse: object = {};

export const MsgDeleteForwardPolicyResponse = {
  encode(
    _: MsgDeleteForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
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

  fromJSON(_: any): MsgDeleteForwardPolicyResponse {
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteForwardPolicyResponse>
  ): MsgDeleteForwardPolicyResponse {
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
    return message;
  },
};

const baseMsgCreateValidity: object = {
  creator: "",
  notBefore: "",
  notAfter: "",
};

export const MsgCreateValidity = {
  encode(message: MsgCreateValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.notBefore !== "") {
      writer.uint32(18).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(26).string(message.notAfter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.notBefore = reader.string();
          break;
        case 3:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidity {
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgCreateValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateValidity>): MsgCreateValidity {
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgCreateValidityResponse: object = { id: 0 };

export const MsgCreateValidityResponse = {
  encode(
    message: MsgCreateValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidityResponse {
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateValidityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateValidityResponse>
  ): MsgCreateValidityResponse {
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateValidity: object = {
  creator: "",
  id: 0,
  notBefore: "",
  notAfter: "",
};

export const MsgUpdateValidity = {
  encode(message: MsgUpdateValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.notBefore !== "") {
      writer.uint32(26).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(34).string(message.notAfter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.notBefore = reader.string();
          break;
        case 4:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateValidity {
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidity>): MsgUpdateValidity {
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgUpdateValidityResponse: object = {};

export const MsgUpdateValidityResponse = {
  encode(
    _: MsgUpdateValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
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

  fromJSON(_: any): MsgUpdateValidityResponse {
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
    return message;
  },

  toJSON(_: MsgUpdateValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidityResponse>
  ): MsgUpdateValidityResponse {
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
    return message;
  },
};

const baseMsgDeleteValidity: object = { creator: "", id: 0 };

export const MsgDeleteValidity = {
  encode(message: MsgDeleteValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteValidity {
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidity>): MsgDeleteValidity {
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteValidityResponse: object = {};

export const MsgDeleteValidityResponse = {
  encode(
    _: MsgDeleteValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
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

  fromJSON(_: any): MsgDeleteValidityResponse {
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
    return message;
  },

  toJSON(_: MsgDeleteValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteValidityResponse>
  ): MsgDeleteValidityResponse {
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
    return message;
  },
};

const baseMsgCreateDecisionPolicy: object = {
  creator: "",
  domainList: "",
  locationList: "",
  cost: 0,
  maxDelegations: 0,
};

export const MsgCreateDecisionPolicy = {
  encode(
    message: MsgCreateDecisionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.domainList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(34).string(v!);
    }
    if (message.cost !== 0) {
      writer.uint32(40).uint64(message.cost);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(48).uint64(message.maxDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDecisionPolicy,
    } as MsgCreateDecisionPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.domainList.push(reader.string());
          break;
        case 4:
          message.locationList.push(reader.string());
          break;
        case 5:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDecisionPolicy {
    const message = {
      ...baseMsgCreateDecisionPolicy,
    } as MsgCreateDecisionPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateDecisionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    message.cost !== undefined && (obj.cost = message.cost);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDecisionPolicy>
  ): MsgCreateDecisionPolicy {
    const message = {
      ...baseMsgCreateDecisionPolicy,
    } as MsgCreateDecisionPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgCreateDecisionPolicyResponse: object = {};

export const MsgCreateDecisionPolicyResponse = {
  encode(
    _: MsgCreateDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDecisionPolicyResponse,
    } as MsgCreateDecisionPolicyResponse;
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

  fromJSON(_: any): MsgCreateDecisionPolicyResponse {
    const message = {
      ...baseMsgCreateDecisionPolicyResponse,
    } as MsgCreateDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgCreateDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateDecisionPolicyResponse>
  ): MsgCreateDecisionPolicyResponse {
    const message = {
      ...baseMsgCreateDecisionPolicyResponse,
    } as MsgCreateDecisionPolicyResponse;
    return message;
  },
};

const baseMsgUpdateDecisionPolicy: object = {
  creator: "",
  domainList: "",
  locationList: "",
  cost: 0,
  maxDelegations: 0,
};

export const MsgUpdateDecisionPolicy = {
  encode(
    message: MsgUpdateDecisionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.domainList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(34).string(v!);
    }
    if (message.cost !== 0) {
      writer.uint32(40).uint64(message.cost);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(48).uint64(message.maxDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDecisionPolicy,
    } as MsgUpdateDecisionPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.domainList.push(reader.string());
          break;
        case 4:
          message.locationList.push(reader.string());
          break;
        case 5:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDecisionPolicy {
    const message = {
      ...baseMsgUpdateDecisionPolicy,
    } as MsgUpdateDecisionPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateDecisionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    message.cost !== undefined && (obj.cost = message.cost);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDecisionPolicy>
  ): MsgUpdateDecisionPolicy {
    const message = {
      ...baseMsgUpdateDecisionPolicy,
    } as MsgUpdateDecisionPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgUpdateDecisionPolicyResponse: object = {};

export const MsgUpdateDecisionPolicyResponse = {
  encode(
    _: MsgUpdateDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDecisionPolicyResponse,
    } as MsgUpdateDecisionPolicyResponse;
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

  fromJSON(_: any): MsgUpdateDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateDecisionPolicyResponse,
    } as MsgUpdateDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDecisionPolicyResponse>
  ): MsgUpdateDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateDecisionPolicyResponse,
    } as MsgUpdateDecisionPolicyResponse;
    return message;
  },
};

const baseMsgDeleteDecisionPolicy: object = { creator: "" };

export const MsgDeleteDecisionPolicy = {
  encode(
    message: MsgDeleteDecisionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDecisionPolicy,
    } as MsgDeleteDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDecisionPolicy {
    const message = {
      ...baseMsgDeleteDecisionPolicy,
    } as MsgDeleteDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteDecisionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDecisionPolicy>
  ): MsgDeleteDecisionPolicy {
    const message = {
      ...baseMsgDeleteDecisionPolicy,
    } as MsgDeleteDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteDecisionPolicyResponse: object = {};

export const MsgDeleteDecisionPolicyResponse = {
  encode(
    _: MsgDeleteDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDecisionPolicyResponse,
    } as MsgDeleteDecisionPolicyResponse;
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

  fromJSON(_: any): MsgDeleteDecisionPolicyResponse {
    const message = {
      ...baseMsgDeleteDecisionPolicyResponse,
    } as MsgDeleteDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDecisionPolicyResponse>
  ): MsgDeleteDecisionPolicyResponse {
    const message = {
      ...baseMsgDeleteDecisionPolicyResponse,
    } as MsgDeleteDecisionPolicyResponse;
    return message;
  },
};

const baseMsgCreatePermission: object = {
  creator: "",
  action: "",
  resource: "",
};

export const MsgCreatePermission = {
  encode(
    message: MsgCreatePermission,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePermission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePermission } as MsgCreatePermission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        case 3:
          message.resource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePermission {
    const message = { ...baseMsgCreatePermission } as MsgCreatePermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = String(object.resource);
    } else {
      message.resource = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePermission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.action !== undefined && (obj.action = message.action);
    message.resource !== undefined && (obj.resource = message.resource);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePermission>): MsgCreatePermission {
    const message = { ...baseMsgCreatePermission } as MsgCreatePermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    } else {
      message.resource = "";
    }
    return message;
  },
};

const baseMsgCreatePermissionResponse: object = { id: 0 };

export const MsgCreatePermissionResponse = {
  encode(
    message: MsgCreatePermissionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePermissionResponse,
    } as MsgCreatePermissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePermissionResponse {
    const message = {
      ...baseMsgCreatePermissionResponse,
    } as MsgCreatePermissionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePermissionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePermissionResponse>
  ): MsgCreatePermissionResponse {
    const message = {
      ...baseMsgCreatePermissionResponse,
    } as MsgCreatePermissionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePermission: object = {
  creator: "",
  id: 0,
  action: "",
  resource: "",
};

export const MsgUpdatePermission = {
  encode(
    message: MsgUpdatePermission,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    if (message.resource !== "") {
      writer.uint32(34).string(message.resource);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePermission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePermission } as MsgUpdatePermission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.action = reader.string();
          break;
        case 4:
          message.resource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePermission {
    const message = { ...baseMsgUpdatePermission } as MsgUpdatePermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = String(object.resource);
    } else {
      message.resource = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePermission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.action !== undefined && (obj.action = message.action);
    message.resource !== undefined && (obj.resource = message.resource);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePermission>): MsgUpdatePermission {
    const message = { ...baseMsgUpdatePermission } as MsgUpdatePermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    } else {
      message.resource = "";
    }
    return message;
  },
};

const baseMsgUpdatePermissionResponse: object = {};

export const MsgUpdatePermissionResponse = {
  encode(
    _: MsgUpdatePermissionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePermissionResponse,
    } as MsgUpdatePermissionResponse;
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

  fromJSON(_: any): MsgUpdatePermissionResponse {
    const message = {
      ...baseMsgUpdatePermissionResponse,
    } as MsgUpdatePermissionResponse;
    return message;
  },

  toJSON(_: MsgUpdatePermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePermissionResponse>
  ): MsgUpdatePermissionResponse {
    const message = {
      ...baseMsgUpdatePermissionResponse,
    } as MsgUpdatePermissionResponse;
    return message;
  },
};

const baseMsgDeletePermission: object = { creator: "", id: 0 };

export const MsgDeletePermission = {
  encode(
    message: MsgDeletePermission,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePermission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePermission } as MsgDeletePermission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePermission {
    const message = { ...baseMsgDeletePermission } as MsgDeletePermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePermission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePermission>): MsgDeletePermission {
    const message = { ...baseMsgDeletePermission } as MsgDeletePermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePermissionResponse: object = {};

export const MsgDeletePermissionResponse = {
  encode(
    _: MsgDeletePermissionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePermissionResponse,
    } as MsgDeletePermissionResponse;
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

  fromJSON(_: any): MsgDeletePermissionResponse {
    const message = {
      ...baseMsgDeletePermissionResponse,
    } as MsgDeletePermissionResponse;
    return message;
  },

  toJSON(_: MsgDeletePermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePermissionResponse>
  ): MsgDeletePermissionResponse {
    const message = {
      ...baseMsgDeletePermissionResponse,
    } as MsgDeletePermissionResponse;
    return message;
  },
};

const baseMsgCreateDelegationConditions: object = {
  creator: "",
  cost: 0,
  maxDelegations: 0,
};

export const MsgCreateDelegationConditions = {
  encode(
    message: MsgCreateDelegationConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cost !== 0) {
      writer.uint32(16).uint64(message.cost);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(24).uint64(message.maxDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationConditions,
    } as MsgCreateDelegationConditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationConditions {
    const message = {
      ...baseMsgCreateDelegationConditions,
    } as MsgCreateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationConditions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cost !== undefined && (obj.cost = message.cost);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationConditions>
  ): MsgCreateDelegationConditions {
    const message = {
      ...baseMsgCreateDelegationConditions,
    } as MsgCreateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgCreateDelegationConditionsResponse: object = { id: 0 };

export const MsgCreateDelegationConditionsResponse = {
  encode(
    message: MsgCreateDelegationConditionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationConditionsResponse,
    } as MsgCreateDelegationConditionsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationConditionsResponse {
    const message = {
      ...baseMsgCreateDelegationConditionsResponse,
    } as MsgCreateDelegationConditionsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationConditionsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationConditionsResponse>
  ): MsgCreateDelegationConditionsResponse {
    const message = {
      ...baseMsgCreateDelegationConditionsResponse,
    } as MsgCreateDelegationConditionsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationConditions: object = {
  creator: "",
  id: 0,
  cost: 0,
  maxDelegations: 0,
};

export const MsgUpdateDelegationConditions = {
  encode(
    message: MsgUpdateDelegationConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.cost !== 0) {
      writer.uint32(24).uint64(message.cost);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(32).uint64(message.maxDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationConditions,
    } as MsgUpdateDelegationConditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationConditions {
    const message = {
      ...baseMsgUpdateDelegationConditions,
    } as MsgUpdateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateDelegationConditions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.cost !== undefined && (obj.cost = message.cost);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationConditions>
  ): MsgUpdateDelegationConditions {
    const message = {
      ...baseMsgUpdateDelegationConditions,
    } as MsgUpdateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgUpdateDelegationConditionsResponse: object = {};

export const MsgUpdateDelegationConditionsResponse = {
  encode(
    _: MsgUpdateDelegationConditionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationConditionsResponse,
    } as MsgUpdateDelegationConditionsResponse;
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

  fromJSON(_: any): MsgUpdateDelegationConditionsResponse {
    const message = {
      ...baseMsgUpdateDelegationConditionsResponse,
    } as MsgUpdateDelegationConditionsResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationConditionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationConditionsResponse>
  ): MsgUpdateDelegationConditionsResponse {
    const message = {
      ...baseMsgUpdateDelegationConditionsResponse,
    } as MsgUpdateDelegationConditionsResponse;
    return message;
  },
};

const baseMsgDeleteDelegationConditions: object = { creator: "", id: 0 };

export const MsgDeleteDelegationConditions = {
  encode(
    message: MsgDeleteDelegationConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationConditions,
    } as MsgDeleteDelegationConditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegationConditions {
    const message = {
      ...baseMsgDeleteDelegationConditions,
    } as MsgDeleteDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDelegationConditions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationConditions>
  ): MsgDeleteDelegationConditions {
    const message = {
      ...baseMsgDeleteDelegationConditions,
    } as MsgDeleteDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDelegationConditionsResponse: object = {};

export const MsgDeleteDelegationConditionsResponse = {
  encode(
    _: MsgDeleteDelegationConditionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationConditionsResponse,
    } as MsgDeleteDelegationConditionsResponse;
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

  fromJSON(_: any): MsgDeleteDelegationConditionsResponse {
    const message = {
      ...baseMsgDeleteDelegationConditionsResponse,
    } as MsgDeleteDelegationConditionsResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationConditionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationConditionsResponse>
  ): MsgDeleteDelegationConditionsResponse {
    const message = {
      ...baseMsgDeleteDelegationConditionsResponse,
    } as MsgDeleteDelegationConditionsResponse;
    return message;
  },
};

const baseMsgSendRequestDelegation: object = {
  creator: "",
  port: "",
  timeoutTimestamp: 0,
  delegationAction: "",
};

export const MsgSendRequestDelegation = {
  encode(
    message: MsgSendRequestDelegation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.delegationAction !== "") {
      writer.uint32(42).string(message.delegationAction);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendRequestDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendRequestDelegation,
    } as MsgSendRequestDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.delegationAction = reader.string();
          break;
        case 6:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRequestDelegation {
    const message = {
      ...baseMsgSendRequestDelegation,
    } as MsgSendRequestDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
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

  toJSON(message: MsgSendRequestDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.delegationAction !== undefined &&
      (obj.delegationAction = message.delegationAction);
    message.permission !== undefined &&
      (obj.permission = message.permission
        ? Permission.toJSON(message.permission)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendRequestDelegation>
  ): MsgSendRequestDelegation {
    const message = {
      ...baseMsgSendRequestDelegation,
    } as MsgSendRequestDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
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

const baseMsgSendRequestDelegationResponse: object = {};

export const MsgSendRequestDelegationResponse = {
  encode(
    _: MsgSendRequestDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendRequestDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendRequestDelegationResponse,
    } as MsgSendRequestDelegationResponse;
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

  fromJSON(_: any): MsgSendRequestDelegationResponse {
    const message = {
      ...baseMsgSendRequestDelegationResponse,
    } as MsgSendRequestDelegationResponse;
    return message;
  },

  toJSON(_: MsgSendRequestDelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendRequestDelegationResponse>
  ): MsgSendRequestDelegationResponse {
    const message = {
      ...baseMsgSendRequestDelegationResponse,
    } as MsgSendRequestDelegationResponse;
    return message;
  },
};

const baseMsgConfigureLocalDomain: object = { creator: "" };

export const MsgConfigureLocalDomain = {
  encode(
    message: MsgConfigureLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfigureLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfigureLocalDomain,
    } as MsgConfigureLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfigureLocalDomain {
    const message = {
      ...baseMsgConfigureLocalDomain,
    } as MsgConfigureLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgConfigureLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConfigureLocalDomain>
  ): MsgConfigureLocalDomain {
    const message = {
      ...baseMsgConfigureLocalDomain,
    } as MsgConfigureLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgConfigureLocalDomainResponse: object = {};

export const MsgConfigureLocalDomainResponse = {
  encode(
    _: MsgConfigureLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgConfigureLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfigureLocalDomainResponse,
    } as MsgConfigureLocalDomainResponse;
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

  fromJSON(_: any): MsgConfigureLocalDomainResponse {
    const message = {
      ...baseMsgConfigureLocalDomainResponse,
    } as MsgConfigureLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgConfigureLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConfigureLocalDomainResponse>
  ): MsgConfigureLocalDomainResponse {
    const message = {
      ...baseMsgConfigureLocalDomainResponse,
    } as MsgConfigureLocalDomainResponse;
    return message;
  },
};

const baseMsgCreateDelegationDecision: object = { creator: "", decision: "" };

export const MsgCreateDelegationDecision = {
  encode(
    message: MsgCreateDelegationDecision,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.decision !== "") {
      writer.uint32(18).string(message.decision);
    }
    if (message.delegationConditions !== undefined) {
      DelegationConditions.encode(
        message.delegationConditions,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationDecision,
    } as MsgCreateDelegationDecision;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.decision = reader.string();
          break;
        case 3:
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

  fromJSON(object: any): MsgCreateDelegationDecision {
    const message = {
      ...baseMsgCreateDelegationDecision,
    } as MsgCreateDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateDelegationDecision): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.decision !== undefined && (obj.decision = message.decision);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationDecision>
  ): MsgCreateDelegationDecision {
    const message = {
      ...baseMsgCreateDelegationDecision,
    } as MsgCreateDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateDelegationDecisionResponse: object = { id: 0 };

export const MsgCreateDelegationDecisionResponse = {
  encode(
    message: MsgCreateDelegationDecisionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationDecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationDecisionResponse,
    } as MsgCreateDelegationDecisionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationDecisionResponse {
    const message = {
      ...baseMsgCreateDelegationDecisionResponse,
    } as MsgCreateDelegationDecisionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationDecisionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationDecisionResponse>
  ): MsgCreateDelegationDecisionResponse {
    const message = {
      ...baseMsgCreateDelegationDecisionResponse,
    } as MsgCreateDelegationDecisionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationDecision: object = {
  creator: "",
  id: 0,
  decision: "",
};

export const MsgUpdateDelegationDecision = {
  encode(
    message: MsgUpdateDelegationDecision,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
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
  ): MsgUpdateDelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationDecision,
    } as MsgUpdateDelegationDecision;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgUpdateDelegationDecision {
    const message = {
      ...baseMsgUpdateDelegationDecision,
    } as MsgUpdateDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
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

  toJSON(message: MsgUpdateDelegationDecision): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.decision !== undefined && (obj.decision = message.decision);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationDecision>
  ): MsgUpdateDelegationDecision {
    const message = {
      ...baseMsgUpdateDelegationDecision,
    } as MsgUpdateDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
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

const baseMsgUpdateDelegationDecisionResponse: object = {};

export const MsgUpdateDelegationDecisionResponse = {
  encode(
    _: MsgUpdateDelegationDecisionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationDecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationDecisionResponse,
    } as MsgUpdateDelegationDecisionResponse;
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

  fromJSON(_: any): MsgUpdateDelegationDecisionResponse {
    const message = {
      ...baseMsgUpdateDelegationDecisionResponse,
    } as MsgUpdateDelegationDecisionResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationDecisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationDecisionResponse>
  ): MsgUpdateDelegationDecisionResponse {
    const message = {
      ...baseMsgUpdateDelegationDecisionResponse,
    } as MsgUpdateDelegationDecisionResponse;
    return message;
  },
};

const baseMsgDeleteDelegationDecision: object = { creator: "", id: 0 };

export const MsgDeleteDelegationDecision = {
  encode(
    message: MsgDeleteDelegationDecision,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationDecision,
    } as MsgDeleteDelegationDecision;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegationDecision {
    const message = {
      ...baseMsgDeleteDelegationDecision,
    } as MsgDeleteDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDelegationDecision): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationDecision>
  ): MsgDeleteDelegationDecision {
    const message = {
      ...baseMsgDeleteDelegationDecision,
    } as MsgDeleteDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDelegationDecisionResponse: object = {};

export const MsgDeleteDelegationDecisionResponse = {
  encode(
    _: MsgDeleteDelegationDecisionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationDecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationDecisionResponse,
    } as MsgDeleteDelegationDecisionResponse;
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

  fromJSON(_: any): MsgDeleteDelegationDecisionResponse {
    const message = {
      ...baseMsgDeleteDelegationDecisionResponse,
    } as MsgDeleteDelegationDecisionResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationDecisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationDecisionResponse>
  ): MsgDeleteDelegationDecisionResponse {
    const message = {
      ...baseMsgDeleteDelegationDecisionResponse,
    } as MsgDeleteDelegationDecisionResponse;
    return message;
  },
};

const baseMsgCreateSelectionPolicy: object = {
  creator: "",
  domainList: "",
  delegatorLocationList: "",
  cost: 0,
  nbDelegations: 0,
};

export const MsgCreateSelectionPolicy = {
  encode(
    message: MsgCreateSelectionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.domainList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.delegatorLocationList) {
      writer.uint32(34).string(v!);
    }
    if (message.cost !== 0) {
      writer.uint32(40).uint64(message.cost);
    }
    if (message.nbDelegations !== 0) {
      writer.uint32(48).uint64(message.nbDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSelectionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSelectionPolicy,
    } as MsgCreateSelectionPolicy;
    message.domainList = [];
    message.delegatorLocationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.domainList.push(reader.string());
          break;
        case 4:
          message.delegatorLocationList.push(reader.string());
          break;
        case 5:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.nbDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSelectionPolicy {
    const message = {
      ...baseMsgCreateSelectionPolicy,
    } as MsgCreateSelectionPolicy;
    message.domainList = [];
    message.delegatorLocationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (
      object.delegatorLocationList !== undefined &&
      object.delegatorLocationList !== null
    ) {
      for (const e of object.delegatorLocationList) {
        message.delegatorLocationList.push(String(e));
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.nbDelegations !== undefined && object.nbDelegations !== null) {
      message.nbDelegations = Number(object.nbDelegations);
    } else {
      message.nbDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateSelectionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.delegatorLocationList) {
      obj.delegatorLocationList = message.delegatorLocationList.map((e) => e);
    } else {
      obj.delegatorLocationList = [];
    }
    message.cost !== undefined && (obj.cost = message.cost);
    message.nbDelegations !== undefined &&
      (obj.nbDelegations = message.nbDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSelectionPolicy>
  ): MsgCreateSelectionPolicy {
    const message = {
      ...baseMsgCreateSelectionPolicy,
    } as MsgCreateSelectionPolicy;
    message.domainList = [];
    message.delegatorLocationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (
      object.delegatorLocationList !== undefined &&
      object.delegatorLocationList !== null
    ) {
      for (const e of object.delegatorLocationList) {
        message.delegatorLocationList.push(e);
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.nbDelegations !== undefined && object.nbDelegations !== null) {
      message.nbDelegations = object.nbDelegations;
    } else {
      message.nbDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgCreateSelectionPolicyResponse: object = {};

export const MsgCreateSelectionPolicyResponse = {
  encode(
    _: MsgCreateSelectionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSelectionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSelectionPolicyResponse,
    } as MsgCreateSelectionPolicyResponse;
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

  fromJSON(_: any): MsgCreateSelectionPolicyResponse {
    const message = {
      ...baseMsgCreateSelectionPolicyResponse,
    } as MsgCreateSelectionPolicyResponse;
    return message;
  },

  toJSON(_: MsgCreateSelectionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateSelectionPolicyResponse>
  ): MsgCreateSelectionPolicyResponse {
    const message = {
      ...baseMsgCreateSelectionPolicyResponse,
    } as MsgCreateSelectionPolicyResponse;
    return message;
  },
};

const baseMsgUpdateSelectionPolicy: object = {
  creator: "",
  domainList: "",
  delegatorLocationList: "",
  cost: 0,
  nbDelegations: 0,
};

export const MsgUpdateSelectionPolicy = {
  encode(
    message: MsgUpdateSelectionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.domainList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.delegatorLocationList) {
      writer.uint32(34).string(v!);
    }
    if (message.cost !== 0) {
      writer.uint32(40).uint64(message.cost);
    }
    if (message.nbDelegations !== 0) {
      writer.uint32(48).uint64(message.nbDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSelectionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSelectionPolicy,
    } as MsgUpdateSelectionPolicy;
    message.domainList = [];
    message.delegatorLocationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.domainList.push(reader.string());
          break;
        case 4:
          message.delegatorLocationList.push(reader.string());
          break;
        case 5:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.nbDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSelectionPolicy {
    const message = {
      ...baseMsgUpdateSelectionPolicy,
    } as MsgUpdateSelectionPolicy;
    message.domainList = [];
    message.delegatorLocationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (
      object.delegatorLocationList !== undefined &&
      object.delegatorLocationList !== null
    ) {
      for (const e of object.delegatorLocationList) {
        message.delegatorLocationList.push(String(e));
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.nbDelegations !== undefined && object.nbDelegations !== null) {
      message.nbDelegations = Number(object.nbDelegations);
    } else {
      message.nbDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateSelectionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.delegatorLocationList) {
      obj.delegatorLocationList = message.delegatorLocationList.map((e) => e);
    } else {
      obj.delegatorLocationList = [];
    }
    message.cost !== undefined && (obj.cost = message.cost);
    message.nbDelegations !== undefined &&
      (obj.nbDelegations = message.nbDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateSelectionPolicy>
  ): MsgUpdateSelectionPolicy {
    const message = {
      ...baseMsgUpdateSelectionPolicy,
    } as MsgUpdateSelectionPolicy;
    message.domainList = [];
    message.delegatorLocationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (
      object.delegatorLocationList !== undefined &&
      object.delegatorLocationList !== null
    ) {
      for (const e of object.delegatorLocationList) {
        message.delegatorLocationList.push(e);
      }
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.nbDelegations !== undefined && object.nbDelegations !== null) {
      message.nbDelegations = object.nbDelegations;
    } else {
      message.nbDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgUpdateSelectionPolicyResponse: object = {};

export const MsgUpdateSelectionPolicyResponse = {
  encode(
    _: MsgUpdateSelectionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSelectionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSelectionPolicyResponse,
    } as MsgUpdateSelectionPolicyResponse;
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

  fromJSON(_: any): MsgUpdateSelectionPolicyResponse {
    const message = {
      ...baseMsgUpdateSelectionPolicyResponse,
    } as MsgUpdateSelectionPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateSelectionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSelectionPolicyResponse>
  ): MsgUpdateSelectionPolicyResponse {
    const message = {
      ...baseMsgUpdateSelectionPolicyResponse,
    } as MsgUpdateSelectionPolicyResponse;
    return message;
  },
};

const baseMsgDeleteSelectionPolicy: object = { creator: "" };

export const MsgDeleteSelectionPolicy = {
  encode(
    message: MsgDeleteSelectionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSelectionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSelectionPolicy,
    } as MsgDeleteSelectionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSelectionPolicy {
    const message = {
      ...baseMsgDeleteSelectionPolicy,
    } as MsgDeleteSelectionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteSelectionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteSelectionPolicy>
  ): MsgDeleteSelectionPolicy {
    const message = {
      ...baseMsgDeleteSelectionPolicy,
    } as MsgDeleteSelectionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteSelectionPolicyResponse: object = {};

export const MsgDeleteSelectionPolicyResponse = {
  encode(
    _: MsgDeleteSelectionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSelectionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSelectionPolicyResponse,
    } as MsgDeleteSelectionPolicyResponse;
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

  fromJSON(_: any): MsgDeleteSelectionPolicyResponse {
    const message = {
      ...baseMsgDeleteSelectionPolicyResponse,
    } as MsgDeleteSelectionPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteSelectionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSelectionPolicyResponse>
  ): MsgDeleteSelectionPolicyResponse {
    const message = {
      ...baseMsgDeleteSelectionPolicyResponse,
    } as MsgDeleteSelectionPolicyResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateLocalDomain(
    request: MsgCreateLocalDomain
  ): Promise<MsgCreateLocalDomainResponse>;
  UpdateLocalDomain(
    request: MsgUpdateLocalDomain
  ): Promise<MsgUpdateLocalDomainResponse>;
  DeleteLocalDomain(
    request: MsgDeleteLocalDomain
  ): Promise<MsgDeleteLocalDomainResponse>;
  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse>;
  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse>;
  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse>;
  SendEstablishCooperation(
    request: MsgSendEstablishCooperation
  ): Promise<MsgSendEstablishCooperationResponse>;
  CreateForwardPolicy(
    request: MsgCreateForwardPolicy
  ): Promise<MsgCreateForwardPolicyResponse>;
  UpdateForwardPolicy(
    request: MsgUpdateForwardPolicy
  ): Promise<MsgUpdateForwardPolicyResponse>;
  DeleteForwardPolicy(
    request: MsgDeleteForwardPolicy
  ): Promise<MsgDeleteForwardPolicyResponse>;
  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse>;
  UpdateValidity(
    request: MsgUpdateValidity
  ): Promise<MsgUpdateValidityResponse>;
  DeleteValidity(
    request: MsgDeleteValidity
  ): Promise<MsgDeleteValidityResponse>;
  CreateDecisionPolicy(
    request: MsgCreateDecisionPolicy
  ): Promise<MsgCreateDecisionPolicyResponse>;
  UpdateDecisionPolicy(
    request: MsgUpdateDecisionPolicy
  ): Promise<MsgUpdateDecisionPolicyResponse>;
  DeleteDecisionPolicy(
    request: MsgDeleteDecisionPolicy
  ): Promise<MsgDeleteDecisionPolicyResponse>;
  CreatePermission(
    request: MsgCreatePermission
  ): Promise<MsgCreatePermissionResponse>;
  UpdatePermission(
    request: MsgUpdatePermission
  ): Promise<MsgUpdatePermissionResponse>;
  DeletePermission(
    request: MsgDeletePermission
  ): Promise<MsgDeletePermissionResponse>;
  CreateDelegationConditions(
    request: MsgCreateDelegationConditions
  ): Promise<MsgCreateDelegationConditionsResponse>;
  UpdateDelegationConditions(
    request: MsgUpdateDelegationConditions
  ): Promise<MsgUpdateDelegationConditionsResponse>;
  DeleteDelegationConditions(
    request: MsgDeleteDelegationConditions
  ): Promise<MsgDeleteDelegationConditionsResponse>;
  SendRequestDelegation(
    request: MsgSendRequestDelegation
  ): Promise<MsgSendRequestDelegationResponse>;
  ConfigureLocalDomain(
    request: MsgConfigureLocalDomain
  ): Promise<MsgConfigureLocalDomainResponse>;
  CreateDelegationDecision(
    request: MsgCreateDelegationDecision
  ): Promise<MsgCreateDelegationDecisionResponse>;
  UpdateDelegationDecision(
    request: MsgUpdateDelegationDecision
  ): Promise<MsgUpdateDelegationDecisionResponse>;
  DeleteDelegationDecision(
    request: MsgDeleteDelegationDecision
  ): Promise<MsgDeleteDelegationDecisionResponse>;
  CreateSelectionPolicy(
    request: MsgCreateSelectionPolicy
  ): Promise<MsgCreateSelectionPolicyResponse>;
  UpdateSelectionPolicy(
    request: MsgUpdateSelectionPolicy
  ): Promise<MsgUpdateSelectionPolicyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteSelectionPolicy(
    request: MsgDeleteSelectionPolicy
  ): Promise<MsgDeleteSelectionPolicyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateLocalDomain(
    request: MsgCreateLocalDomain
  ): Promise<MsgCreateLocalDomainResponse> {
    const data = MsgCreateLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgCreateLocalDomainResponse.decode(new Reader(data))
    );
  }

  UpdateLocalDomain(
    request: MsgUpdateLocalDomain
  ): Promise<MsgUpdateLocalDomainResponse> {
    const data = MsgUpdateLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgUpdateLocalDomainResponse.decode(new Reader(data))
    );
  }

  DeleteLocalDomain(
    request: MsgDeleteLocalDomain
  ): Promise<MsgDeleteLocalDomainResponse> {
    const data = MsgDeleteLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgDeleteLocalDomainResponse.decode(new Reader(data))
    );
  }

  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse> {
    const data = MsgCreateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateDomain",
      data
    );
    return promise.then((data) =>
      MsgCreateDomainResponse.decode(new Reader(data))
    );
  }

  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse> {
    const data = MsgUpdateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateDomain",
      data
    );
    return promise.then((data) =>
      MsgUpdateDomainResponse.decode(new Reader(data))
    );
  }

  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse> {
    const data = MsgDeleteDomain.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteDomain",
      data
    );
    return promise.then((data) =>
      MsgDeleteDomainResponse.decode(new Reader(data))
    );
  }

  SendEstablishCooperation(
    request: MsgSendEstablishCooperation
  ): Promise<MsgSendEstablishCooperationResponse> {
    const data = MsgSendEstablishCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "SendEstablishCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendEstablishCooperationResponse.decode(new Reader(data))
    );
  }

  CreateForwardPolicy(
    request: MsgCreateForwardPolicy
  ): Promise<MsgCreateForwardPolicyResponse> {
    const data = MsgCreateForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateForwardPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateForwardPolicy(
    request: MsgUpdateForwardPolicy
  ): Promise<MsgUpdateForwardPolicyResponse> {
    const data = MsgUpdateForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateForwardPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteForwardPolicy(
    request: MsgDeleteForwardPolicy
  ): Promise<MsgDeleteForwardPolicyResponse> {
    const data = MsgDeleteForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteForwardPolicyResponse.decode(new Reader(data))
    );
  }

  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse> {
    const data = MsgCreateValidity.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateValidity",
      data
    );
    return promise.then((data) =>
      MsgCreateValidityResponse.decode(new Reader(data))
    );
  }

  UpdateValidity(
    request: MsgUpdateValidity
  ): Promise<MsgUpdateValidityResponse> {
    const data = MsgUpdateValidity.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateValidity",
      data
    );
    return promise.then((data) =>
      MsgUpdateValidityResponse.decode(new Reader(data))
    );
  }

  DeleteValidity(
    request: MsgDeleteValidity
  ): Promise<MsgDeleteValidityResponse> {
    const data = MsgDeleteValidity.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteValidity",
      data
    );
    return promise.then((data) =>
      MsgDeleteValidityResponse.decode(new Reader(data))
    );
  }

  CreateDecisionPolicy(
    request: MsgCreateDecisionPolicy
  ): Promise<MsgCreateDecisionPolicyResponse> {
    const data = MsgCreateDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateDecisionPolicy(
    request: MsgUpdateDecisionPolicy
  ): Promise<MsgUpdateDecisionPolicyResponse> {
    const data = MsgUpdateDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteDecisionPolicy(
    request: MsgDeleteDecisionPolicy
  ): Promise<MsgDeleteDecisionPolicyResponse> {
    const data = MsgDeleteDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  CreatePermission(
    request: MsgCreatePermission
  ): Promise<MsgCreatePermissionResponse> {
    const data = MsgCreatePermission.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreatePermission",
      data
    );
    return promise.then((data) =>
      MsgCreatePermissionResponse.decode(new Reader(data))
    );
  }

  UpdatePermission(
    request: MsgUpdatePermission
  ): Promise<MsgUpdatePermissionResponse> {
    const data = MsgUpdatePermission.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdatePermission",
      data
    );
    return promise.then((data) =>
      MsgUpdatePermissionResponse.decode(new Reader(data))
    );
  }

  DeletePermission(
    request: MsgDeletePermission
  ): Promise<MsgDeletePermissionResponse> {
    const data = MsgDeletePermission.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeletePermission",
      data
    );
    return promise.then((data) =>
      MsgDeletePermissionResponse.decode(new Reader(data))
    );
  }

  CreateDelegationConditions(
    request: MsgCreateDelegationConditions
  ): Promise<MsgCreateDelegationConditionsResponse> {
    const data = MsgCreateDelegationConditions.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateDelegationConditions",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationConditionsResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationConditions(
    request: MsgUpdateDelegationConditions
  ): Promise<MsgUpdateDelegationConditionsResponse> {
    const data = MsgUpdateDelegationConditions.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateDelegationConditions",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationConditionsResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationConditions(
    request: MsgDeleteDelegationConditions
  ): Promise<MsgDeleteDelegationConditionsResponse> {
    const data = MsgDeleteDelegationConditions.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteDelegationConditions",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationConditionsResponse.decode(new Reader(data))
    );
  }

  SendRequestDelegation(
    request: MsgSendRequestDelegation
  ): Promise<MsgSendRequestDelegationResponse> {
    const data = MsgSendRequestDelegation.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "SendRequestDelegation",
      data
    );
    return promise.then((data) =>
      MsgSendRequestDelegationResponse.decode(new Reader(data))
    );
  }

  ConfigureLocalDomain(
    request: MsgConfigureLocalDomain
  ): Promise<MsgConfigureLocalDomainResponse> {
    const data = MsgConfigureLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "ConfigureLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgConfigureLocalDomainResponse.decode(new Reader(data))
    );
  }

  CreateDelegationDecision(
    request: MsgCreateDelegationDecision
  ): Promise<MsgCreateDelegationDecisionResponse> {
    const data = MsgCreateDelegationDecision.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateDelegationDecision",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationDecisionResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationDecision(
    request: MsgUpdateDelegationDecision
  ): Promise<MsgUpdateDelegationDecisionResponse> {
    const data = MsgUpdateDelegationDecision.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateDelegationDecision",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationDecisionResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationDecision(
    request: MsgDeleteDelegationDecision
  ): Promise<MsgDeleteDelegationDecisionResponse> {
    const data = MsgDeleteDelegationDecision.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteDelegationDecision",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationDecisionResponse.decode(new Reader(data))
    );
  }

  CreateSelectionPolicy(
    request: MsgCreateSelectionPolicy
  ): Promise<MsgCreateSelectionPolicyResponse> {
    const data = MsgCreateSelectionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateSelectionPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateSelectionPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateSelectionPolicy(
    request: MsgUpdateSelectionPolicy
  ): Promise<MsgUpdateSelectionPolicyResponse> {
    const data = MsgUpdateSelectionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateSelectionPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateSelectionPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteSelectionPolicy(
    request: MsgDeleteSelectionPolicy
  ): Promise<MsgDeleteSelectionPolicyResponse> {
    const data = MsgDeleteSelectionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteSelectionPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteSelectionPolicyResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
