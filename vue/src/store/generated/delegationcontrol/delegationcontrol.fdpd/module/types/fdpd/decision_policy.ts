/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validity } from "../fdpd/validity";

export const protobufPackage = "delegationcontrol.fdpd";

export interface DecisionPolicy {
  domainList: string[];
  locationList: string[];
  cost: number;
  maxDelegations: number;
  validity: Validity | undefined;
  creator: string;
}

const baseDecisionPolicy: object = {
  domainList: "",
  locationList: "",
  cost: 0,
  maxDelegations: 0,
  creator: "",
};

export const DecisionPolicy = {
  encode(message: DecisionPolicy, writer: Writer = Writer.create()): Writer {
    for (const v of message.domainList) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(18).string(v!);
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
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecisionPolicy } as DecisionPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainList.push(reader.string());
          break;
        case 2:
          message.locationList.push(reader.string());
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
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecisionPolicy {
    const message = { ...baseDecisionPolicy } as DecisionPolicy;
    message.domainList = [];
    message.locationList = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DecisionPolicy): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<DecisionPolicy>): DecisionPolicy {
    const message = { ...baseDecisionPolicy } as DecisionPolicy;
    message.domainList = [];
    message.locationList = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
