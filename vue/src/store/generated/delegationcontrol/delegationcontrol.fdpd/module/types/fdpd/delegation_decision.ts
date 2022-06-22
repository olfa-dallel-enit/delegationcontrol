/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { DelegationConditions } from "../fdpd/delegation_conditions";

export const protobufPackage = "delegationcontrol.fdpd";

export interface DelegationDecision {
  id: number;
  decision: string;
  delegationConditions: DelegationConditions | undefined;
  creator: string;
  decisionDomain: string;
}

const baseDelegationDecision: object = {
  id: 0,
  decision: "",
  creator: "",
  decisionDomain: "",
};

export const DelegationDecision = {
  encode(
    message: DelegationDecision,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.decisionDomain !== "") {
      writer.uint32(42).string(message.decisionDomain);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationDecision {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationDecision } as DelegationDecision;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
          message.creator = reader.string();
          break;
        case 5:
          message.decisionDomain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationDecision {
    const message = { ...baseDelegationDecision } as DelegationDecision;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.decisionDomain !== undefined && object.decisionDomain !== null) {
      message.decisionDomain = String(object.decisionDomain);
    } else {
      message.decisionDomain = "";
    }
    return message;
  },

  toJSON(message: DelegationDecision): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.decision !== undefined && (obj.decision = message.decision);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    message.decisionDomain !== undefined &&
      (obj.decisionDomain = message.decisionDomain);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationDecision>): DelegationDecision {
    const message = { ...baseDelegationDecision } as DelegationDecision;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.decisionDomain !== undefined && object.decisionDomain !== null) {
      message.decisionDomain = object.decisionDomain;
    } else {
      message.decisionDomain = "";
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
