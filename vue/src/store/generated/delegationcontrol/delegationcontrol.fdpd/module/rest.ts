/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FdpdDecisionPolicy {
  domainList?: string[];
  locationList?: string[];

  /** @format uint64 */
  cost?: string;

  /** @format uint64 */
  maxDelegations?: string;
  validity?: FdpdValidity;
  creator?: string;
}

export interface FdpdDelegationConditions {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  cost?: string;

  /** @format uint64 */
  maxDelegations?: string;
  validity?: FdpdValidity;
  creator?: string;
}

export interface FdpdDelegationDecision {
  /** @format uint64 */
  id?: string;
  decision?: string;
  delegationConditions?: FdpdDelegationConditions;
  creator?: string;
  decisionDomain?: string;
}

export interface FdpdDomain {
  /** @format uint64 */
  id?: string;
  name?: string;
  location?: string;
  ibcChannel?: string;
  creator?: string;
}

export interface FdpdForwardPolicy {
  mode?: string;
  domainList?: string[];
  locationList?: string[];
  creator?: string;
}

export interface FdpdLocalDomain {
  name?: string;
  location?: string;
  creator?: string;
}

export type FdpdMsgCheckDelegationResponse = object;

export type FdpdMsgConfigureLocalDomainResponse = object;

export type FdpdMsgCreateDecisionPolicyResponse = object;

export interface FdpdMsgCreateDelegationConditionsResponse {
  /** @format uint64 */
  id?: string;
}

export interface FdpdMsgCreateDelegationDecisionResponse {
  /** @format uint64 */
  id?: string;
}

export interface FdpdMsgCreateDomainResponse {
  /** @format uint64 */
  id?: string;
}

export type FdpdMsgCreateForwardPolicyResponse = object;

export type FdpdMsgCreateLocalDomainResponse = object;

export interface FdpdMsgCreatePermissionResponse {
  /** @format uint64 */
  id?: string;
}

export interface FdpdMsgCreateSelectionCriteriaResponse {
  /** @format uint64 */
  id?: string;
}

export type FdpdMsgCreateSelectionPolicyResponse = object;

export interface FdpdMsgCreateValidityResponse {
  /** @format uint64 */
  id?: string;
}

export type FdpdMsgDeleteDecisionPolicyResponse = object;

export type FdpdMsgDeleteDelegationConditionsResponse = object;

export type FdpdMsgDeleteDelegationDecisionResponse = object;

export type FdpdMsgDeleteDomainResponse = object;

export type FdpdMsgDeleteForwardPolicyResponse = object;

export type FdpdMsgDeleteLocalDomainResponse = object;

export type FdpdMsgDeletePermissionResponse = object;

export type FdpdMsgDeleteSelectionCriteriaResponse = object;

export type FdpdMsgDeleteSelectionPolicyResponse = object;

export type FdpdMsgDeleteValidityResponse = object;

export type FdpdMsgSendEstablishCooperationResponse = object;

export type FdpdMsgSendRequestDelegationResponse = object;

export type FdpdMsgUpdateDecisionPolicyResponse = object;

export type FdpdMsgUpdateDelegationConditionsResponse = object;

export type FdpdMsgUpdateDelegationDecisionResponse = object;

export type FdpdMsgUpdateDomainResponse = object;

export type FdpdMsgUpdateForwardPolicyResponse = object;

export type FdpdMsgUpdateLocalDomainResponse = object;

export type FdpdMsgUpdatePermissionResponse = object;

export type FdpdMsgUpdateSelectionCriteriaResponse = object;

export type FdpdMsgUpdateSelectionPolicyResponse = object;

export type FdpdMsgUpdateValidityResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type FdpdParams = object;

export interface FdpdPermission {
  /** @format uint64 */
  id?: string;
  action?: string;
  resource?: string;
  creator?: string;
}

