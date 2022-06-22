// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateDelegationDecision } from "./types/fdpd/tx";
import { MsgCreateDomain } from "./types/fdpd/tx";
import { MsgCreateFinalDelegationDecision } from "./types/fdpd/tx";
import { MsgUpdateDomain } from "./types/fdpd/tx";
import { MsgDeleteDomain } from "./types/fdpd/tx";
import { MsgCreateForwardPolicy } from "./types/fdpd/tx";
import { MsgDeleteFinalDelegationDecision } from "./types/fdpd/tx";
import { MsgDeleteDelegationDecision } from "./types/fdpd/tx";
import { MsgCreatePermission } from "./types/fdpd/tx";
import { MsgCheckDelegation } from "./types/fdpd/tx";
import { MsgDeleteForwardPolicy } from "./types/fdpd/tx";
import { MsgCreateDecisionPolicy } from "./types/fdpd/tx";
import { MsgUpdateSelectionPolicy } from "./types/fdpd/tx";
import { MsgUpdateFinalDelegationDecision } from "./types/fdpd/tx";
import { MsgDeleteValidity } from "./types/fdpd/tx";
import { MsgUpdateDelegationRequestLog } from "./types/fdpd/tx";
import { MsgDeleteDelegationConditions } from "./types/fdpd/tx";
import { MsgDeleteSelectionCriteria } from "./types/fdpd/tx";
import { MsgSendRequestDelegation } from "./types/fdpd/tx";
import { MsgCreateDelegationConditions } from "./types/fdpd/tx";
import { MsgCreateDelegationRequest } from "./types/fdpd/tx";
import { MsgDeleteDelegationRequest } from "./types/fdpd/tx";
import { MsgCreateDelegationDecision } from "./types/fdpd/tx";
import { MsgUpdateLocalDomain } from "./types/fdpd/tx";
import { MsgCreateSelectionPolicy } from "./types/fdpd/tx";
import { MsgCreateSelectionCriteria } from "./types/fdpd/tx";
import { MsgCreateValidity } from "./types/fdpd/tx";
import { MsgUpdatePermission } from "./types/fdpd/tx";
import { MsgDeletePermission } from "./types/fdpd/tx";
import { MsgUpdateDelegationConditions } from "./types/fdpd/tx";
import { MsgDeleteSelectionPolicy } from "./types/fdpd/tx";
import { MsgConfigureLocalDomain } from "./types/fdpd/tx";
import { MsgCreateLocalDomain } from "./types/fdpd/tx";
import { MsgDeleteDelegationRequestLog } from "./types/fdpd/tx";
import { MsgUpdateForwardPolicy } from "./types/fdpd/tx";
import { MsgUpdateDecisionPolicy } from "./types/fdpd/tx";
import { MsgUpdateValidity } from "./types/fdpd/tx";
import { MsgUpdateDelegationRequest } from "./types/fdpd/tx";
import { MsgSendEstablishCooperation } from "./types/fdpd/tx";
import { MsgDeleteDecisionPolicy } from "./types/fdpd/tx";
import { MsgCreateDelegationRequestLog } from "./types/fdpd/tx";
import { MsgUpdateSelectionCriteria } from "./types/fdpd/tx";
import { MsgDeleteLocalDomain } from "./types/fdpd/tx";


