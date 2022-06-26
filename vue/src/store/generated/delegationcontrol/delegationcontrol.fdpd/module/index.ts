// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSelectionPolicy } from "./types/fdpd/tx";
import { MsgCheckDelegation } from "./types/fdpd/tx";
import { MsgCreateFinalDelegationDecision } from "./types/fdpd/tx";
import { MsgCreateDelegationRequestLog } from "./types/fdpd/tx";
import { MsgUpdatePermission } from "./types/fdpd/tx";
import { MsgDeleteSelectionCriteria } from "./types/fdpd/tx";
import { MsgCalculateRequestDelegationTiming } from "./types/fdpd/tx";
import { MsgUpdateLocalDomain } from "./types/fdpd/tx";
import { MsgCreateLocalDomain } from "./types/fdpd/tx";
import { MsgCreateForwardPolicy } from "./types/fdpd/tx";
import { MsgDeleteDomain } from "./types/fdpd/tx";
import { MsgCreateDelegationDecision } from "./types/fdpd/tx";
import { MsgCreatePermission } from "./types/fdpd/tx";
import { MsgDeleteSelectionPolicy } from "./types/fdpd/tx";
import { MsgDeleteLocalDomain } from "./types/fdpd/tx";
import { MsgUpdateDelegationRequestLog } from "./types/fdpd/tx";
import { MsgUpdateForwardPolicy } from "./types/fdpd/tx";
import { MsgCreateSelectionCriteria } from "./types/fdpd/tx";
import { MsgDeleteDelegationRequestLog } from "./types/fdpd/tx";
import { MsgSendEstablishCooperation } from "./types/fdpd/tx";
import { MsgDeleteCalculationTime } from "./types/fdpd/tx";
import { MsgDeleteValidity } from "./types/fdpd/tx";
import { MsgCreateDelegationConditions } from "./types/fdpd/tx";
import { MsgUpdateSelectionCriteria } from "./types/fdpd/tx";
import { MsgAddDelegationDecision } from "./types/fdpd/tx";
import { MsgUpdateDomain } from "./types/fdpd/tx";
import { MsgUpdateValidity } from "./types/fdpd/tx";
import { MsgDeleteDecisionPolicy } from "./types/fdpd/tx";
import { MsgUpdateSelectionPolicy } from "./types/fdpd/tx";
import { MsgUpdateDelegationDecision } from "./types/fdpd/tx";
import { MsgSendRequestDelegation } from "./types/fdpd/tx";
import { MsgConfigureLocalDomain } from "./types/fdpd/tx";
import { MsgDeleteForwardPolicy } from "./types/fdpd/tx";
import { MsgDeleteFinalDelegationDecision } from "./types/fdpd/tx";
import { MsgCreateDecisionPolicy } from "./types/fdpd/tx";
import { MsgCreateCalculationTime } from "./types/fdpd/tx";
import { MsgDeleteDelegationRequest } from "./types/fdpd/tx";
import { MsgDeleteDelegationConditions } from "./types/fdpd/tx";
import { MsgUpdateDecisionPolicy } from "./types/fdpd/tx";
import { MsgDeletePermission } from "./types/fdpd/tx";
import { MsgUpdateDelegationConditions } from "./types/fdpd/tx";
import { MsgUpdateCalculationTime } from "./types/fdpd/tx";
import { MsgCreateValidity } from "./types/fdpd/tx";
import { MsgCreateDelegationRequest } from "./types/fdpd/tx";
import { MsgDeleteDelegationDecision } from "./types/fdpd/tx";
import { MsgUpdateFinalDelegationDecision } from "./types/fdpd/tx";
import { MsgCreateDomain } from "./types/fdpd/tx";
import { MsgUpdateDelegationRequest } from "./types/fdpd/tx";


