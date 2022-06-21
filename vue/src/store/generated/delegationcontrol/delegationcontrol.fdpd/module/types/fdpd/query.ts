/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../fdpd/params";
import { LocalDomain } from "../fdpd/local_domain";
import { Domain } from "../fdpd/domain";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { ForwardPolicy } from "../fdpd/forward_policy";
import { Validity } from "../fdpd/validity";
import { DecisionPolicy } from "../fdpd/decision_policy";
import { Permission } from "../fdpd/permission";
import { DelegationConditions } from "../fdpd/delegation_conditions";

export const protobufPackage = "delegationcontrol.fdpd";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetLocalDomainRequest {}

export interface QueryGetLocalDomainResponse {
  LocalDomain: LocalDomain | undefined;
}

export interface QueryGetDomainRequest {
  id: number;
}

export interface QueryGetDomainResponse {
  Domain: Domain | undefined;
}

export interface QueryAllDomainRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDomainResponse {
  Domain: Domain[];
  pagination: PageResponse | undefined;
}

export interface QueryGetForwardPolicyRequest {}

export interface QueryGetForwardPolicyResponse {
  ForwardPolicy: ForwardPolicy | undefined;
}

export interface QueryGetValidityRequest {
  id: number;
}

export interface QueryGetValidityResponse {
  Validity: Validity | undefined;
}

