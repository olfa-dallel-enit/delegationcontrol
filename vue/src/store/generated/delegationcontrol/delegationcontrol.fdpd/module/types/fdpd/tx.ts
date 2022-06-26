/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Validity } from "../fdpd/validity";
import { DelegationRequest } from "../fdpd/delegation_request";
import { DelegationConditions } from "../fdpd/delegation_conditions";
import { Permission } from "../fdpd/permission";

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
  maxDelegateeNb: number;
  validity: Validity | undefined;
}

export interface MsgCreateDelegationConditionsResponse {
  id: number;
}

export interface MsgUpdateDelegationConditions {
  creator: string;
  id: number;
  cost: number;
  maxDelegateeNb: number;
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
  delegationRequest: DelegationRequest | undefined;
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

export interface MsgCreateSelectionCriteria {
  creator: string;
  domainList: string[];
  delegatorLocationList: string[];
  cost: number;
  nbDelegations: number;
  validity: Validity | undefined;
}

export interface MsgCreateSelectionCriteriaResponse {
  id: number;
}

export interface MsgUpdateSelectionCriteria {
  creator: string;
  id: number;
  domainList: string[];
  delegatorLocationList: string[];
  cost: number;
  nbDelegations: number;
  validity: Validity | undefined;
}

export interface MsgUpdateSelectionCriteriaResponse {}

export interface MsgDeleteSelectionCriteria {
  creator: string;
  id: number;
}

export interface MsgDeleteSelectionCriteriaResponse {}

export interface MsgCheckDelegation {
  creator: string;
  label: string;
  selectionCriteria: string;
}

export interface MsgCheckDelegationResponse {}

export interface MsgCreateDelegationRequest {
  creator: string;
  label: string;
  delegationAction: string;
  permission: Permission | undefined;
}

export interface MsgCreateDelegationRequestResponse {
  id: number;
}

export interface MsgUpdateDelegationRequest {
  creator: string;
  id: number;
  label: string;
  delegationAction: string;
  permission: Permission | undefined;
}

export interface MsgUpdateDelegationRequestResponse {}

export interface MsgDeleteDelegationRequest {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationRequestResponse {}

export interface MsgCreateFinalDelegationDecision {
  creator: string;
  delegationRequestLabel: string;
  decision: string;
}

export interface MsgCreateFinalDelegationDecisionResponse {
  id: number;
}

export interface MsgUpdateFinalDelegationDecision {
  creator: string;
  id: number;
  delegationRequestLabel: string;
  decision: string;
}

export interface MsgUpdateFinalDelegationDecisionResponse {}

export interface MsgDeleteFinalDelegationDecision {
  creator: string;
  id: number;
}

export interface MsgDeleteFinalDelegationDecisionResponse {}

export interface MsgCreateDelegationRequestLog {
  creator: string;
  transaction: string;
  requestLabel: string;
  details: string;
  function: string;
}

export interface MsgCreateDelegationRequestLogResponse {
  id: number;
}

export interface MsgUpdateDelegationRequestLog {
  creator: string;
  id: number;
  transaction: string;
  requestLabel: string;
  details: string;
  function: string;
}

export interface MsgUpdateDelegationRequestLogResponse {}

export interface MsgDeleteDelegationRequestLog {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationRequestLogResponse {}

export interface MsgCreateCalculationTime {
  creator: string;
  startTimestamp: string;
  endTimestamp: string;
  duration: number;
  requestLabel: string;
}

export interface MsgCreateCalculationTimeResponse {
  id: number;
}

export interface MsgUpdateCalculationTime {
  creator: string;
  id: number;
  startTimestamp: string;
  endTimestamp: string;
  duration: number;
  requestLabel: string;
}

export interface MsgUpdateCalculationTimeResponse {}

export interface MsgDeleteCalculationTime {
  creator: string;
  id: number;
}

export interface MsgDeleteCalculationTimeResponse {}

export interface MsgCalculateRequestDelegationTiming {
  creator: string;
  requestLabel: string;
}

export interface MsgCalculateRequestDelegationTimingResponse {}

export interface MsgAddDelegationDecision {
  creator: string;
  decision: string;
  delegationConditions: DelegationConditions | undefined;
  decisionDomain: string;
  delegationRequestLabel: string;
}

export interface MsgAddDelegationDecisionResponse {}

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
  maxDelegateeNb: 0,
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
    if (message.maxDelegateeNb !== 0) {
      writer.uint32(24).uint64(message.maxDelegateeNb);
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
          message.maxDelegateeNb = longToNumber(reader.uint64() as Long);
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
    if (object.maxDelegateeNb !== undefined && object.maxDelegateeNb !== null) {
      message.maxDelegateeNb = Number(object.maxDelegateeNb);
    } else {
      message.maxDelegateeNb = 0;
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
    message.maxDelegateeNb !== undefined &&
      (obj.maxDelegateeNb = message.maxDelegateeNb);
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
    if (object.maxDelegateeNb !== undefined && object.maxDelegateeNb !== null) {
      message.maxDelegateeNb = object.maxDelegateeNb;
    } else {
      message.maxDelegateeNb = 0;
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
  maxDelegateeNb: 0,
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
    if (message.maxDelegateeNb !== 0) {
      writer.uint32(32).uint64(message.maxDelegateeNb);
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
          message.maxDelegateeNb = longToNumber(reader.uint64() as Long);
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
    if (object.maxDelegateeNb !== undefined && object.maxDelegateeNb !== null) {
      message.maxDelegateeNb = Number(object.maxDelegateeNb);
    } else {
      message.maxDelegateeNb = 0;
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
    message.maxDelegateeNb !== undefined &&
      (obj.maxDelegateeNb = message.maxDelegateeNb);
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
    if (object.maxDelegateeNb !== undefined && object.maxDelegateeNb !== null) {
      message.maxDelegateeNb = object.maxDelegateeNb;
    } else {
      message.maxDelegateeNb = 0;
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
    if (message.delegationRequest !== undefined) {
      DelegationRequest.encode(
        message.delegationRequest,
        writer.uint32(42).fork()
      ).ldelim();
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
          message.delegationRequest = DelegationRequest.decode(
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
      object.delegationRequest !== undefined &&
      object.delegationRequest !== null
    ) {
      message.delegationRequest = DelegationRequest.fromJSON(
        object.delegationRequest
      );
    } else {
      message.delegationRequest = undefined;
    }
    return message;
  },

  toJSON(message: MsgSendRequestDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.delegationRequest !== undefined &&
      (obj.delegationRequest = message.delegationRequest
        ? DelegationRequest.toJSON(message.delegationRequest)
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
      object.delegationRequest !== undefined &&
      object.delegationRequest !== null
    ) {
      message.delegationRequest = DelegationRequest.fromPartial(
        object.delegationRequest
      );
    } else {
      message.delegationRequest = undefined;
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

const baseMsgCreateSelectionCriteria: object = {
  creator: "",
  domainList: "",
  delegatorLocationList: "",
  cost: 0,
  nbDelegations: 0,
};

export const MsgCreateSelectionCriteria = {
  encode(
    message: MsgCreateSelectionCriteria,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.domainList) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.delegatorLocationList) {
      writer.uint32(26).string(v!);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint64(message.cost);
    }
    if (message.nbDelegations !== 0) {
      writer.uint32(40).uint64(message.nbDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSelectionCriteria {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSelectionCriteria,
    } as MsgCreateSelectionCriteria;
    message.domainList = [];
    message.delegatorLocationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.domainList.push(reader.string());
          break;
        case 3:
          message.delegatorLocationList.push(reader.string());
          break;
        case 4:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.nbDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSelectionCriteria {
    const message = {
      ...baseMsgCreateSelectionCriteria,
    } as MsgCreateSelectionCriteria;
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

  toJSON(message: MsgCreateSelectionCriteria): unknown {
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
    object: DeepPartial<MsgCreateSelectionCriteria>
  ): MsgCreateSelectionCriteria {
    const message = {
      ...baseMsgCreateSelectionCriteria,
    } as MsgCreateSelectionCriteria;
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

const baseMsgCreateSelectionCriteriaResponse: object = { id: 0 };

export const MsgCreateSelectionCriteriaResponse = {
  encode(
    message: MsgCreateSelectionCriteriaResponse,
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
  ): MsgCreateSelectionCriteriaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSelectionCriteriaResponse,
    } as MsgCreateSelectionCriteriaResponse;
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

  fromJSON(object: any): MsgCreateSelectionCriteriaResponse {
    const message = {
      ...baseMsgCreateSelectionCriteriaResponse,
    } as MsgCreateSelectionCriteriaResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSelectionCriteriaResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSelectionCriteriaResponse>
  ): MsgCreateSelectionCriteriaResponse {
    const message = {
      ...baseMsgCreateSelectionCriteriaResponse,
    } as MsgCreateSelectionCriteriaResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateSelectionCriteria: object = {
  creator: "",
  id: 0,
  domainList: "",
  delegatorLocationList: "",
  cost: 0,
  nbDelegations: 0,
};

export const MsgUpdateSelectionCriteria = {
  encode(
    message: MsgUpdateSelectionCriteria,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
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
  ): MsgUpdateSelectionCriteria {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSelectionCriteria,
    } as MsgUpdateSelectionCriteria;
    message.domainList = [];
    message.delegatorLocationList = [];
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

  fromJSON(object: any): MsgUpdateSelectionCriteria {
    const message = {
      ...baseMsgUpdateSelectionCriteria,
    } as MsgUpdateSelectionCriteria;
    message.domainList = [];
    message.delegatorLocationList = [];
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

  toJSON(message: MsgUpdateSelectionCriteria): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
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
    object: DeepPartial<MsgUpdateSelectionCriteria>
  ): MsgUpdateSelectionCriteria {
    const message = {
      ...baseMsgUpdateSelectionCriteria,
    } as MsgUpdateSelectionCriteria;
    message.domainList = [];
    message.delegatorLocationList = [];
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

const baseMsgUpdateSelectionCriteriaResponse: object = {};

export const MsgUpdateSelectionCriteriaResponse = {
  encode(
    _: MsgUpdateSelectionCriteriaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSelectionCriteriaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSelectionCriteriaResponse,
    } as MsgUpdateSelectionCriteriaResponse;
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

  fromJSON(_: any): MsgUpdateSelectionCriteriaResponse {
    const message = {
      ...baseMsgUpdateSelectionCriteriaResponse,
    } as MsgUpdateSelectionCriteriaResponse;
    return message;
  },

  toJSON(_: MsgUpdateSelectionCriteriaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSelectionCriteriaResponse>
  ): MsgUpdateSelectionCriteriaResponse {
    const message = {
      ...baseMsgUpdateSelectionCriteriaResponse,
    } as MsgUpdateSelectionCriteriaResponse;
    return message;
  },
};

const baseMsgDeleteSelectionCriteria: object = { creator: "", id: 0 };

export const MsgDeleteSelectionCriteria = {
  encode(
    message: MsgDeleteSelectionCriteria,
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
  ): MsgDeleteSelectionCriteria {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSelectionCriteria,
    } as MsgDeleteSelectionCriteria;
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

  fromJSON(object: any): MsgDeleteSelectionCriteria {
    const message = {
      ...baseMsgDeleteSelectionCriteria,
    } as MsgDeleteSelectionCriteria;
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

  toJSON(message: MsgDeleteSelectionCriteria): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteSelectionCriteria>
  ): MsgDeleteSelectionCriteria {
    const message = {
      ...baseMsgDeleteSelectionCriteria,
    } as MsgDeleteSelectionCriteria;
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

const baseMsgDeleteSelectionCriteriaResponse: object = {};

export const MsgDeleteSelectionCriteriaResponse = {
  encode(
    _: MsgDeleteSelectionCriteriaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSelectionCriteriaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSelectionCriteriaResponse,
    } as MsgDeleteSelectionCriteriaResponse;
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

  fromJSON(_: any): MsgDeleteSelectionCriteriaResponse {
    const message = {
      ...baseMsgDeleteSelectionCriteriaResponse,
    } as MsgDeleteSelectionCriteriaResponse;
    return message;
  },

  toJSON(_: MsgDeleteSelectionCriteriaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSelectionCriteriaResponse>
  ): MsgDeleteSelectionCriteriaResponse {
    const message = {
      ...baseMsgDeleteSelectionCriteriaResponse,
    } as MsgDeleteSelectionCriteriaResponse;
    return message;
  },
};

const baseMsgCheckDelegation: object = {
  creator: "",
  label: "",
  selectionCriteria: "",
};

export const MsgCheckDelegation = {
  encode(
    message: MsgCheckDelegation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.selectionCriteria !== "") {
      writer.uint32(26).string(message.selectionCriteria);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCheckDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCheckDelegation } as MsgCheckDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.selectionCriteria = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCheckDelegation {
    const message = { ...baseMsgCheckDelegation } as MsgCheckDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (
      object.selectionCriteria !== undefined &&
      object.selectionCriteria !== null
    ) {
      message.selectionCriteria = String(object.selectionCriteria);
    } else {
      message.selectionCriteria = "";
    }
    return message;
  },

  toJSON(message: MsgCheckDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.selectionCriteria !== undefined &&
      (obj.selectionCriteria = message.selectionCriteria);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCheckDelegation>): MsgCheckDelegation {
    const message = { ...baseMsgCheckDelegation } as MsgCheckDelegation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (
      object.selectionCriteria !== undefined &&
      object.selectionCriteria !== null
    ) {
      message.selectionCriteria = object.selectionCriteria;
    } else {
      message.selectionCriteria = "";
    }
    return message;
  },
};

const baseMsgCheckDelegationResponse: object = {};

export const MsgCheckDelegationResponse = {
  encode(
    _: MsgCheckDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCheckDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCheckDelegationResponse,
    } as MsgCheckDelegationResponse;
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

  fromJSON(_: any): MsgCheckDelegationResponse {
    const message = {
      ...baseMsgCheckDelegationResponse,
    } as MsgCheckDelegationResponse;
    return message;
  },

  toJSON(_: MsgCheckDelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCheckDelegationResponse>
  ): MsgCheckDelegationResponse {
    const message = {
      ...baseMsgCheckDelegationResponse,
    } as MsgCheckDelegationResponse;
    return message;
  },
};

const baseMsgCreateDelegationRequest: object = {
  creator: "",
  label: "",
  delegationAction: "",
};

export const MsgCreateDelegationRequest = {
  encode(
    message: MsgCreateDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.delegationAction !== "") {
      writer.uint32(26).string(message.delegationAction);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationRequest,
    } as MsgCreateDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.delegationAction = reader.string();
          break;
        case 4:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationRequest {
    const message = {
      ...baseMsgCreateDelegationRequest,
    } as MsgCreateDelegationRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
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

  toJSON(message: MsgCreateDelegationRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.delegationAction !== undefined &&
      (obj.delegationAction = message.delegationAction);
    message.permission !== undefined &&
      (obj.permission = message.permission
        ? Permission.toJSON(message.permission)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationRequest>
  ): MsgCreateDelegationRequest {
    const message = {
      ...baseMsgCreateDelegationRequest,
    } as MsgCreateDelegationRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
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

const baseMsgCreateDelegationRequestResponse: object = { id: 0 };

export const MsgCreateDelegationRequestResponse = {
  encode(
    message: MsgCreateDelegationRequestResponse,
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
  ): MsgCreateDelegationRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationRequestResponse,
    } as MsgCreateDelegationRequestResponse;
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

  fromJSON(object: any): MsgCreateDelegationRequestResponse {
    const message = {
      ...baseMsgCreateDelegationRequestResponse,
    } as MsgCreateDelegationRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationRequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationRequestResponse>
  ): MsgCreateDelegationRequestResponse {
    const message = {
      ...baseMsgCreateDelegationRequestResponse,
    } as MsgCreateDelegationRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationRequest: object = {
  creator: "",
  id: 0,
  label: "",
  delegationAction: "",
};

export const MsgUpdateDelegationRequest = {
  encode(
    message: MsgUpdateDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.delegationAction !== "") {
      writer.uint32(34).string(message.delegationAction);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationRequest,
    } as MsgUpdateDelegationRequest;
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
          message.label = reader.string();
          break;
        case 4:
          message.delegationAction = reader.string();
          break;
        case 5:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationRequest {
    const message = {
      ...baseMsgUpdateDelegationRequest,
    } as MsgUpdateDelegationRequest;
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
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
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

  toJSON(message: MsgUpdateDelegationRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.delegationAction !== undefined &&
      (obj.delegationAction = message.delegationAction);
    message.permission !== undefined &&
      (obj.permission = message.permission
        ? Permission.toJSON(message.permission)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationRequest>
  ): MsgUpdateDelegationRequest {
    const message = {
      ...baseMsgUpdateDelegationRequest,
    } as MsgUpdateDelegationRequest;
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
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
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

const baseMsgUpdateDelegationRequestResponse: object = {};

export const MsgUpdateDelegationRequestResponse = {
  encode(
    _: MsgUpdateDelegationRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationRequestResponse,
    } as MsgUpdateDelegationRequestResponse;
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

  fromJSON(_: any): MsgUpdateDelegationRequestResponse {
    const message = {
      ...baseMsgUpdateDelegationRequestResponse,
    } as MsgUpdateDelegationRequestResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationRequestResponse>
  ): MsgUpdateDelegationRequestResponse {
    const message = {
      ...baseMsgUpdateDelegationRequestResponse,
    } as MsgUpdateDelegationRequestResponse;
    return message;
  },
};

const baseMsgDeleteDelegationRequest: object = { creator: "", id: 0 };

export const MsgDeleteDelegationRequest = {
  encode(
    message: MsgDeleteDelegationRequest,
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
  ): MsgDeleteDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationRequest,
    } as MsgDeleteDelegationRequest;
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

  fromJSON(object: any): MsgDeleteDelegationRequest {
    const message = {
      ...baseMsgDeleteDelegationRequest,
    } as MsgDeleteDelegationRequest;
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

  toJSON(message: MsgDeleteDelegationRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationRequest>
  ): MsgDeleteDelegationRequest {
    const message = {
      ...baseMsgDeleteDelegationRequest,
    } as MsgDeleteDelegationRequest;
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

const baseMsgDeleteDelegationRequestResponse: object = {};

export const MsgDeleteDelegationRequestResponse = {
  encode(
    _: MsgDeleteDelegationRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationRequestResponse,
    } as MsgDeleteDelegationRequestResponse;
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

  fromJSON(_: any): MsgDeleteDelegationRequestResponse {
    const message = {
      ...baseMsgDeleteDelegationRequestResponse,
    } as MsgDeleteDelegationRequestResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationRequestResponse>
  ): MsgDeleteDelegationRequestResponse {
    const message = {
      ...baseMsgDeleteDelegationRequestResponse,
    } as MsgDeleteDelegationRequestResponse;
    return message;
  },
};

const baseMsgCreateFinalDelegationDecision: object = {
  creator: "",
  delegationRequestLabel: "",
  decision: "",
};

export const MsgCreateFinalDelegationDecision = {
  encode(
    message: MsgCreateFinalDelegationDecision,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.delegationRequestLabel !== "") {
      writer.uint32(18).string(message.delegationRequestLabel);
    }
    if (message.decision !== "") {
      writer.uint32(26).string(message.decision);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFinalDelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFinalDelegationDecision,
    } as MsgCreateFinalDelegationDecision;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.delegationRequestLabel = reader.string();
          break;
        case 3:
          message.decision = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFinalDelegationDecision {
    const message = {
      ...baseMsgCreateFinalDelegationDecision,
    } as MsgCreateFinalDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.delegationRequestLabel !== undefined &&
      object.delegationRequestLabel !== null
    ) {
      message.delegationRequestLabel = String(object.delegationRequestLabel);
    } else {
      message.delegationRequestLabel = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    return message;
  },

  toJSON(message: MsgCreateFinalDelegationDecision): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.delegationRequestLabel !== undefined &&
      (obj.delegationRequestLabel = message.delegationRequestLabel);
    message.decision !== undefined && (obj.decision = message.decision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFinalDelegationDecision>
  ): MsgCreateFinalDelegationDecision {
    const message = {
      ...baseMsgCreateFinalDelegationDecision,
    } as MsgCreateFinalDelegationDecision;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.delegationRequestLabel !== undefined &&
      object.delegationRequestLabel !== null
    ) {
      message.delegationRequestLabel = object.delegationRequestLabel;
    } else {
      message.delegationRequestLabel = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    return message;
  },
};

const baseMsgCreateFinalDelegationDecisionResponse: object = { id: 0 };

export const MsgCreateFinalDelegationDecisionResponse = {
  encode(
    message: MsgCreateFinalDelegationDecisionResponse,
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
  ): MsgCreateFinalDelegationDecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFinalDelegationDecisionResponse,
    } as MsgCreateFinalDelegationDecisionResponse;
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

  fromJSON(object: any): MsgCreateFinalDelegationDecisionResponse {
    const message = {
      ...baseMsgCreateFinalDelegationDecisionResponse,
    } as MsgCreateFinalDelegationDecisionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFinalDelegationDecisionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFinalDelegationDecisionResponse>
  ): MsgCreateFinalDelegationDecisionResponse {
    const message = {
      ...baseMsgCreateFinalDelegationDecisionResponse,
    } as MsgCreateFinalDelegationDecisionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateFinalDelegationDecision: object = {
  creator: "",
  id: 0,
  delegationRequestLabel: "",
  decision: "",
};

export const MsgUpdateFinalDelegationDecision = {
  encode(
    message: MsgUpdateFinalDelegationDecision,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.delegationRequestLabel !== "") {
      writer.uint32(26).string(message.delegationRequestLabel);
    }
    if (message.decision !== "") {
      writer.uint32(34).string(message.decision);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateFinalDelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateFinalDelegationDecision,
    } as MsgUpdateFinalDelegationDecision;
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
          message.delegationRequestLabel = reader.string();
          break;
        case 4:
          message.decision = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFinalDelegationDecision {
    const message = {
      ...baseMsgUpdateFinalDelegationDecision,
    } as MsgUpdateFinalDelegationDecision;
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
    if (
      object.delegationRequestLabel !== undefined &&
      object.delegationRequestLabel !== null
    ) {
      message.delegationRequestLabel = String(object.delegationRequestLabel);
    } else {
      message.delegationRequestLabel = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateFinalDelegationDecision): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.delegationRequestLabel !== undefined &&
      (obj.delegationRequestLabel = message.delegationRequestLabel);
    message.decision !== undefined && (obj.decision = message.decision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateFinalDelegationDecision>
  ): MsgUpdateFinalDelegationDecision {
    const message = {
      ...baseMsgUpdateFinalDelegationDecision,
    } as MsgUpdateFinalDelegationDecision;
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
    if (
      object.delegationRequestLabel !== undefined &&
      object.delegationRequestLabel !== null
    ) {
      message.delegationRequestLabel = object.delegationRequestLabel;
    } else {
      message.delegationRequestLabel = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    return message;
  },
};

const baseMsgUpdateFinalDelegationDecisionResponse: object = {};

export const MsgUpdateFinalDelegationDecisionResponse = {
  encode(
    _: MsgUpdateFinalDelegationDecisionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateFinalDelegationDecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateFinalDelegationDecisionResponse,
    } as MsgUpdateFinalDelegationDecisionResponse;
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

  fromJSON(_: any): MsgUpdateFinalDelegationDecisionResponse {
    const message = {
      ...baseMsgUpdateFinalDelegationDecisionResponse,
    } as MsgUpdateFinalDelegationDecisionResponse;
    return message;
  },

  toJSON(_: MsgUpdateFinalDelegationDecisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateFinalDelegationDecisionResponse>
  ): MsgUpdateFinalDelegationDecisionResponse {
    const message = {
      ...baseMsgUpdateFinalDelegationDecisionResponse,
    } as MsgUpdateFinalDelegationDecisionResponse;
    return message;
  },
};

const baseMsgDeleteFinalDelegationDecision: object = { creator: "", id: 0 };

export const MsgDeleteFinalDelegationDecision = {
  encode(
    message: MsgDeleteFinalDelegationDecision,
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
  ): MsgDeleteFinalDelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteFinalDelegationDecision,
    } as MsgDeleteFinalDelegationDecision;
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

  fromJSON(object: any): MsgDeleteFinalDelegationDecision {
    const message = {
      ...baseMsgDeleteFinalDelegationDecision,
    } as MsgDeleteFinalDelegationDecision;
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

  toJSON(message: MsgDeleteFinalDelegationDecision): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteFinalDelegationDecision>
  ): MsgDeleteFinalDelegationDecision {
    const message = {
      ...baseMsgDeleteFinalDelegationDecision,
    } as MsgDeleteFinalDelegationDecision;
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

const baseMsgDeleteFinalDelegationDecisionResponse: object = {};

export const MsgDeleteFinalDelegationDecisionResponse = {
  encode(
    _: MsgDeleteFinalDelegationDecisionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteFinalDelegationDecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteFinalDelegationDecisionResponse,
    } as MsgDeleteFinalDelegationDecisionResponse;
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

  fromJSON(_: any): MsgDeleteFinalDelegationDecisionResponse {
    const message = {
      ...baseMsgDeleteFinalDelegationDecisionResponse,
    } as MsgDeleteFinalDelegationDecisionResponse;
    return message;
  },

  toJSON(_: MsgDeleteFinalDelegationDecisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteFinalDelegationDecisionResponse>
  ): MsgDeleteFinalDelegationDecisionResponse {
    const message = {
      ...baseMsgDeleteFinalDelegationDecisionResponse,
    } as MsgDeleteFinalDelegationDecisionResponse;
    return message;
  },
};

const baseMsgCreateDelegationRequestLog: object = {
  creator: "",
  transaction: "",
  requestLabel: "",
  details: "",
  function: "",
};

export const MsgCreateDelegationRequestLog = {
  encode(
    message: MsgCreateDelegationRequestLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transaction !== "") {
      writer.uint32(18).string(message.transaction);
    }
    if (message.requestLabel !== "") {
      writer.uint32(26).string(message.requestLabel);
    }
    if (message.details !== "") {
      writer.uint32(34).string(message.details);
    }
    if (message.function !== "") {
      writer.uint32(42).string(message.function);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationRequestLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationRequestLog,
    } as MsgCreateDelegationRequestLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transaction = reader.string();
          break;
        case 3:
          message.requestLabel = reader.string();
          break;
        case 4:
          message.details = reader.string();
          break;
        case 5:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationRequestLog {
    const message = {
      ...baseMsgCreateDelegationRequestLog,
    } as MsgCreateDelegationRequestLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = String(object.requestLabel);
    } else {
      message.requestLabel = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationRequestLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.requestLabel !== undefined &&
      (obj.requestLabel = message.requestLabel);
    message.details !== undefined && (obj.details = message.details);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationRequestLog>
  ): MsgCreateDelegationRequestLog {
    const message = {
      ...baseMsgCreateDelegationRequestLog,
    } as MsgCreateDelegationRequestLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = object.requestLabel;
    } else {
      message.requestLabel = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgCreateDelegationRequestLogResponse: object = { id: 0 };

export const MsgCreateDelegationRequestLogResponse = {
  encode(
    message: MsgCreateDelegationRequestLogResponse,
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
  ): MsgCreateDelegationRequestLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationRequestLogResponse,
    } as MsgCreateDelegationRequestLogResponse;
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

  fromJSON(object: any): MsgCreateDelegationRequestLogResponse {
    const message = {
      ...baseMsgCreateDelegationRequestLogResponse,
    } as MsgCreateDelegationRequestLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationRequestLogResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationRequestLogResponse>
  ): MsgCreateDelegationRequestLogResponse {
    const message = {
      ...baseMsgCreateDelegationRequestLogResponse,
    } as MsgCreateDelegationRequestLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationRequestLog: object = {
  creator: "",
  id: 0,
  transaction: "",
  requestLabel: "",
  details: "",
  function: "",
};

export const MsgUpdateDelegationRequestLog = {
  encode(
    message: MsgUpdateDelegationRequestLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.transaction !== "") {
      writer.uint32(26).string(message.transaction);
    }
    if (message.requestLabel !== "") {
      writer.uint32(34).string(message.requestLabel);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    if (message.function !== "") {
      writer.uint32(50).string(message.function);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationRequestLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationRequestLog,
    } as MsgUpdateDelegationRequestLog;
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
          message.transaction = reader.string();
          break;
        case 4:
          message.requestLabel = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        case 6:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationRequestLog {
    const message = {
      ...baseMsgUpdateDelegationRequestLog,
    } as MsgUpdateDelegationRequestLog;
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
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = String(object.requestLabel);
    } else {
      message.requestLabel = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDelegationRequestLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.requestLabel !== undefined &&
      (obj.requestLabel = message.requestLabel);
    message.details !== undefined && (obj.details = message.details);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationRequestLog>
  ): MsgUpdateDelegationRequestLog {
    const message = {
      ...baseMsgUpdateDelegationRequestLog,
    } as MsgUpdateDelegationRequestLog;
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
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = object.requestLabel;
    } else {
      message.requestLabel = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgUpdateDelegationRequestLogResponse: object = {};

export const MsgUpdateDelegationRequestLogResponse = {
  encode(
    _: MsgUpdateDelegationRequestLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationRequestLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationRequestLogResponse,
    } as MsgUpdateDelegationRequestLogResponse;
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

  fromJSON(_: any): MsgUpdateDelegationRequestLogResponse {
    const message = {
      ...baseMsgUpdateDelegationRequestLogResponse,
    } as MsgUpdateDelegationRequestLogResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationRequestLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationRequestLogResponse>
  ): MsgUpdateDelegationRequestLogResponse {
    const message = {
      ...baseMsgUpdateDelegationRequestLogResponse,
    } as MsgUpdateDelegationRequestLogResponse;
    return message;
  },
};

const baseMsgDeleteDelegationRequestLog: object = { creator: "", id: 0 };

export const MsgDeleteDelegationRequestLog = {
  encode(
    message: MsgDeleteDelegationRequestLog,
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
  ): MsgDeleteDelegationRequestLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationRequestLog,
    } as MsgDeleteDelegationRequestLog;
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

  fromJSON(object: any): MsgDeleteDelegationRequestLog {
    const message = {
      ...baseMsgDeleteDelegationRequestLog,
    } as MsgDeleteDelegationRequestLog;
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

  toJSON(message: MsgDeleteDelegationRequestLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationRequestLog>
  ): MsgDeleteDelegationRequestLog {
    const message = {
      ...baseMsgDeleteDelegationRequestLog,
    } as MsgDeleteDelegationRequestLog;
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

const baseMsgDeleteDelegationRequestLogResponse: object = {};

export const MsgDeleteDelegationRequestLogResponse = {
  encode(
    _: MsgDeleteDelegationRequestLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationRequestLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationRequestLogResponse,
    } as MsgDeleteDelegationRequestLogResponse;
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

  fromJSON(_: any): MsgDeleteDelegationRequestLogResponse {
    const message = {
      ...baseMsgDeleteDelegationRequestLogResponse,
    } as MsgDeleteDelegationRequestLogResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationRequestLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationRequestLogResponse>
  ): MsgDeleteDelegationRequestLogResponse {
    const message = {
      ...baseMsgDeleteDelegationRequestLogResponse,
    } as MsgDeleteDelegationRequestLogResponse;
    return message;
  },
};

const baseMsgCreateCalculationTime: object = {
  creator: "",
  startTimestamp: "",
  endTimestamp: "",
  duration: 0,
  requestLabel: "",
};

export const MsgCreateCalculationTime = {
  encode(
    message: MsgCreateCalculationTime,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.startTimestamp !== "") {
      writer.uint32(18).string(message.startTimestamp);
    }
    if (message.endTimestamp !== "") {
      writer.uint32(26).string(message.endTimestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.requestLabel !== "") {
      writer.uint32(42).string(message.requestLabel);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCalculationTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCalculationTime,
    } as MsgCreateCalculationTime;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.startTimestamp = reader.string();
          break;
        case 3:
          message.endTimestamp = reader.string();
          break;
        case 4:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.requestLabel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCalculationTime {
    const message = {
      ...baseMsgCreateCalculationTime,
    } as MsgCreateCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.startTimestamp !== undefined && object.startTimestamp !== null) {
      message.startTimestamp = String(object.startTimestamp);
    } else {
      message.startTimestamp = "";
    }
    if (object.endTimestamp !== undefined && object.endTimestamp !== null) {
      message.endTimestamp = String(object.endTimestamp);
    } else {
      message.endTimestamp = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Number(object.duration);
    } else {
      message.duration = 0;
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = String(object.requestLabel);
    } else {
      message.requestLabel = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCalculationTime): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.duration !== undefined && (obj.duration = message.duration);
    message.requestLabel !== undefined &&
      (obj.requestLabel = message.requestLabel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCalculationTime>
  ): MsgCreateCalculationTime {
    const message = {
      ...baseMsgCreateCalculationTime,
    } as MsgCreateCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.startTimestamp !== undefined && object.startTimestamp !== null) {
      message.startTimestamp = object.startTimestamp;
    } else {
      message.startTimestamp = "";
    }
    if (object.endTimestamp !== undefined && object.endTimestamp !== null) {
      message.endTimestamp = object.endTimestamp;
    } else {
      message.endTimestamp = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = 0;
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = object.requestLabel;
    } else {
      message.requestLabel = "";
    }
    return message;
  },
};

const baseMsgCreateCalculationTimeResponse: object = { id: 0 };

export const MsgCreateCalculationTimeResponse = {
  encode(
    message: MsgCreateCalculationTimeResponse,
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
  ): MsgCreateCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCalculationTimeResponse,
    } as MsgCreateCalculationTimeResponse;
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

  fromJSON(object: any): MsgCreateCalculationTimeResponse {
    const message = {
      ...baseMsgCreateCalculationTimeResponse,
    } as MsgCreateCalculationTimeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCalculationTimeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCalculationTimeResponse>
  ): MsgCreateCalculationTimeResponse {
    const message = {
      ...baseMsgCreateCalculationTimeResponse,
    } as MsgCreateCalculationTimeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCalculationTime: object = {
  creator: "",
  id: 0,
  startTimestamp: "",
  endTimestamp: "",
  duration: 0,
  requestLabel: "",
};

export const MsgUpdateCalculationTime = {
  encode(
    message: MsgUpdateCalculationTime,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.startTimestamp !== "") {
      writer.uint32(26).string(message.startTimestamp);
    }
    if (message.endTimestamp !== "") {
      writer.uint32(34).string(message.endTimestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(40).uint64(message.duration);
    }
    if (message.requestLabel !== "") {
      writer.uint32(50).string(message.requestLabel);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCalculationTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCalculationTime,
    } as MsgUpdateCalculationTime;
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
          message.startTimestamp = reader.string();
          break;
        case 4:
          message.endTimestamp = reader.string();
          break;
        case 5:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.requestLabel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCalculationTime {
    const message = {
      ...baseMsgUpdateCalculationTime,
    } as MsgUpdateCalculationTime;
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
    if (object.startTimestamp !== undefined && object.startTimestamp !== null) {
      message.startTimestamp = String(object.startTimestamp);
    } else {
      message.startTimestamp = "";
    }
    if (object.endTimestamp !== undefined && object.endTimestamp !== null) {
      message.endTimestamp = String(object.endTimestamp);
    } else {
      message.endTimestamp = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Number(object.duration);
    } else {
      message.duration = 0;
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = String(object.requestLabel);
    } else {
      message.requestLabel = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCalculationTime): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.duration !== undefined && (obj.duration = message.duration);
    message.requestLabel !== undefined &&
      (obj.requestLabel = message.requestLabel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCalculationTime>
  ): MsgUpdateCalculationTime {
    const message = {
      ...baseMsgUpdateCalculationTime,
    } as MsgUpdateCalculationTime;
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
    if (object.startTimestamp !== undefined && object.startTimestamp !== null) {
      message.startTimestamp = object.startTimestamp;
    } else {
      message.startTimestamp = "";
    }
    if (object.endTimestamp !== undefined && object.endTimestamp !== null) {
      message.endTimestamp = object.endTimestamp;
    } else {
      message.endTimestamp = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = 0;
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = object.requestLabel;
    } else {
      message.requestLabel = "";
    }
    return message;
  },
};

const baseMsgUpdateCalculationTimeResponse: object = {};

export const MsgUpdateCalculationTimeResponse = {
  encode(
    _: MsgUpdateCalculationTimeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCalculationTimeResponse,
    } as MsgUpdateCalculationTimeResponse;
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

  fromJSON(_: any): MsgUpdateCalculationTimeResponse {
    const message = {
      ...baseMsgUpdateCalculationTimeResponse,
    } as MsgUpdateCalculationTimeResponse;
    return message;
  },

  toJSON(_: MsgUpdateCalculationTimeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCalculationTimeResponse>
  ): MsgUpdateCalculationTimeResponse {
    const message = {
      ...baseMsgUpdateCalculationTimeResponse,
    } as MsgUpdateCalculationTimeResponse;
    return message;
  },
};

const baseMsgDeleteCalculationTime: object = { creator: "", id: 0 };

export const MsgDeleteCalculationTime = {
  encode(
    message: MsgDeleteCalculationTime,
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
  ): MsgDeleteCalculationTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCalculationTime,
    } as MsgDeleteCalculationTime;
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

  fromJSON(object: any): MsgDeleteCalculationTime {
    const message = {
      ...baseMsgDeleteCalculationTime,
    } as MsgDeleteCalculationTime;
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

  toJSON(message: MsgDeleteCalculationTime): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCalculationTime>
  ): MsgDeleteCalculationTime {
    const message = {
      ...baseMsgDeleteCalculationTime,
    } as MsgDeleteCalculationTime;
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

const baseMsgDeleteCalculationTimeResponse: object = {};

export const MsgDeleteCalculationTimeResponse = {
  encode(
    _: MsgDeleteCalculationTimeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCalculationTimeResponse,
    } as MsgDeleteCalculationTimeResponse;
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

  fromJSON(_: any): MsgDeleteCalculationTimeResponse {
    const message = {
      ...baseMsgDeleteCalculationTimeResponse,
    } as MsgDeleteCalculationTimeResponse;
    return message;
  },

  toJSON(_: MsgDeleteCalculationTimeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCalculationTimeResponse>
  ): MsgDeleteCalculationTimeResponse {
    const message = {
      ...baseMsgDeleteCalculationTimeResponse,
    } as MsgDeleteCalculationTimeResponse;
    return message;
  },
};

const baseMsgCalculateRequestDelegationTiming: object = {
  creator: "",
  requestLabel: "",
};

export const MsgCalculateRequestDelegationTiming = {
  encode(
    message: MsgCalculateRequestDelegationTiming,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.requestLabel !== "") {
      writer.uint32(18).string(message.requestLabel);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCalculateRequestDelegationTiming {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCalculateRequestDelegationTiming,
    } as MsgCalculateRequestDelegationTiming;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.requestLabel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCalculateRequestDelegationTiming {
    const message = {
      ...baseMsgCalculateRequestDelegationTiming,
    } as MsgCalculateRequestDelegationTiming;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = String(object.requestLabel);
    } else {
      message.requestLabel = "";
    }
    return message;
  },

  toJSON(message: MsgCalculateRequestDelegationTiming): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requestLabel !== undefined &&
      (obj.requestLabel = message.requestLabel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCalculateRequestDelegationTiming>
  ): MsgCalculateRequestDelegationTiming {
    const message = {
      ...baseMsgCalculateRequestDelegationTiming,
    } as MsgCalculateRequestDelegationTiming;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.requestLabel !== undefined && object.requestLabel !== null) {
      message.requestLabel = object.requestLabel;
    } else {
      message.requestLabel = "";
    }
    return message;
  },
};

const baseMsgCalculateRequestDelegationTimingResponse: object = {};

export const MsgCalculateRequestDelegationTimingResponse = {
  encode(
    _: MsgCalculateRequestDelegationTimingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCalculateRequestDelegationTimingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCalculateRequestDelegationTimingResponse,
    } as MsgCalculateRequestDelegationTimingResponse;
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

  fromJSON(_: any): MsgCalculateRequestDelegationTimingResponse {
    const message = {
      ...baseMsgCalculateRequestDelegationTimingResponse,
    } as MsgCalculateRequestDelegationTimingResponse;
    return message;
  },

  toJSON(_: MsgCalculateRequestDelegationTimingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCalculateRequestDelegationTimingResponse>
  ): MsgCalculateRequestDelegationTimingResponse {
    const message = {
      ...baseMsgCalculateRequestDelegationTimingResponse,
    } as MsgCalculateRequestDelegationTimingResponse;
    return message;
  },
};

const baseMsgAddDelegationDecision: object = {
  creator: "",
  decision: "",
  decisionDomain: "",
  delegationRequestLabel: "",
};

export const MsgAddDelegationDecision = {
  encode(
    message: MsgAddDelegationDecision,
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
    if (message.decisionDomain !== "") {
      writer.uint32(34).string(message.decisionDomain);
    }
    if (message.delegationRequestLabel !== "") {
      writer.uint32(42).string(message.delegationRequestLabel);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddDelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddDelegationDecision,
    } as MsgAddDelegationDecision;
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
        case 4:
          message.decisionDomain = reader.string();
          break;
        case 5:
          message.delegationRequestLabel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddDelegationDecision {
    const message = {
      ...baseMsgAddDelegationDecision,
    } as MsgAddDelegationDecision;
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
    if (object.decisionDomain !== undefined && object.decisionDomain !== null) {
      message.decisionDomain = String(object.decisionDomain);
    } else {
      message.decisionDomain = "";
    }
    if (
      object.delegationRequestLabel !== undefined &&
      object.delegationRequestLabel !== null
    ) {
      message.delegationRequestLabel = String(object.delegationRequestLabel);
    } else {
      message.delegationRequestLabel = "";
    }
    return message;
  },

  toJSON(message: MsgAddDelegationDecision): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.decision !== undefined && (obj.decision = message.decision);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    message.decisionDomain !== undefined &&
      (obj.decisionDomain = message.decisionDomain);
    message.delegationRequestLabel !== undefined &&
      (obj.delegationRequestLabel = message.delegationRequestLabel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddDelegationDecision>
  ): MsgAddDelegationDecision {
    const message = {
      ...baseMsgAddDelegationDecision,
    } as MsgAddDelegationDecision;
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
    if (object.decisionDomain !== undefined && object.decisionDomain !== null) {
      message.decisionDomain = object.decisionDomain;
    } else {
      message.decisionDomain = "";
    }
    if (
      object.delegationRequestLabel !== undefined &&
      object.delegationRequestLabel !== null
    ) {
      message.delegationRequestLabel = object.delegationRequestLabel;
    } else {
      message.delegationRequestLabel = "";
    }
    return message;
  },
};

const baseMsgAddDelegationDecisionResponse: object = {};

export const MsgAddDelegationDecisionResponse = {
  encode(
    _: MsgAddDelegationDecisionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddDelegationDecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddDelegationDecisionResponse,
    } as MsgAddDelegationDecisionResponse;
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

  fromJSON(_: any): MsgAddDelegationDecisionResponse {
    const message = {
      ...baseMsgAddDelegationDecisionResponse,
    } as MsgAddDelegationDecisionResponse;
    return message;
  },

  toJSON(_: MsgAddDelegationDecisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddDelegationDecisionResponse>
  ): MsgAddDelegationDecisionResponse {
    const message = {
      ...baseMsgAddDelegationDecisionResponse,
    } as MsgAddDelegationDecisionResponse;
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
  DeleteSelectionPolicy(
    request: MsgDeleteSelectionPolicy
  ): Promise<MsgDeleteSelectionPolicyResponse>;
  CreateSelectionCriteria(
    request: MsgCreateSelectionCriteria
  ): Promise<MsgCreateSelectionCriteriaResponse>;
  UpdateSelectionCriteria(
    request: MsgUpdateSelectionCriteria
  ): Promise<MsgUpdateSelectionCriteriaResponse>;
  DeleteSelectionCriteria(
    request: MsgDeleteSelectionCriteria
  ): Promise<MsgDeleteSelectionCriteriaResponse>;
  CheckDelegation(
    request: MsgCheckDelegation
  ): Promise<MsgCheckDelegationResponse>;
  CreateDelegationRequest(
    request: MsgCreateDelegationRequest
  ): Promise<MsgCreateDelegationRequestResponse>;
  UpdateDelegationRequest(
    request: MsgUpdateDelegationRequest
  ): Promise<MsgUpdateDelegationRequestResponse>;
  DeleteDelegationRequest(
    request: MsgDeleteDelegationRequest
  ): Promise<MsgDeleteDelegationRequestResponse>;
  CreateFinalDelegationDecision(
    request: MsgCreateFinalDelegationDecision
  ): Promise<MsgCreateFinalDelegationDecisionResponse>;
  UpdateFinalDelegationDecision(
    request: MsgUpdateFinalDelegationDecision
  ): Promise<MsgUpdateFinalDelegationDecisionResponse>;
  DeleteFinalDelegationDecision(
    request: MsgDeleteFinalDelegationDecision
  ): Promise<MsgDeleteFinalDelegationDecisionResponse>;
  CreateDelegationRequestLog(
    request: MsgCreateDelegationRequestLog
  ): Promise<MsgCreateDelegationRequestLogResponse>;
  UpdateDelegationRequestLog(
    request: MsgUpdateDelegationRequestLog
  ): Promise<MsgUpdateDelegationRequestLogResponse>;
  DeleteDelegationRequestLog(
    request: MsgDeleteDelegationRequestLog
  ): Promise<MsgDeleteDelegationRequestLogResponse>;
  CreateCalculationTime(
    request: MsgCreateCalculationTime
  ): Promise<MsgCreateCalculationTimeResponse>;
  UpdateCalculationTime(
    request: MsgUpdateCalculationTime
  ): Promise<MsgUpdateCalculationTimeResponse>;
  DeleteCalculationTime(
    request: MsgDeleteCalculationTime
  ): Promise<MsgDeleteCalculationTimeResponse>;
  CalculateRequestDelegationTiming(
    request: MsgCalculateRequestDelegationTiming
  ): Promise<MsgCalculateRequestDelegationTimingResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddDelegationDecision(
    request: MsgAddDelegationDecision
  ): Promise<MsgAddDelegationDecisionResponse>;
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

  CreateSelectionCriteria(
    request: MsgCreateSelectionCriteria
  ): Promise<MsgCreateSelectionCriteriaResponse> {
    const data = MsgCreateSelectionCriteria.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateSelectionCriteria",
      data
    );
    return promise.then((data) =>
      MsgCreateSelectionCriteriaResponse.decode(new Reader(data))
    );
  }

  UpdateSelectionCriteria(
    request: MsgUpdateSelectionCriteria
  ): Promise<MsgUpdateSelectionCriteriaResponse> {
    const data = MsgUpdateSelectionCriteria.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateSelectionCriteria",
      data
    );
    return promise.then((data) =>
      MsgUpdateSelectionCriteriaResponse.decode(new Reader(data))
    );
  }

  DeleteSelectionCriteria(
    request: MsgDeleteSelectionCriteria
  ): Promise<MsgDeleteSelectionCriteriaResponse> {
    const data = MsgDeleteSelectionCriteria.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteSelectionCriteria",
      data
    );
    return promise.then((data) =>
      MsgDeleteSelectionCriteriaResponse.decode(new Reader(data))
    );
  }

  CheckDelegation(
    request: MsgCheckDelegation
  ): Promise<MsgCheckDelegationResponse> {
    const data = MsgCheckDelegation.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CheckDelegation",
      data
    );
    return promise.then((data) =>
      MsgCheckDelegationResponse.decode(new Reader(data))
    );
  }

  CreateDelegationRequest(
    request: MsgCreateDelegationRequest
  ): Promise<MsgCreateDelegationRequestResponse> {
    const data = MsgCreateDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateDelegationRequest",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationRequestResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationRequest(
    request: MsgUpdateDelegationRequest
  ): Promise<MsgUpdateDelegationRequestResponse> {
    const data = MsgUpdateDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateDelegationRequest",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationRequestResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationRequest(
    request: MsgDeleteDelegationRequest
  ): Promise<MsgDeleteDelegationRequestResponse> {
    const data = MsgDeleteDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteDelegationRequest",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationRequestResponse.decode(new Reader(data))
    );
  }

  CreateFinalDelegationDecision(
    request: MsgCreateFinalDelegationDecision
  ): Promise<MsgCreateFinalDelegationDecisionResponse> {
    const data = MsgCreateFinalDelegationDecision.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateFinalDelegationDecision",
      data
    );
    return promise.then((data) =>
      MsgCreateFinalDelegationDecisionResponse.decode(new Reader(data))
    );
  }

  UpdateFinalDelegationDecision(
    request: MsgUpdateFinalDelegationDecision
  ): Promise<MsgUpdateFinalDelegationDecisionResponse> {
    const data = MsgUpdateFinalDelegationDecision.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateFinalDelegationDecision",
      data
    );
    return promise.then((data) =>
      MsgUpdateFinalDelegationDecisionResponse.decode(new Reader(data))
    );
  }

  DeleteFinalDelegationDecision(
    request: MsgDeleteFinalDelegationDecision
  ): Promise<MsgDeleteFinalDelegationDecisionResponse> {
    const data = MsgDeleteFinalDelegationDecision.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteFinalDelegationDecision",
      data
    );
    return promise.then((data) =>
      MsgDeleteFinalDelegationDecisionResponse.decode(new Reader(data))
    );
  }

  CreateDelegationRequestLog(
    request: MsgCreateDelegationRequestLog
  ): Promise<MsgCreateDelegationRequestLogResponse> {
    const data = MsgCreateDelegationRequestLog.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateDelegationRequestLog",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationRequestLogResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationRequestLog(
    request: MsgUpdateDelegationRequestLog
  ): Promise<MsgUpdateDelegationRequestLogResponse> {
    const data = MsgUpdateDelegationRequestLog.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateDelegationRequestLog",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationRequestLogResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationRequestLog(
    request: MsgDeleteDelegationRequestLog
  ): Promise<MsgDeleteDelegationRequestLogResponse> {
    const data = MsgDeleteDelegationRequestLog.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteDelegationRequestLog",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationRequestLogResponse.decode(new Reader(data))
    );
  }

  CreateCalculationTime(
    request: MsgCreateCalculationTime
  ): Promise<MsgCreateCalculationTimeResponse> {
    const data = MsgCreateCalculationTime.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CreateCalculationTime",
      data
    );
    return promise.then((data) =>
      MsgCreateCalculationTimeResponse.decode(new Reader(data))
    );
  }

  UpdateCalculationTime(
    request: MsgUpdateCalculationTime
  ): Promise<MsgUpdateCalculationTimeResponse> {
    const data = MsgUpdateCalculationTime.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "UpdateCalculationTime",
      data
    );
    return promise.then((data) =>
      MsgUpdateCalculationTimeResponse.decode(new Reader(data))
    );
  }

  DeleteCalculationTime(
    request: MsgDeleteCalculationTime
  ): Promise<MsgDeleteCalculationTimeResponse> {
    const data = MsgDeleteCalculationTime.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "DeleteCalculationTime",
      data
    );
    return promise.then((data) =>
      MsgDeleteCalculationTimeResponse.decode(new Reader(data))
    );
  }

  CalculateRequestDelegationTiming(
    request: MsgCalculateRequestDelegationTiming
  ): Promise<MsgCalculateRequestDelegationTimingResponse> {
    const data = MsgCalculateRequestDelegationTiming.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "CalculateRequestDelegationTiming",
      data
    );
    return promise.then((data) =>
      MsgCalculateRequestDelegationTimingResponse.decode(new Reader(data))
    );
  }

  AddDelegationDecision(
    request: MsgAddDelegationDecision
  ): Promise<MsgAddDelegationDecisionResponse> {
    const data = MsgAddDelegationDecision.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Msg",
      "AddDelegationDecision",
      data
    );
    return promise.then((data) =>
      MsgAddDelegationDecisionResponse.decode(new Reader(data))
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
