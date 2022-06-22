// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateValidity } from "./types/fdpd/tx";
import { MsgUpdateSelectionPolicy } from "./types/fdpd/tx";
import { MsgDeleteSelectionPolicy } from "./types/fdpd/tx";
import { MsgCreatePermission } from "./types/fdpd/tx";
import { MsgUpdateDecisionPolicy } from "./types/fdpd/tx";
import { MsgDeleteLocalDomain } from "./types/fdpd/tx";
import { MsgCreateSelectionPolicy } from "./types/fdpd/tx";
import { MsgCreateDomain } from "./types/fdpd/tx";
import { MsgSendEstablishCooperation } from "./types/fdpd/tx";
import { MsgCreateDecisionPolicy } from "./types/fdpd/tx";
import { MsgDeleteDelegationDecision } from "./types/fdpd/tx";
import { MsgUpdateSelectionCriteria } from "./types/fdpd/tx";
import { MsgUpdateLocalDomain } from "./types/fdpd/tx";
import { MsgDeletePermission } from "./types/fdpd/tx";
import { MsgCreateDelegationConditions } from "./types/fdpd/tx";
import { MsgCreateDelegationDecision } from "./types/fdpd/tx";
import { MsgUpdateDomain } from "./types/fdpd/tx";
import { MsgDeleteDecisionPolicy } from "./types/fdpd/tx";
import { MsgDeleteDelegationConditions } from "./types/fdpd/tx";
import { MsgCheckDelegation } from "./types/fdpd/tx";
import { MsgDeleteSelectionCriteria } from "./types/fdpd/tx";
import { MsgCreateSelectionCriteria } from "./types/fdpd/tx";
import { MsgCreateForwardPolicy } from "./types/fdpd/tx";
import { MsgSendRequestDelegation } from "./types/fdpd/tx";
import { MsgCreateLocalDomain } from "./types/fdpd/tx";
import { MsgUpdatePermission } from "./types/fdpd/tx";
import { MsgUpdateDelegationConditions } from "./types/fdpd/tx";
import { MsgConfigureLocalDomain } from "./types/fdpd/tx";
import { MsgUpdateDelegationDecision } from "./types/fdpd/tx";
import { MsgDeleteValidity } from "./types/fdpd/tx";
import { MsgUpdateForwardPolicy } from "./types/fdpd/tx";
import { MsgDeleteForwardPolicy } from "./types/fdpd/tx";
import { MsgDeleteDomain } from "./types/fdpd/tx";
import { MsgCreateValidity } from "./types/fdpd/tx";


