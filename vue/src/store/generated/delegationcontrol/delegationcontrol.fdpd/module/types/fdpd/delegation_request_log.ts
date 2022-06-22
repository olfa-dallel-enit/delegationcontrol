/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "delegationcontrol.fdpd";

export interface DelegationRequestLog {
  id: number;
  transaction: string;
  requestLabel: string;
  details: string;
  function: string;
  creator: string;
}

const baseDelegationRequestLog: object = {
  id: 0,
  transaction: "",
  requestLabel: "",
  details: "",
  function: "",
  creator: "",
};

export const DelegationRequestLog = {
  encode(
    message: DelegationRequestLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationRequestLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationRequestLog } as DelegationRequestLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): DelegationRequestLog {
    const message = { ...baseDelegationRequestLog } as DelegationRequestLog;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DelegationRequestLog): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.requestLabel !== undefined &&
      (obj.requestLabel = message.requestLabel);
    message.details !== undefined && (obj.details = message.details);
    message.function !== undefined && (obj.function = message.function);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationRequestLog>): DelegationRequestLog {
    const message = { ...baseDelegationRequestLog } as DelegationRequestLog;
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