export interface FdpdQueryAllDelegationConditionsResponse {
  DelegationConditions?: FdpdDelegationConditions[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FdpdQueryAllDelegationDecisionResponse {
  DelegationDecision?: FdpdDelegationDecision[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FdpdQueryAllDomainResponse {
  Domain?: FdpdDomain[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FdpdQueryAllPermissionResponse {
  Permission?: FdpdPermission[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FdpdQueryAllSelectionCriteriaResponse {
  SelectionCriteria?: FdpdSelectionCriteria[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FdpdQueryAllValidityResponse {
  Validity?: FdpdValidity[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FdpdQueryGetDecisionPolicyResponse {
  DecisionPolicy?: FdpdDecisionPolicy;
}

export interface FdpdQueryGetDelegationConditionsResponse {
  DelegationConditions?: FdpdDelegationConditions;
}

export interface FdpdQueryGetDelegationDecisionResponse {
  DelegationDecision?: FdpdDelegationDecision;
}

export interface FdpdQueryGetDomainResponse {
  Domain?: FdpdDomain;
}

export interface FdpdQueryGetForwardPolicyResponse {
  ForwardPolicy?: FdpdForwardPolicy;
}

export interface FdpdQueryGetLocalDomainResponse {
  LocalDomain?: FdpdLocalDomain;
}

export interface FdpdQueryGetPermissionResponse {
  Permission?: FdpdPermission;
}

export interface FdpdQueryGetSelectionCriteriaResponse {
  SelectionCriteria?: FdpdSelectionCriteria;
}

export interface FdpdQueryGetSelectionPolicyResponse {
  SelectionPolicy?: FdpdSelectionPolicy;
}

export interface FdpdQueryGetValidityResponse {
  Validity?: FdpdValidity;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface FdpdQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: FdpdParams;
}

export interface FdpdSelectionCriteria {
  /** @format uint64 */
  id?: string;
  domainList?: string[];
  delegatorLocationList?: string[];

  /** @format uint64 */
  cost?: string;

  /** @format uint64 */
  nbDelegations?: string;
  validity?: FdpdValidity;
  creator?: string;
}

export interface FdpdSelectionPolicy {
  domainList?: string[];
  delegatorLocationList?: string[];

  /** @format uint64 */
  cost?: string;

  /** @format uint64 */
  nbDelegations?: string;
  validity?: FdpdValidity;
  creator?: string;
}

export interface FdpdValidity {
  /** @format uint64 */
  id?: string;
  notBefore?: string;
  notAfter?: string;
  creator?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title fdpd/decision_policy.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryDecisionPolicy
   * @summary Queries a DecisionPolicy by index.
   * @request GET:/delegationcontrol/fdpd/decision_policy
   */
  queryDecisionPolicy = (params: RequestParams = {}) =>
    this.request<FdpdQueryGetDecisionPolicyResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/decision_policy`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegationConditionsAll
   * @summary Queries a list of DelegationConditions items.
   * @request GET:/delegationcontrol/fdpd/delegation_conditions
   */
  queryDelegationConditionsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FdpdQueryAllDelegationConditionsResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/delegation_conditions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegationConditions
   * @summary Queries a DelegationConditions by id.
   * @request GET:/delegationcontrol/fdpd/delegation_conditions/{id}
   */
  queryDelegationConditions = (id: string, params: RequestParams = {}) =>
    this.request<FdpdQueryGetDelegationConditionsResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/delegation_conditions/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegationDecisionAll
   * @summary Queries a list of DelegationDecision items.
   * @request GET:/delegationcontrol/fdpd/delegation_decision
   */
  queryDelegationDecisionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FdpdQueryAllDelegationDecisionResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/delegation_decision`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegationDecision
   * @summary Queries a DelegationDecision by id.
   * @request GET:/delegationcontrol/fdpd/delegation_decision/{id}
   */
  queryDelegationDecision = (id: string, params: RequestParams = {}) =>
    this.request<FdpdQueryGetDelegationDecisionResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/delegation_decision/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainAll
   * @summary Queries a list of Domain items.
   * @request GET:/delegationcontrol/fdpd/domain
   */
  queryDomainAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FdpdQueryAllDomainResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/domain`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomain
   * @summary Queries a Domain by id.
   * @request GET:/delegationcontrol/fdpd/domain/{id}
   */
  queryDomain = (id: string, params: RequestParams = {}) =>
    this.request<FdpdQueryGetDomainResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/domain/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryForwardPolicy
   * @summary Queries a ForwardPolicy by index.
   * @request GET:/delegationcontrol/fdpd/forward_policy
   */
  queryForwardPolicy = (params: RequestParams = {}) =>
    this.request<FdpdQueryGetForwardPolicyResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/forward_policy`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLocalDomain
   * @summary Queries a LocalDomain by index.
   * @request GET:/delegationcontrol/fdpd/local_domain
   */
  queryLocalDomain = (params: RequestParams = {}) =>
    this.request<FdpdQueryGetLocalDomainResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/local_domain`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/delegationcontrol/fdpd/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<FdpdQueryParamsResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPermissionAll
   * @summary Queries a list of Permission items.
   * @request GET:/delegationcontrol/fdpd/permission
   */
  queryPermissionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FdpdQueryAllPermissionResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/permission`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPermission
   * @summary Queries a Permission by id.
   * @request GET:/delegationcontrol/fdpd/permission/{id}
   */
  queryPermission = (id: string, params: RequestParams = {}) =>
    this.request<FdpdQueryGetPermissionResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/permission/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySelectionCriteriaAll
   * @summary Queries a list of SelectionCriteria items.
   * @request GET:/delegationcontrol/fdpd/selection_criteria
   */
  querySelectionCriteriaAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FdpdQueryAllSelectionCriteriaResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/selection_criteria`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySelectionCriteria
   * @summary Queries a SelectionCriteria by id.
   * @request GET:/delegationcontrol/fdpd/selection_criteria/{id}
   */
  querySelectionCriteria = (id: string, params: RequestParams = {}) =>
    this.request<FdpdQueryGetSelectionCriteriaResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/selection_criteria/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySelectionPolicy
   * @summary Queries a SelectionPolicy by index.
   * @request GET:/delegationcontrol/fdpd/selection_policy
   */
  querySelectionPolicy = (params: RequestParams = {}) =>
    this.request<FdpdQueryGetSelectionPolicyResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/selection_policy`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidityAll
   * @summary Queries a list of Validity items.
   * @request GET:/delegationcontrol/fdpd/validity
   */
  queryValidityAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FdpdQueryAllValidityResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/validity`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidity
   * @summary Queries a Validity by id.
   * @request GET:/delegationcontrol/fdpd/validity/{id}
   */
  queryValidity = (id: string, params: RequestParams = {}) =>
    this.request<FdpdQueryGetValidityResponse, RpcStatus>({
      path: `/delegationcontrol/fdpd/validity/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
