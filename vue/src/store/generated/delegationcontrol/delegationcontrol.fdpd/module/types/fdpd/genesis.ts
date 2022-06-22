/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../fdpd/params";
import { LocalDomain } from "../fdpd/local_domain";
import { Domain } from "../fdpd/domain";
import { ForwardPolicy } from "../fdpd/forward_policy";
import { Validity } from "../fdpd/validity";
import { DecisionPolicy } from "../fdpd/decision_policy";
import { Permission } from "../fdpd/permission";
import { DelegationConditions } from "../fdpd/delegation_conditions";
import { DelegationDecision } from "../fdpd/delegation_decision";
import { SelectionPolicy } from "../fdpd/selection_policy";
import { SelectionCriteria } from "../fdpd/selection_criteria";
import { DelegationRequest } from "../fdpd/delegation_request";
import { FinalDelegationDecision } from "../fdpd/final_delegation_decision";

export const protobufPackage = "delegationcontrol.fdpd";

/** GenesisState defines the fdpd module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  localDomain: LocalDomain | undefined;
  domainList: Domain[];
  domainCount: number;
  forwardPolicy: ForwardPolicy | undefined;
  validityList: Validity[];
  validityCount: number;
  decisionPolicy: DecisionPolicy | undefined;
  permissionList: Permission[];
  permissionCount: number;
  delegationConditionsList: DelegationConditions[];
  delegationConditionsCount: number;
  delegationDecisionList: DelegationDecision[];
  delegationDecisionCount: number;
  selectionPolicy: SelectionPolicy | undefined;
  selectionCriteriaList: SelectionCriteria[];
  selectionCriteriaCount: number;
  delegationRequestList: DelegationRequest[];
  delegationRequestCount: number;
  finalDelegationDecisionList: FinalDelegationDecision[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  finalDelegationDecisionCount: number;
}

const baseGenesisState: object = {
  port_id: "",
  domainCount: 0,
  validityCount: 0,
  permissionCount: 0,
  delegationConditionsCount: 0,
  delegationDecisionCount: 0,
  selectionCriteriaCount: 0,
  delegationRequestCount: 0,
  finalDelegationDecisionCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    if (message.localDomain !== undefined) {
      LocalDomain.encode(
        message.localDomain,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.domainList) {
      Domain.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.domainCount !== 0) {
      writer.uint32(40).uint64(message.domainCount);
    }
    if (message.forwardPolicy !== undefined) {
      ForwardPolicy.encode(
        message.forwardPolicy,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.validityList) {
      Validity.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.validityCount !== 0) {
      writer.uint32(64).uint64(message.validityCount);
    }
    if (message.decisionPolicy !== undefined) {
      DecisionPolicy.encode(
        message.decisionPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.permissionList) {
      Permission.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.permissionCount !== 0) {
      writer.uint32(88).uint64(message.permissionCount);
    }
    for (const v of message.delegationConditionsList) {
      DelegationConditions.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.delegationConditionsCount !== 0) {
      writer.uint32(104).uint64(message.delegationConditionsCount);
    }
    for (const v of message.delegationDecisionList) {
      DelegationDecision.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.delegationDecisionCount !== 0) {
      writer.uint32(120).uint64(message.delegationDecisionCount);
    }
    if (message.selectionPolicy !== undefined) {
      SelectionPolicy.encode(
        message.selectionPolicy,
        writer.uint32(130).fork()
      ).ldelim();
    }
    for (const v of message.selectionCriteriaList) {
      SelectionCriteria.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.selectionCriteriaCount !== 0) {
      writer.uint32(144).uint64(message.selectionCriteriaCount);
    }
    for (const v of message.delegationRequestList) {
      DelegationRequest.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.delegationRequestCount !== 0) {
      writer.uint32(160).uint64(message.delegationRequestCount);
    }
    for (const v of message.finalDelegationDecisionList) {
      FinalDelegationDecision.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.finalDelegationDecisionCount !== 0) {
      writer.uint32(176).uint64(message.finalDelegationDecisionCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.domainList = [];
    message.validityList = [];
    message.permissionList = [];
    message.delegationConditionsList = [];
    message.delegationDecisionList = [];
    message.selectionCriteriaList = [];
    message.delegationRequestList = [];
    message.finalDelegationDecisionList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.localDomain = LocalDomain.decode(reader, reader.uint32());
          break;
        case 4:
          message.domainList.push(Domain.decode(reader, reader.uint32()));
          break;
        case 5:
          message.domainCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.forwardPolicy = ForwardPolicy.decode(reader, reader.uint32());
          break;
        case 7:
          message.validityList.push(Validity.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validityCount = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.decisionPolicy = DecisionPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.permissionList.push(
            Permission.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.permissionCount = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.delegationConditionsList.push(
            DelegationConditions.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.delegationConditionsCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 14:
          message.delegationDecisionList.push(
            DelegationDecision.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.delegationDecisionCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 16:
          message.selectionPolicy = SelectionPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.selectionCriteriaList.push(
            SelectionCriteria.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.selectionCriteriaCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 19:
          message.delegationRequestList.push(
            DelegationRequest.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.delegationRequestCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 21:
          message.finalDelegationDecisionList.push(
            FinalDelegationDecision.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.finalDelegationDecisionCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.domainList = [];
    message.validityList = [];
    message.permissionList = [];
    message.delegationConditionsList = [];
    message.delegationDecisionList = [];
    message.selectionCriteriaList = [];
    message.delegationRequestList = [];
    message.finalDelegationDecisionList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.localDomain !== undefined && object.localDomain !== null) {
      message.localDomain = LocalDomain.fromJSON(object.localDomain);
    } else {
      message.localDomain = undefined;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(Domain.fromJSON(e));
      }
    }
    if (object.domainCount !== undefined && object.domainCount !== null) {
      message.domainCount = Number(object.domainCount);
    } else {
      message.domainCount = 0;
    }
    if (object.forwardPolicy !== undefined && object.forwardPolicy !== null) {
      message.forwardPolicy = ForwardPolicy.fromJSON(object.forwardPolicy);
    } else {
      message.forwardPolicy = undefined;
    }
    if (object.validityList !== undefined && object.validityList !== null) {
      for (const e of object.validityList) {
        message.validityList.push(Validity.fromJSON(e));
      }
    }
    if (object.validityCount !== undefined && object.validityCount !== null) {
      message.validityCount = Number(object.validityCount);
    } else {
      message.validityCount = 0;
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = DecisionPolicy.fromJSON(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(Permission.fromJSON(e));
      }
    }
    if (
      object.permissionCount !== undefined &&
      object.permissionCount !== null
    ) {
      message.permissionCount = Number(object.permissionCount);
    } else {
      message.permissionCount = 0;
    }
    if (
      object.delegationConditionsList !== undefined &&
      object.delegationConditionsList !== null
    ) {
      for (const e of object.delegationConditionsList) {
        message.delegationConditionsList.push(DelegationConditions.fromJSON(e));
      }
    }
    if (
      object.delegationConditionsCount !== undefined &&
      object.delegationConditionsCount !== null
    ) {
      message.delegationConditionsCount = Number(
        object.delegationConditionsCount
      );
    } else {
      message.delegationConditionsCount = 0;
    }
    if (
      object.delegationDecisionList !== undefined &&
      object.delegationDecisionList !== null
    ) {
      for (const e of object.delegationDecisionList) {
        message.delegationDecisionList.push(DelegationDecision.fromJSON(e));
      }
    }
    if (
      object.delegationDecisionCount !== undefined &&
      object.delegationDecisionCount !== null
    ) {
      message.delegationDecisionCount = Number(object.delegationDecisionCount);
    } else {
      message.delegationDecisionCount = 0;
    }
    if (
      object.selectionPolicy !== undefined &&
      object.selectionPolicy !== null
    ) {
      message.selectionPolicy = SelectionPolicy.fromJSON(
        object.selectionPolicy
      );
    } else {
      message.selectionPolicy = undefined;
    }
    if (
      object.selectionCriteriaList !== undefined &&
      object.selectionCriteriaList !== null
    ) {
      for (const e of object.selectionCriteriaList) {
        message.selectionCriteriaList.push(SelectionCriteria.fromJSON(e));
      }
    }
    if (
      object.selectionCriteriaCount !== undefined &&
      object.selectionCriteriaCount !== null
    ) {
      message.selectionCriteriaCount = Number(object.selectionCriteriaCount);
    } else {
      message.selectionCriteriaCount = 0;
    }
    if (
      object.delegationRequestList !== undefined &&
      object.delegationRequestList !== null
    ) {
      for (const e of object.delegationRequestList) {
        message.delegationRequestList.push(DelegationRequest.fromJSON(e));
      }
    }
    if (
      object.delegationRequestCount !== undefined &&
      object.delegationRequestCount !== null
    ) {
      message.delegationRequestCount = Number(object.delegationRequestCount);
    } else {
      message.delegationRequestCount = 0;
    }
    if (
      object.finalDelegationDecisionList !== undefined &&
      object.finalDelegationDecisionList !== null
    ) {
      for (const e of object.finalDelegationDecisionList) {
        message.finalDelegationDecisionList.push(
          FinalDelegationDecision.fromJSON(e)
        );
      }
    }
    if (
      object.finalDelegationDecisionCount !== undefined &&
      object.finalDelegationDecisionCount !== null
    ) {
      message.finalDelegationDecisionCount = Number(
        object.finalDelegationDecisionCount
      );
    } else {
      message.finalDelegationDecisionCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.localDomain !== undefined &&
      (obj.localDomain = message.localDomain
        ? LocalDomain.toJSON(message.localDomain)
        : undefined);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) =>
        e ? Domain.toJSON(e) : undefined
      );
    } else {
      obj.domainList = [];
    }
    message.domainCount !== undefined &&
      (obj.domainCount = message.domainCount);
    message.forwardPolicy !== undefined &&
      (obj.forwardPolicy = message.forwardPolicy
        ? ForwardPolicy.toJSON(message.forwardPolicy)
        : undefined);
    if (message.validityList) {
      obj.validityList = message.validityList.map((e) =>
        e ? Validity.toJSON(e) : undefined
      );
    } else {
      obj.validityList = [];
    }
    message.validityCount !== undefined &&
      (obj.validityCount = message.validityCount);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? DecisionPolicy.toJSON(message.decisionPolicy)
        : undefined);
    if (message.permissionList) {
      obj.permissionList = message.permissionList.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissionList = [];
    }
    message.permissionCount !== undefined &&
      (obj.permissionCount = message.permissionCount);
    if (message.delegationConditionsList) {
      obj.delegationConditionsList = message.delegationConditionsList.map((e) =>
        e ? DelegationConditions.toJSON(e) : undefined
      );
    } else {
      obj.delegationConditionsList = [];
    }
    message.delegationConditionsCount !== undefined &&
      (obj.delegationConditionsCount = message.delegationConditionsCount);
    if (message.delegationDecisionList) {
      obj.delegationDecisionList = message.delegationDecisionList.map((e) =>
        e ? DelegationDecision.toJSON(e) : undefined
      );
    } else {
      obj.delegationDecisionList = [];
    }
    message.delegationDecisionCount !== undefined &&
      (obj.delegationDecisionCount = message.delegationDecisionCount);
    message.selectionPolicy !== undefined &&
      (obj.selectionPolicy = message.selectionPolicy
        ? SelectionPolicy.toJSON(message.selectionPolicy)
        : undefined);
    if (message.selectionCriteriaList) {
      obj.selectionCriteriaList = message.selectionCriteriaList.map((e) =>
        e ? SelectionCriteria.toJSON(e) : undefined
      );
    } else {
      obj.selectionCriteriaList = [];
    }
    message.selectionCriteriaCount !== undefined &&
      (obj.selectionCriteriaCount = message.selectionCriteriaCount);
    if (message.delegationRequestList) {
      obj.delegationRequestList = message.delegationRequestList.map((e) =>
        e ? DelegationRequest.toJSON(e) : undefined
      );
    } else {
      obj.delegationRequestList = [];
    }
    message.delegationRequestCount !== undefined &&
      (obj.delegationRequestCount = message.delegationRequestCount);
    if (message.finalDelegationDecisionList) {
      obj.finalDelegationDecisionList = message.finalDelegationDecisionList.map(
        (e) => (e ? FinalDelegationDecision.toJSON(e) : undefined)
      );
    } else {
      obj.finalDelegationDecisionList = [];
    }
    message.finalDelegationDecisionCount !== undefined &&
      (obj.finalDelegationDecisionCount = message.finalDelegationDecisionCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.domainList = [];
    message.validityList = [];
    message.permissionList = [];
    message.delegationConditionsList = [];
    message.delegationDecisionList = [];
    message.selectionCriteriaList = [];
    message.delegationRequestList = [];
    message.finalDelegationDecisionList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.localDomain !== undefined && object.localDomain !== null) {
      message.localDomain = LocalDomain.fromPartial(object.localDomain);
    } else {
      message.localDomain = undefined;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(Domain.fromPartial(e));
      }
    }
    if (object.domainCount !== undefined && object.domainCount !== null) {
      message.domainCount = object.domainCount;
    } else {
      message.domainCount = 0;
    }
    if (object.forwardPolicy !== undefined && object.forwardPolicy !== null) {
      message.forwardPolicy = ForwardPolicy.fromPartial(object.forwardPolicy);
    } else {
      message.forwardPolicy = undefined;
    }
    if (object.validityList !== undefined && object.validityList !== null) {
      for (const e of object.validityList) {
        message.validityList.push(Validity.fromPartial(e));
      }
    }
    if (object.validityCount !== undefined && object.validityCount !== null) {
      message.validityCount = object.validityCount;
    } else {
      message.validityCount = 0;
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = DecisionPolicy.fromPartial(
        object.decisionPolicy
      );
    } else {
      message.decisionPolicy = undefined;
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(Permission.fromPartial(e));
      }
    }
    if (
      object.permissionCount !== undefined &&
      object.permissionCount !== null
    ) {
      message.permissionCount = object.permissionCount;
    } else {
      message.permissionCount = 0;
    }
    if (
      object.delegationConditionsList !== undefined &&
      object.delegationConditionsList !== null
    ) {
      for (const e of object.delegationConditionsList) {
        message.delegationConditionsList.push(
          DelegationConditions.fromPartial(e)
        );
      }
    }
    if (
      object.delegationConditionsCount !== undefined &&
      object.delegationConditionsCount !== null
    ) {
      message.delegationConditionsCount = object.delegationConditionsCount;
    } else {
      message.delegationConditionsCount = 0;
    }
    if (
      object.delegationDecisionList !== undefined &&
      object.delegationDecisionList !== null
    ) {
      for (const e of object.delegationDecisionList) {
        message.delegationDecisionList.push(DelegationDecision.fromPartial(e));
      }
    }
    if (
      object.delegationDecisionCount !== undefined &&
      object.delegationDecisionCount !== null
    ) {
      message.delegationDecisionCount = object.delegationDecisionCount;
    } else {
      message.delegationDecisionCount = 0;
    }
    if (
      object.selectionPolicy !== undefined &&
      object.selectionPolicy !== null
    ) {
      message.selectionPolicy = SelectionPolicy.fromPartial(
        object.selectionPolicy
      );
    } else {
      message.selectionPolicy = undefined;
    }
    if (
      object.selectionCriteriaList !== undefined &&
      object.selectionCriteriaList !== null
    ) {
      for (const e of object.selectionCriteriaList) {
        message.selectionCriteriaList.push(SelectionCriteria.fromPartial(e));
      }
    }
    if (
      object.selectionCriteriaCount !== undefined &&
      object.selectionCriteriaCount !== null
    ) {
      message.selectionCriteriaCount = object.selectionCriteriaCount;
    } else {
      message.selectionCriteriaCount = 0;
    }
    if (
      object.delegationRequestList !== undefined &&
      object.delegationRequestList !== null
    ) {
      for (const e of object.delegationRequestList) {
        message.delegationRequestList.push(DelegationRequest.fromPartial(e));
      }
    }
    if (
      object.delegationRequestCount !== undefined &&
      object.delegationRequestCount !== null
    ) {
      message.delegationRequestCount = object.delegationRequestCount;
    } else {
      message.delegationRequestCount = 0;
    }
    if (
      object.finalDelegationDecisionList !== undefined &&
      object.finalDelegationDecisionList !== null
    ) {
      for (const e of object.finalDelegationDecisionList) {
        message.finalDelegationDecisionList.push(
          FinalDelegationDecision.fromPartial(e)
        );
      }
    }
    if (
      object.finalDelegationDecisionCount !== undefined &&
      object.finalDelegationDecisionCount !== null
    ) {
      message.finalDelegationDecisionCount =
        object.finalDelegationDecisionCount;
    } else {
      message.finalDelegationDecisionCount = 0;
    }
    return message;
  },
};

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