const types = [
  ["/delegationcontrol.fdpd.MsgUpdateValidity", MsgUpdateValidity],
  ["/delegationcontrol.fdpd.MsgUpdateSelectionPolicy", MsgUpdateSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteSelectionPolicy", MsgDeleteSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgCreatePermission", MsgCreatePermission],
  ["/delegationcontrol.fdpd.MsgUpdateDecisionPolicy", MsgUpdateDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteLocalDomain", MsgDeleteLocalDomain],
  ["/delegationcontrol.fdpd.MsgCreateSelectionPolicy", MsgCreateSelectionPolicy],
  ["/delegationcontrol.fdpd.MsgCreateDomain", MsgCreateDomain],
  ["/delegationcontrol.fdpd.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/delegationcontrol.fdpd.MsgCreateDecisionPolicy", MsgCreateDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationDecision", MsgDeleteDelegationDecision],
  ["/delegationcontrol.fdpd.MsgUpdateSelectionCriteria", MsgUpdateSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgUpdateLocalDomain", MsgUpdateLocalDomain],
  ["/delegationcontrol.fdpd.MsgDeletePermission", MsgDeletePermission],
  ["/delegationcontrol.fdpd.MsgCreateDelegationConditions", MsgCreateDelegationConditions],
  ["/delegationcontrol.fdpd.MsgCreateDelegationDecision", MsgCreateDelegationDecision],
  ["/delegationcontrol.fdpd.MsgUpdateDomain", MsgUpdateDomain],
  ["/delegationcontrol.fdpd.MsgDeleteDecisionPolicy", MsgDeleteDecisionPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteDelegationConditions", MsgDeleteDelegationConditions],
  ["/delegationcontrol.fdpd.MsgCheckDelegation", MsgCheckDelegation],
  ["/delegationcontrol.fdpd.MsgDeleteSelectionCriteria", MsgDeleteSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgCreateSelectionCriteria", MsgCreateSelectionCriteria],
  ["/delegationcontrol.fdpd.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  ["/delegationcontrol.fdpd.MsgSendRequestDelegation", MsgSendRequestDelegation],
  ["/delegationcontrol.fdpd.MsgCreateLocalDomain", MsgCreateLocalDomain],
  ["/delegationcontrol.fdpd.MsgUpdatePermission", MsgUpdatePermission],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationConditions", MsgUpdateDelegationConditions],
  ["/delegationcontrol.fdpd.MsgConfigureLocalDomain", MsgConfigureLocalDomain],
  ["/delegationcontrol.fdpd.MsgUpdateDelegationDecision", MsgUpdateDelegationDecision],
  ["/delegationcontrol.fdpd.MsgDeleteValidity", MsgDeleteValidity],
  ["/delegationcontrol.fdpd.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/delegationcontrol.fdpd.MsgDeleteDomain", MsgDeleteDomain],
  ["/delegationcontrol.fdpd.MsgCreateValidity", MsgCreateValidity],
  
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
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgUpdateSelectionPolicy: (data: MsgUpdateSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateSelectionPolicy", value: MsgUpdateSelectionPolicy.fromPartial( data ) }),
    msgDeleteSelectionPolicy: (data: MsgDeleteSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteSelectionPolicy", value: MsgDeleteSelectionPolicy.fromPartial( data ) }),
    msgCreatePermission: (data: MsgCreatePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreatePermission", value: MsgCreatePermission.fromPartial( data ) }),
    msgUpdateDecisionPolicy: (data: MsgUpdateDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDecisionPolicy", value: MsgUpdateDecisionPolicy.fromPartial( data ) }),
    msgDeleteLocalDomain: (data: MsgDeleteLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteLocalDomain", value: MsgDeleteLocalDomain.fromPartial( data ) }),
    msgCreateSelectionPolicy: (data: MsgCreateSelectionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateSelectionPolicy", value: MsgCreateSelectionPolicy.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgCreateDecisionPolicy: (data: MsgCreateDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDecisionPolicy", value: MsgCreateDecisionPolicy.fromPartial( data ) }),
    msgDeleteDelegationDecision: (data: MsgDeleteDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationDecision", value: MsgDeleteDelegationDecision.fromPartial( data ) }),
    msgUpdateSelectionCriteria: (data: MsgUpdateSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateSelectionCriteria", value: MsgUpdateSelectionCriteria.fromPartial( data ) }),
    msgUpdateLocalDomain: (data: MsgUpdateLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateLocalDomain", value: MsgUpdateLocalDomain.fromPartial( data ) }),
    msgDeletePermission: (data: MsgDeletePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeletePermission", value: MsgDeletePermission.fromPartial( data ) }),
    msgCreateDelegationConditions: (data: MsgCreateDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationConditions", value: MsgCreateDelegationConditions.fromPartial( data ) }),
    msgCreateDelegationDecision: (data: MsgCreateDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateDelegationDecision", value: MsgCreateDelegationDecision.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgDeleteDecisionPolicy: (data: MsgDeleteDecisionPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDecisionPolicy", value: MsgDeleteDecisionPolicy.fromPartial( data ) }),
    msgDeleteDelegationConditions: (data: MsgDeleteDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDelegationConditions", value: MsgDeleteDelegationConditions.fromPartial( data ) }),
    msgCheckDelegation: (data: MsgCheckDelegation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCheckDelegation", value: MsgCheckDelegation.fromPartial( data ) }),
    msgDeleteSelectionCriteria: (data: MsgDeleteSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteSelectionCriteria", value: MsgDeleteSelectionCriteria.fromPartial( data ) }),
    msgCreateSelectionCriteria: (data: MsgCreateSelectionCriteria): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateSelectionCriteria", value: MsgCreateSelectionCriteria.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    msgSendRequestDelegation: (data: MsgSendRequestDelegation): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgSendRequestDelegation", value: MsgSendRequestDelegation.fromPartial( data ) }),
    msgCreateLocalDomain: (data: MsgCreateLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateLocalDomain", value: MsgCreateLocalDomain.fromPartial( data ) }),
    msgUpdatePermission: (data: MsgUpdatePermission): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdatePermission", value: MsgUpdatePermission.fromPartial( data ) }),
    msgUpdateDelegationConditions: (data: MsgUpdateDelegationConditions): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationConditions", value: MsgUpdateDelegationConditions.fromPartial( data ) }),
    msgConfigureLocalDomain: (data: MsgConfigureLocalDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgConfigureLocalDomain", value: MsgConfigureLocalDomain.fromPartial( data ) }),
    msgUpdateDelegationDecision: (data: MsgUpdateDelegationDecision): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateDelegationDecision", value: MsgUpdateDelegationDecision.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/delegationcontrol.fdpd.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    
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