const types = [
  ["/delegationcontrol.fdpd.MsgCreateSelectionPolicy", MsgCreateSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgCheckDelegation", MsgCheckDelegation],
  ["/delegationcontrol.fdpd.MsgCreateFinalDelegationDecision", MsgCreateFinalDelegationDecision],
  ["/delegationcontrol.fdpd.MsgCreateDelegationRequestLog", MsgCreateDelegationRequestLog],
  ["/delegationcontrol.fdpd.MsgUpdatePermission", MsgUpdatePermission],
  ["/delegationcontrol.fdpd.MsgDeleteSelectionCriteria", MsgDeleteSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgCalculateRequestDelegationTiming", MsgCalculateRequestDelegationTiming],
  ["/delegationcontrol.fdpd.MsgUpdateLocalDomain", MsgUpdateLocalDomain],
  ["/delegationcontrol.fdpd.MsgCreateLocalDomain", MsgCreateLocalDomain],
  ["/delegationcontrol.fdpd.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteDomain", MsgDeleteDomain],
  ["/delegationcontrol.fdpd.MsgCreateDelegationDecision", MsgCreateDelegationDecision],
  ["/delegationcontrol.fdpd.MsgCreatePermission", MsgCreatePermission],
  ["/delegationcontrol.fdpd.MsgDeleteSelectionPolicy", MsgDeleteSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteLocalDomain", MsgDeleteLocalDomain],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationRequestLog", MsgUpdateDelegationRequestLog],
  ["/delegationcontrol.fdpd.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/delegationcontrol.fdpd.MsgCreateSelectionCriteria", MsgCreateSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationRequestLog", MsgDeleteDelegationRequestLog],
  ["/delegationcontrol.fdpd.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/delegationcontrol.fdpd.MsgDeleteCalculationTime", MsgDeleteCalculationTime],
  ["/delegationcontrol.fdpd.MsgDeleteValidity", MsgDeleteValidity],
  ["/delegationcontrol.fdpd.MsgCreateDelegationConditions", MsgCreateDelegationConditions],
  ["/delegationcontrol.fdpd.MsgUpdateSelectionCriteria", MsgUpdateSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgAddDelegationDecision", MsgAddDelegationDecision],
  ["/delegationcontrol.fdpd.MsgUpdateDomain", MsgUpdateDomain],
  ["/delegationcontrol.fdpd.MsgUpdateValidity", MsgUpdateValidity],
  ["/delegationcontrol.fdpd.MsgDeleteDecisionPolicy", MsgDeleteDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgUpdateSelectionPolicy", MsgUpdateSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationDecision", MsgUpdateDelegationDecision],
  ["/delegationcontrol.fdpd.MsgSendRequestDelegation", MsgSendRequestDelegation],
  ["/delegationcontrol.fdpd.MsgConfigureLocalDomain", MsgConfigureLocalDomain],
  ["/delegationcontrol.fdpd.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteFinalDelegationDecision", MsgDeleteFinalDelegationDecision],
  ["/delegationcontrol.fdpd.MsgCreateDecisionPolicy", MsgCreateDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgCreateCalculationTime", MsgCreateCalculationTime],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationRequest", MsgDeleteDelegationRequest],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationConditions", MsgDeleteDelegationConditions],
  ["/delegationcontrol.fdpd.MsgUpdateDecisionPolicy", MsgUpdateDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgDeletePermission", MsgDeletePermission],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationConditions", MsgUpdateDelegationConditions],
  ["/delegationcontrol.fdpd.MsgUpdateCalculationTime", MsgUpdateCalculationTime],
  ["/delegationcontrol.fdpd.MsgCreateValidity", MsgCreateValidity],
  ["/delegationcontrol.fdpd.MsgCreateDelegationRequest", MsgCreateDelegationRequest],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationDecision", MsgDeleteDelegationDecision],
  ["/delegationcontrol.fdpd.MsgUpdateFinalDelegationDecision", MsgUpdateFinalDelegationDecision],
  ["/delegationcontrol.fdpd.MsgCreateDomain", MsgCreateDomain],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationRequest", MsgUpdateDelegationRequest],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateSelectionPolicy: (data: MsgCreateSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateSelectionPolicy", value: MsgCreateSelectionPolicy.fromPartial( data ) }),
    msgCheckDelegation: (data: MsgCheckDelegation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCheckDelegation", value: MsgCheckDelegation.fromPartial( data ) }),
    msgCreateFinalDelegationDecision: (data: MsgCreateFinalDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateFinalDelegationDecision", value: MsgCreateFinalDelegationDecision.fromPartial( data ) }),
    msgCreateDelegationRequestLog: (data: MsgCreateDelegationRequestLog): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationRequestLog", value: MsgCreateDelegationRequestLog.fromPartial( data ) }),
    msgUpdatePermission: (data: MsgUpdatePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdatePermission", value: MsgUpdatePermission.fromPartial( data ) }),
    msgDeleteSelectionCriteria: (data: MsgDeleteSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteSelectionCriteria", value: MsgDeleteSelectionCriteria.fromPartial( data ) }),
    msgCalculateRequestDelegationTiming: (data: MsgCalculateRequestDelegationTiming): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCalculateRequestDelegationTiming", value: MsgCalculateRequestDelegationTiming.fromPartial( data ) }),
    msgUpdateLocalDomain: (data: MsgUpdateLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateLocalDomain", value: MsgUpdateLocalDomain.fromPartial( data ) }),
    msgCreateLocalDomain: (data: MsgCreateLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateLocalDomain", value: MsgCreateLocalDomain.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgCreateDelegationDecision: (data: MsgCreateDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationDecision", value: MsgCreateDelegationDecision.fromPartial( data ) }),
    msgCreatePermission: (data: MsgCreatePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreatePermission", value: MsgCreatePermission.fromPartial( data ) }),
    msgDeleteSelectionPolicy: (data: MsgDeleteSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteSelectionPolicy", value: MsgDeleteSelectionPolicy.fromPartial( data ) }),
    msgDeleteLocalDomain: (data: MsgDeleteLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteLocalDomain", value: MsgDeleteLocalDomain.fromPartial( data ) }),
    msgUpdateDelegationRequestLog: (data: MsgUpdateDelegationRequestLog): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationRequestLog", value: MsgUpdateDelegationRequestLog.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgCreateSelectionCriteria: (data: MsgCreateSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateSelectionCriteria", value: MsgCreateSelectionCriteria.fromPartial( data ) }),
    msgDeleteDelegationRequestLog: (data: MsgDeleteDelegationRequestLog): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationRequestLog", value: MsgDeleteDelegationRequestLog.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgDeleteCalculationTime: (data: MsgDeleteCalculationTime): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteCalculationTime", value: MsgDeleteCalculationTime.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgCreateDelegationConditions: (data: MsgCreateDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationConditions", value: MsgCreateDelegationConditions.fromPartial( data ) }),
    msgUpdateSelectionCriteria: (data: MsgUpdateSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateSelectionCriteria", value: MsgUpdateSelectionCriteria.fromPartial( data ) }),
    msgAddDelegationDecision: (data: MsgAddDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgAddDelegationDecision", value: MsgAddDelegationDecision.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgDeleteDecisionPolicy: (data: MsgDeleteDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDecisionPolicy", value: MsgDeleteDecisionPolicy.fromPartial( data ) }),
    msgUpdateSelectionPolicy: (data: MsgUpdateSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateSelectionPolicy", value: MsgUpdateSelectionPolicy.fromPartial( data ) }),
    msgUpdateDelegationDecision: (data: MsgUpdateDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationDecision", value: MsgUpdateDelegationDecision.fromPartial( data ) }),
    msgSendRequestDelegation: (data: MsgSendRequestDelegation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgSendRequestDelegation", value: MsgSendRequestDelegation.fromPartial( data ) }),
    msgConfigureLocalDomain: (data: MsgConfigureLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgConfigureLocalDomain", value: MsgConfigureLocalDomain.fromPartial( data ) }),
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgDeleteFinalDelegationDecision: (data: MsgDeleteFinalDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteFinalDelegationDecision", value: MsgDeleteFinalDelegationDecision.fromPartial( data ) }),
    msgCreateDecisionPolicy: (data: MsgCreateDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDecisionPolicy", value: MsgCreateDecisionPolicy.fromPartial( data ) }),
    msgCreateCalculationTime: (data: MsgCreateCalculationTime): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateCalculationTime", value: MsgCreateCalculationTime.fromPartial( data ) }),
    msgDeleteDelegationRequest: (data: MsgDeleteDelegationRequest): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationRequest", value: MsgDeleteDelegationRequest.fromPartial( data ) }),
    msgDeleteDelegationConditions: (data: MsgDeleteDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationConditions", value: MsgDeleteDelegationConditions.fromPartial( data ) }),
    msgUpdateDecisionPolicy: (data: MsgUpdateDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDecisionPolicy", value: MsgUpdateDecisionPolicy.fromPartial( data ) }),
    msgDeletePermission: (data: MsgDeletePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeletePermission", value: MsgDeletePermission.fromPartial( data ) }),
    msgUpdateDelegationConditions: (data: MsgUpdateDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationConditions", value: MsgUpdateDelegationConditions.fromPartial( data ) }),
    msgUpdateCalculationTime: (data: MsgUpdateCalculationTime): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateCalculationTime", value: MsgUpdateCalculationTime.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgCreateDelegationRequest: (data: MsgCreateDelegationRequest): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationRequest", value: MsgCreateDelegationRequest.fromPartial( data ) }),
    msgDeleteDelegationDecision: (data: MsgDeleteDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationDecision", value: MsgDeleteDelegationDecision.fromPartial( data ) }),
    msgUpdateFinalDelegationDecision: (data: MsgUpdateFinalDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateFinalDelegationDecision", value: MsgUpdateFinalDelegationDecision.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgUpdateDelegationRequest: (data: MsgUpdateDelegationRequest): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationRequest", value: MsgUpdateDelegationRequest.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