export interface QueryAllValidityRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllValidityResponse {
  Validity: Validity[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDecisionPolicyRequest {}

export interface QueryGetDecisionPolicyResponse {
  DecisionPolicy: DecisionPolicy | undefined;
}

export interface QueryGetPermissionRequest {
  id: number;
}

export interface QueryGetPermissionResponse {
  Permission: Permission | undefined;
}

export interface QueryAllPermissionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPermissionResponse {
  Permission: Permission[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDelegationConditionsRequest {
  id: number;
}

export interface QueryGetDelegationConditionsResponse {
  DelegationConditions: DelegationConditions | undefined;
}

export interface QueryAllDelegationConditionsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDelegationConditionsResponse {
  DelegationConditions: DelegationConditions[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetLocalDomainRequest: object = {};

export const QueryGetLocalDomainRequest = {
  encode(
    _: QueryGetLocalDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocalDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocalDomainRequest,
    } as QueryGetLocalDomainRequest;
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

  fromJSON(_: any): QueryGetLocalDomainRequest {
    const message = {
      ...baseQueryGetLocalDomainRequest,
    } as QueryGetLocalDomainRequest;
    return message;
  },

  toJSON(_: QueryGetLocalDomainRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetLocalDomainRequest>
  ): QueryGetLocalDomainRequest {
    const message = {
      ...baseQueryGetLocalDomainRequest,
    } as QueryGetLocalDomainRequest;
    return message;
  },
};

const baseQueryGetLocalDomainResponse: object = {};

export const QueryGetLocalDomainResponse = {
  encode(
    message: QueryGetLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.LocalDomain !== undefined) {
      LocalDomain.encode(
        message.LocalDomain,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocalDomainResponse,
    } as QueryGetLocalDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LocalDomain = LocalDomain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLocalDomainResponse {
    const message = {
      ...baseQueryGetLocalDomainResponse,
    } as QueryGetLocalDomainResponse;
    if (object.LocalDomain !== undefined && object.LocalDomain !== null) {
      message.LocalDomain = LocalDomain.fromJSON(object.LocalDomain);
    } else {
      message.LocalDomain = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLocalDomainResponse): unknown {
    const obj: any = {};
    message.LocalDomain !== undefined &&
      (obj.LocalDomain = message.LocalDomain
        ? LocalDomain.toJSON(message.LocalDomain)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLocalDomainResponse>
  ): QueryGetLocalDomainResponse {
    const message = {
      ...baseQueryGetLocalDomainResponse,
    } as QueryGetLocalDomainResponse;
    if (object.LocalDomain !== undefined && object.LocalDomain !== null) {
      message.LocalDomain = LocalDomain.fromPartial(object.LocalDomain);
    } else {
      message.LocalDomain = undefined;
    }
    return message;
  },
};

const baseQueryGetDomainRequest: object = { id: 0 };

export const QueryGetDomainRequest = {
  encode(
    message: QueryGetDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
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

  fromJSON(object: any): QueryGetDomainRequest {
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDomainRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainRequest>
  ): QueryGetDomainRequest {
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDomainResponse: object = {};

export const QueryGetDomainResponse = {
  encode(
    message: QueryGetDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Domain !== undefined) {
      Domain.encode(message.Domain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain = Domain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainResponse {
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    if (object.Domain !== undefined && object.Domain !== null) {
      message.Domain = Domain.fromJSON(object.Domain);
    } else {
      message.Domain = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDomainResponse): unknown {
    const obj: any = {};
    message.Domain !== undefined &&
      (obj.Domain = message.Domain ? Domain.toJSON(message.Domain) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainResponse>
  ): QueryGetDomainResponse {
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    if (object.Domain !== undefined && object.Domain !== null) {
      message.Domain = Domain.fromPartial(object.Domain);
    } else {
      message.Domain = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainRequest: object = {};

export const QueryAllDomainRequest = {
  encode(
    message: QueryAllDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainRequest {
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainRequest>
  ): QueryAllDomainRequest {
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainResponse: object = {};

export const QueryAllDomainResponse = {
  encode(
    message: QueryAllDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Domain) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain.push(Domain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainResponse {
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    if (object.Domain !== undefined && object.Domain !== null) {
      for (const e of object.Domain) {
        message.Domain.push(Domain.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainResponse): unknown {
    const obj: any = {};
    if (message.Domain) {
      obj.Domain = message.Domain.map((e) =>
        e ? Domain.toJSON(e) : undefined
      );
    } else {
      obj.Domain = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainResponse>
  ): QueryAllDomainResponse {
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    if (object.Domain !== undefined && object.Domain !== null) {
      for (const e of object.Domain) {
        message.Domain.push(Domain.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetForwardPolicyRequest: object = {};

export const QueryGetForwardPolicyRequest = {
  encode(
    _: QueryGetForwardPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForwardPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
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

  fromJSON(_: any): QueryGetForwardPolicyRequest {
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
    return message;
  },

  toJSON(_: QueryGetForwardPolicyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetForwardPolicyRequest>
  ): QueryGetForwardPolicyRequest {
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
    return message;
  },
};

const baseQueryGetForwardPolicyResponse: object = {};

export const QueryGetForwardPolicyResponse = {
  encode(
    message: QueryGetForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ForwardPolicy !== undefined) {
      ForwardPolicy.encode(
        message.ForwardPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ForwardPolicy = ForwardPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForwardPolicyResponse {
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      message.ForwardPolicy = ForwardPolicy.fromJSON(object.ForwardPolicy);
    } else {
      message.ForwardPolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetForwardPolicyResponse): unknown {
    const obj: any = {};
    message.ForwardPolicy !== undefined &&
      (obj.ForwardPolicy = message.ForwardPolicy
        ? ForwardPolicy.toJSON(message.ForwardPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetForwardPolicyResponse>
  ): QueryGetForwardPolicyResponse {
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      message.ForwardPolicy = ForwardPolicy.fromPartial(object.ForwardPolicy);
    } else {
      message.ForwardPolicy = undefined;
    }
    return message;
  },
};

const baseQueryGetValidityRequest: object = { id: 0 };

export const QueryGetValidityRequest = {
  encode(
    message: QueryGetValidityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetValidityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
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

  fromJSON(object: any): QueryGetValidityRequest {
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetValidityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidityRequest>
  ): QueryGetValidityRequest {
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetValidityResponse: object = {};

export const QueryGetValidityResponse = {
  encode(
    message: QueryGetValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Validity !== undefined) {
      Validity.encode(message.Validity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidityResponse {
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    if (object.Validity !== undefined && object.Validity !== null) {
      message.Validity = Validity.fromJSON(object.Validity);
    } else {
      message.Validity = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetValidityResponse): unknown {
    const obj: any = {};
    message.Validity !== undefined &&
      (obj.Validity = message.Validity
        ? Validity.toJSON(message.Validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidityResponse>
  ): QueryGetValidityResponse {
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    if (object.Validity !== undefined && object.Validity !== null) {
      message.Validity = Validity.fromPartial(object.Validity);
    } else {
      message.Validity = undefined;
    }
    return message;
  },
};

const baseQueryAllValidityRequest: object = {};

export const QueryAllValidityRequest = {
  encode(
    message: QueryAllValidityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllValidityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidityRequest {
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidityRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidityRequest>
  ): QueryAllValidityRequest {
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllValidityResponse: object = {};

export const QueryAllValidityResponse = {
  encode(
    message: QueryAllValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Validity) {
      Validity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Validity.push(Validity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidityResponse {
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    if (object.Validity !== undefined && object.Validity !== null) {
      for (const e of object.Validity) {
        message.Validity.push(Validity.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidityResponse): unknown {
    const obj: any = {};
    if (message.Validity) {
      obj.Validity = message.Validity.map((e) =>
        e ? Validity.toJSON(e) : undefined
      );
    } else {
      obj.Validity = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidityResponse>
  ): QueryAllValidityResponse {
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    if (object.Validity !== undefined && object.Validity !== null) {
      for (const e of object.Validity) {
        message.Validity.push(Validity.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDecisionPolicyRequest: object = {};

export const QueryGetDecisionPolicyRequest = {
  encode(
    _: QueryGetDecisionPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDecisionPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDecisionPolicyRequest,
    } as QueryGetDecisionPolicyRequest;
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

  fromJSON(_: any): QueryGetDecisionPolicyRequest {
    const message = {
      ...baseQueryGetDecisionPolicyRequest,
    } as QueryGetDecisionPolicyRequest;
    return message;
  },

  toJSON(_: QueryGetDecisionPolicyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetDecisionPolicyRequest>
  ): QueryGetDecisionPolicyRequest {
    const message = {
      ...baseQueryGetDecisionPolicyRequest,
    } as QueryGetDecisionPolicyRequest;
    return message;
  },
};

const baseQueryGetDecisionPolicyResponse: object = {};

export const QueryGetDecisionPolicyResponse = {
  encode(
    message: QueryGetDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DecisionPolicy !== undefined) {
      DecisionPolicy.encode(
        message.DecisionPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDecisionPolicyResponse,
    } as QueryGetDecisionPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DecisionPolicy = DecisionPolicy.decode(
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

  fromJSON(object: any): QueryGetDecisionPolicyResponse {
    const message = {
      ...baseQueryGetDecisionPolicyResponse,
    } as QueryGetDecisionPolicyResponse;
    if (object.DecisionPolicy !== undefined && object.DecisionPolicy !== null) {
      message.DecisionPolicy = DecisionPolicy.fromJSON(object.DecisionPolicy);
    } else {
      message.DecisionPolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDecisionPolicyResponse): unknown {
    const obj: any = {};
    message.DecisionPolicy !== undefined &&
      (obj.DecisionPolicy = message.DecisionPolicy
        ? DecisionPolicy.toJSON(message.DecisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDecisionPolicyResponse>
  ): QueryGetDecisionPolicyResponse {
    const message = {
      ...baseQueryGetDecisionPolicyResponse,
    } as QueryGetDecisionPolicyResponse;
    if (object.DecisionPolicy !== undefined && object.DecisionPolicy !== null) {
      message.DecisionPolicy = DecisionPolicy.fromPartial(
        object.DecisionPolicy
      );
    } else {
      message.DecisionPolicy = undefined;
    }
    return message;
  },
};

const baseQueryGetPermissionRequest: object = { id: 0 };

export const QueryGetPermissionRequest = {
  encode(
    message: QueryGetPermissionRequest,
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
  ): QueryGetPermissionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPermissionRequest,
    } as QueryGetPermissionRequest;
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

  fromJSON(object: any): QueryGetPermissionRequest {
    const message = {
      ...baseQueryGetPermissionRequest,
    } as QueryGetPermissionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPermissionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPermissionRequest>
  ): QueryGetPermissionRequest {
    const message = {
      ...baseQueryGetPermissionRequest,
    } as QueryGetPermissionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPermissionResponse: object = {};

export const QueryGetPermissionResponse = {
  encode(
    message: QueryGetPermissionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Permission !== undefined) {
      Permission.encode(message.Permission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPermissionResponse,
    } as QueryGetPermissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPermissionResponse {
    const message = {
      ...baseQueryGetPermissionResponse,
    } as QueryGetPermissionResponse;
    if (object.Permission !== undefined && object.Permission !== null) {
      message.Permission = Permission.fromJSON(object.Permission);
    } else {
      message.Permission = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPermissionResponse): unknown {
    const obj: any = {};
    message.Permission !== undefined &&
      (obj.Permission = message.Permission
        ? Permission.toJSON(message.Permission)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPermissionResponse>
  ): QueryGetPermissionResponse {
    const message = {
      ...baseQueryGetPermissionResponse,
    } as QueryGetPermissionResponse;
    if (object.Permission !== undefined && object.Permission !== null) {
      message.Permission = Permission.fromPartial(object.Permission);
    } else {
      message.Permission = undefined;
    }
    return message;
  },
};

const baseQueryAllPermissionRequest: object = {};

export const QueryAllPermissionRequest = {
  encode(
    message: QueryAllPermissionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPermissionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPermissionRequest,
    } as QueryAllPermissionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPermissionRequest {
    const message = {
      ...baseQueryAllPermissionRequest,
    } as QueryAllPermissionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPermissionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPermissionRequest>
  ): QueryAllPermissionRequest {
    const message = {
      ...baseQueryAllPermissionRequest,
    } as QueryAllPermissionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPermissionResponse: object = {};

export const QueryAllPermissionResponse = {
  encode(
    message: QueryAllPermissionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Permission) {
      Permission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPermissionResponse,
    } as QueryAllPermissionResponse;
    message.Permission = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Permission.push(Permission.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPermissionResponse {
    const message = {
      ...baseQueryAllPermissionResponse,
    } as QueryAllPermissionResponse;
    message.Permission = [];
    if (object.Permission !== undefined && object.Permission !== null) {
      for (const e of object.Permission) {
        message.Permission.push(Permission.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPermissionResponse): unknown {
    const obj: any = {};
    if (message.Permission) {
      obj.Permission = message.Permission.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.Permission = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPermissionResponse>
  ): QueryAllPermissionResponse {
    const message = {
      ...baseQueryAllPermissionResponse,
    } as QueryAllPermissionResponse;
    message.Permission = [];
    if (object.Permission !== undefined && object.Permission !== null) {
      for (const e of object.Permission) {
        message.Permission.push(Permission.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDelegationConditionsRequest: object = { id: 0 };

export const QueryGetDelegationConditionsRequest = {
  encode(
    message: QueryGetDelegationConditionsRequest,
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
  ): QueryGetDelegationConditionsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDelegationConditionsRequest,
    } as QueryGetDelegationConditionsRequest;
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

  fromJSON(object: any): QueryGetDelegationConditionsRequest {
    const message = {
      ...baseQueryGetDelegationConditionsRequest,
    } as QueryGetDelegationConditionsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDelegationConditionsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDelegationConditionsRequest>
  ): QueryGetDelegationConditionsRequest {
    const message = {
      ...baseQueryGetDelegationConditionsRequest,
    } as QueryGetDelegationConditionsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDelegationConditionsResponse: object = {};

export const QueryGetDelegationConditionsResponse = {
  encode(
    message: QueryGetDelegationConditionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DelegationConditions !== undefined) {
      DelegationConditions.encode(
        message.DelegationConditions,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDelegationConditionsResponse,
    } as QueryGetDelegationConditionsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DelegationConditions = DelegationConditions.decode(
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

  fromJSON(object: any): QueryGetDelegationConditionsResponse {
    const message = {
      ...baseQueryGetDelegationConditionsResponse,
    } as QueryGetDelegationConditionsResponse;
    if (
      object.DelegationConditions !== undefined &&
      object.DelegationConditions !== null
    ) {
      message.DelegationConditions = DelegationConditions.fromJSON(
        object.DelegationConditions
      );
    } else {
      message.DelegationConditions = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDelegationConditionsResponse): unknown {
    const obj: any = {};
    message.DelegationConditions !== undefined &&
      (obj.DelegationConditions = message.DelegationConditions
        ? DelegationConditions.toJSON(message.DelegationConditions)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDelegationConditionsResponse>
  ): QueryGetDelegationConditionsResponse {
    const message = {
      ...baseQueryGetDelegationConditionsResponse,
    } as QueryGetDelegationConditionsResponse;
    if (
      object.DelegationConditions !== undefined &&
      object.DelegationConditions !== null
    ) {
      message.DelegationConditions = DelegationConditions.fromPartial(
        object.DelegationConditions
      );
    } else {
      message.DelegationConditions = undefined;
    }
    return message;
  },
};

const baseQueryAllDelegationConditionsRequest: object = {};

export const QueryAllDelegationConditionsRequest = {
  encode(
    message: QueryAllDelegationConditionsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDelegationConditionsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDelegationConditionsRequest,
    } as QueryAllDelegationConditionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationConditionsRequest {
    const message = {
      ...baseQueryAllDelegationConditionsRequest,
    } as QueryAllDelegationConditionsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDelegationConditionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDelegationConditionsRequest>
  ): QueryAllDelegationConditionsRequest {
    const message = {
      ...baseQueryAllDelegationConditionsRequest,
    } as QueryAllDelegationConditionsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDelegationConditionsResponse: object = {};

export const QueryAllDelegationConditionsResponse = {
  encode(
    message: QueryAllDelegationConditionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.DelegationConditions) {
      DelegationConditions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDelegationConditionsResponse,
    } as QueryAllDelegationConditionsResponse;
    message.DelegationConditions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DelegationConditions.push(
            DelegationConditions.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationConditionsResponse {
    const message = {
      ...baseQueryAllDelegationConditionsResponse,
    } as QueryAllDelegationConditionsResponse;
    message.DelegationConditions = [];
    if (
      object.DelegationConditions !== undefined &&
      object.DelegationConditions !== null
    ) {
      for (const e of object.DelegationConditions) {
        message.DelegationConditions.push(DelegationConditions.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDelegationConditionsResponse): unknown {
    const obj: any = {};
    if (message.DelegationConditions) {
      obj.DelegationConditions = message.DelegationConditions.map((e) =>
        e ? DelegationConditions.toJSON(e) : undefined
      );
    } else {
      obj.DelegationConditions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDelegationConditionsResponse>
  ): QueryAllDelegationConditionsResponse {
    const message = {
      ...baseQueryAllDelegationConditionsResponse,
    } as QueryAllDelegationConditionsResponse;
    message.DelegationConditions = [];
    if (
      object.DelegationConditions !== undefined &&
      object.DelegationConditions !== null
    ) {
      for (const e of object.DelegationConditions) {
        message.DelegationConditions.push(DelegationConditions.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a LocalDomain by index. */
  LocalDomain(
    request: QueryGetLocalDomainRequest
  ): Promise<QueryGetLocalDomainResponse>;
  /** Queries a Domain by id. */
  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse>;
  /** Queries a list of Domain items. */
  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse>;
  /** Queries a ForwardPolicy by index. */
  ForwardPolicy(
    request: QueryGetForwardPolicyRequest
  ): Promise<QueryGetForwardPolicyResponse>;
  /** Queries a Validity by id. */
  Validity(request: QueryGetValidityRequest): Promise<QueryGetValidityResponse>;
  /** Queries a list of Validity items. */
  ValidityAll(
    request: QueryAllValidityRequest
  ): Promise<QueryAllValidityResponse>;
  /** Queries a DecisionPolicy by index. */
  DecisionPolicy(
    request: QueryGetDecisionPolicyRequest
  ): Promise<QueryGetDecisionPolicyResponse>;
  /** Queries a Permission by id. */
  Permission(
    request: QueryGetPermissionRequest
  ): Promise<QueryGetPermissionResponse>;
  /** Queries a list of Permission items. */
  PermissionAll(
    request: QueryAllPermissionRequest
  ): Promise<QueryAllPermissionResponse>;
  /** Queries a DelegationConditions by id. */
  DelegationConditions(
    request: QueryGetDelegationConditionsRequest
  ): Promise<QueryGetDelegationConditionsResponse>;
  /** Queries a list of DelegationConditions items. */
  DelegationConditionsAll(
    request: QueryAllDelegationConditionsRequest
  ): Promise<QueryAllDelegationConditionsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  LocalDomain(
    request: QueryGetLocalDomainRequest
  ): Promise<QueryGetLocalDomainResponse> {
    const data = QueryGetLocalDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "LocalDomain",
      data
    );
    return promise.then((data) =>
      QueryGetLocalDomainResponse.decode(new Reader(data))
    );
  }

  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse> {
    const data = QueryGetDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "Domain",
      data
    );
    return promise.then((data) =>
      QueryGetDomainResponse.decode(new Reader(data))
    );
  }

  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse> {
    const data = QueryAllDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "DomainAll",
      data
    );
    return promise.then((data) =>
      QueryAllDomainResponse.decode(new Reader(data))
    );
  }

  ForwardPolicy(
    request: QueryGetForwardPolicyRequest
  ): Promise<QueryGetForwardPolicyResponse> {
    const data = QueryGetForwardPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "ForwardPolicy",
      data
    );
    return promise.then((data) =>
      QueryGetForwardPolicyResponse.decode(new Reader(data))
    );
  }

  Validity(
    request: QueryGetValidityRequest
  ): Promise<QueryGetValidityResponse> {
    const data = QueryGetValidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "Validity",
      data
    );
    return promise.then((data) =>
      QueryGetValidityResponse.decode(new Reader(data))
    );
  }

  ValidityAll(
    request: QueryAllValidityRequest
  ): Promise<QueryAllValidityResponse> {
    const data = QueryAllValidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "ValidityAll",
      data
    );
    return promise.then((data) =>
      QueryAllValidityResponse.decode(new Reader(data))
    );
  }

  DecisionPolicy(
    request: QueryGetDecisionPolicyRequest
  ): Promise<QueryGetDecisionPolicyResponse> {
    const data = QueryGetDecisionPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "DecisionPolicy",
      data
    );
    return promise.then((data) =>
      QueryGetDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  Permission(
    request: QueryGetPermissionRequest
  ): Promise<QueryGetPermissionResponse> {
    const data = QueryGetPermissionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "Permission",
      data
    );
    return promise.then((data) =>
      QueryGetPermissionResponse.decode(new Reader(data))
    );
  }

  PermissionAll(
    request: QueryAllPermissionRequest
  ): Promise<QueryAllPermissionResponse> {
    const data = QueryAllPermissionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "PermissionAll",
      data
    );
    return promise.then((data) =>
      QueryAllPermissionResponse.decode(new Reader(data))
    );
  }

  DelegationConditions(
    request: QueryGetDelegationConditionsRequest
  ): Promise<QueryGetDelegationConditionsResponse> {
    const data = QueryGetDelegationConditionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "DelegationConditions",
      data
    );
    return promise.then((data) =>
      QueryGetDelegationConditionsResponse.decode(new Reader(data))
    );
  }

  DelegationConditionsAll(
    request: QueryAllDelegationConditionsRequest
  ): Promise<QueryAllDelegationConditionsResponse> {
    const data = QueryAllDelegationConditionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "delegationcontrol.fdpd.Query",
      "DelegationConditionsAll",
      data
    );
    return promise.then((data) =>
      QueryAllDelegationConditionsResponse.decode(new Reader(data))
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