const types = [
  ["/delegationcontrol.fdpd.MsgUpdateDelegationDecision", MsgUpdateDelegationDecision],
  ["/delegationcontrol.fdpd.MsgCreateDomain", MsgCreateDomain],
  ["/delegationcontrol.fdpd.MsgCreateFinalDelegationDecision", MsgCreateFinalDelegationDecision],
  ["/delegationcontrol.fdpd.MsgUpdateDomain", MsgUpdateDomain],
  ["/delegationcontrol.fdpd.MsgDeleteDomain", MsgDeleteDomain],
  ["/delegationcontrol.fdpd.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteFinalDelegationDecision", MsgDeleteFinalDelegationDecision],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationDecision", MsgDeleteDelegationDecision],
  ["/delegationcontrol.fdpd.MsgCreatePermission", MsgCreatePermission],
  ["/delegationcontrol.fdpd.MsgCheckDelegation", MsgCheckDelegation],
  ["/delegationcontrol.fdpd.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/delegationcontrol.fdpd.MsgCreateDecisionPolicy", MsgCreateDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgUpdateSelectionPolicy", MsgUpdateSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgUpdateFinalDelegationDecision", MsgUpdateFinalDelegationDecision],
  ["/delegationcontrol.fdpd.MsgDeleteValidity", MsgDeleteValidity],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationRequestLog", MsgUpdateDelegationRequestLog],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationConditions", MsgDeleteDelegationConditions],
  ["/delegationcontrol.fdpd.MsgDeleteSelectionCriteria", MsgDeleteSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgSendRequestDelegation", MsgSendRequestDelegation],
  ["/delegationcontrol.fdpd.MsgCreateDelegationConditions", MsgCreateDelegationConditions],
  ["/delegationcontrol.fdpd.MsgCreateDelegationRequest", MsgCreateDelegationRequest],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationRequest", MsgDeleteDelegationRequest],
  ["/delegationcontrol.fdpd.MsgCreateDelegationDecision", MsgCreateDelegationDecision],
  ["/delegationcontrol.fdpd.MsgUpdateLocalDomain", MsgUpdateLocalDomain],
  ["/delegationcontrol.fdpd.MsgCreateSelectionPolicy", MsgCreateSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgCreateSelectionCriteria", MsgCreateSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgCreateValidity", MsgCreateValidity],
  ["/delegationcontrol.fdpd.MsgUpdatePermission", MsgUpdatePermission],
  ["/delegationcontrol.fdpd.MsgDeletePermission", MsgDeletePermission],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationConditions", MsgUpdateDelegationConditions],
  ["/delegationcontrol.fdpd.MsgDeleteSelectionPolicy", MsgDeleteSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgConfigureLocalDomain", MsgConfigureLocalDomain],
  ["/delegationcontrol.fdpd.MsgCreateLocalDomain", MsgCreateLocalDomain],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationRequestLog", MsgDeleteDelegationRequestLog],
  ["/delegationcontrol.fdpd.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/delegationcontrol.fdpd.MsgUpdateDecisionPolicy", MsgUpdateDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgUpdateValidity", MsgUpdateValidity],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationRequest", MsgUpdateDelegationRequest],
  ["/delegationcontrol.fdpd.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/delegationcontrol.fdpd.MsgDeleteDecisionPolicy", MsgDeleteDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgCreateDelegationRequestLog", MsgCreateDelegationRequestLog],
  ["/delegationcontrol.fdpd.MsgUpdateSelectionCriteria", MsgUpdateSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgDeleteLocalDomain", MsgDeleteLocalDomain],
  
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
    msgUpdateDelegationDecision: (data: MsgUpdateDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationDecision", value: MsgUpdateDelegationDecision.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgCreateFinalDelegationDecision: (data: MsgCreateFinalDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateFinalDelegationDecision", value: MsgCreateFinalDelegationDecision.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    msgDeleteFinalDelegationDecision: (data: MsgDeleteFinalDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteFinalDelegationDecision", value: MsgDeleteFinalDelegationDecision.fromPartial( data ) }),
    msgDeleteDelegationDecision: (data: MsgDeleteDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationDecision", value: MsgDeleteDelegationDecision.fromPartial( data ) }),
    msgCreatePermission: (data: MsgCreatePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreatePermission", value: MsgCreatePermission.fromPartial( data ) }),
    msgCheckDelegation: (data: MsgCheckDelegation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCheckDelegation", value: MsgCheckDelegation.fromPartial( data ) }),
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgCreateDecisionPolicy: (data: MsgCreateDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDecisionPolicy", value: MsgCreateDecisionPolicy.fromPartial( data ) }),
    msgUpdateSelectionPolicy: (data: MsgUpdateSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateSelectionPolicy", value: MsgUpdateSelectionPolicy.fromPartial( data ) }),
    msgUpdateFinalDelegationDecision: (data: MsgUpdateFinalDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateFinalDelegationDecision", value: MsgUpdateFinalDelegationDecision.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgUpdateDelegationRequestLog: (data: MsgUpdateDelegationRequestLog): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationRequestLog", value: MsgUpdateDelegationRequestLog.fromPartial( data ) }),
    msgDeleteDelegationConditions: (data: MsgDeleteDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationConditions", value: MsgDeleteDelegationConditions.fromPartial( data ) }),
    msgDeleteSelectionCriteria: (data: MsgDeleteSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteSelectionCriteria", value: MsgDeleteSelectionCriteria.fromPartial( data ) }),
    msgSendRequestDelegation: (data: MsgSendRequestDelegation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgSendRequestDelegation", value: MsgSendRequestDelegation.fromPartial( data ) }),
    msgCreateDelegationConditions: (data: MsgCreateDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationConditions", value: MsgCreateDelegationConditions.fromPartial( data ) }),
    msgCreateDelegationRequest: (data: MsgCreateDelegationRequest): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationRequest", value: MsgCreateDelegationRequest.fromPartial( data ) }),
    msgDeleteDelegationRequest: (data: MsgDeleteDelegationRequest): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationRequest", value: MsgDeleteDelegationRequest.fromPartial( data ) }),
    msgCreateDelegationDecision: (data: MsgCreateDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationDecision", value: MsgCreateDelegationDecision.fromPartial( data ) }),
    msgUpdateLocalDomain: (data: MsgUpdateLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateLocalDomain", value: MsgUpdateLocalDomain.fromPartial( data ) }),
    msgCreateSelectionPolicy: (data: MsgCreateSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateSelectionPolicy", value: MsgCreateSelectionPolicy.fromPartial( data ) }),
    msgCreateSelectionCriteria: (data: MsgCreateSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateSelectionCriteria", value: MsgCreateSelectionCriteria.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgUpdatePermission: (data: MsgUpdatePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdatePermission", value: MsgUpdatePermission.fromPartial( data ) }),
    msgDeletePermission: (data: MsgDeletePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeletePermission", value: MsgDeletePermission.fromPartial( data ) }),
    msgUpdateDelegationConditions: (data: MsgUpdateDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationConditions", value: MsgUpdateDelegationConditions.fromPartial( data ) }),
    msgDeleteSelectionPolicy: (data: MsgDeleteSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteSelectionPolicy", value: MsgDeleteSelectionPolicy.fromPartial( data ) }),
    msgConfigureLocalDomain: (data: MsgConfigureLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgConfigureLocalDomain", value: MsgConfigureLocalDomain.fromPartial( data ) }),
    msgCreateLocalDomain: (data: MsgCreateLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateLocalDomain", value: MsgCreateLocalDomain.fromPartial( data ) }),
    msgDeleteDelegationRequestLog: (data: MsgDeleteDelegationRequestLog): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationRequestLog", value: MsgDeleteDelegationRequestLog.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgUpdateDecisionPolicy: (data: MsgUpdateDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDecisionPolicy", value: MsgUpdateDecisionPolicy.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgUpdateDelegationRequest: (data: MsgUpdateDelegationRequest): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationRequest", value: MsgUpdateDelegationRequest.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgDeleteDecisionPolicy: (data: MsgDeleteDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDecisionPolicy", value: MsgDeleteDecisionPolicy.fromPartial( data ) }),
    msgCreateDelegationRequestLog: (data: MsgCreateDelegationRequestLog): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationRequestLog", value: MsgCreateDelegationRequestLog.fromPartial( data ) }),
    msgUpdateSelectionCriteria: (data: MsgUpdateSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateSelectionCriteria", value: MsgUpdateSelectionCriteria.fromPartial( data ) }),
    msgDeleteLocalDomain: (data: MsgDeleteLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteLocalDomain", value: MsgDeleteLocalDomain.fromPartial( data ) }),
    
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
