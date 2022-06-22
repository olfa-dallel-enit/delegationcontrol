/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validity } from "../fdpd/validity";

export const protobufPackage = "delegationcontrol.fdpd";

export interface SelectionCriteria {
  id: number;
  domainList: string[];
  delegatorLocationList: string[];
  cost: number;
  nbDelegations: number;
  validity: Validity | undefined;
  creator: string;
}

const baseSelectionCriteria: object = {
  id: 0,
  domainList: "",
  delegatorLocationList: "",
  cost: 0,
  nbDelegations: 0,
  creator: "",
};

export const SelectionCriteria = {
  encode(message: SelectionCriteria, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SelectionCriteria {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSelectionCriteria } as SelectionCriteria;
    message.domainList = [];
    message.delegatorLocationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SelectionCriteria {
    const message = { ...baseSelectionCriteria } as SelectionCriteria;
    message.domainList = [];
    message.delegatorLocationList = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: SelectionCriteria): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<SelectionCriteria>): SelectionCriteria {
    const message = { ...baseSelectionCriteria } as SelectionCriteria;
    message.domainList = [];
    message.delegatorLocationList = [];
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
