import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export type EscrowStruct = {
    buyer: AddressLike;
    challengeExtension: BigNumberish;
    seller: AddressLike;
    challengePeriodStart: BigNumberish;
    marketplace: AddressLike;
    marketplaceFee: BigNumberish;
    challengePeriodEnd: BigNumberish;
    currency: AddressLike;
    claimed: BigNumberish;
    consensus: [BigNumberish, BigNumberish];
    split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
    amount: BigNumberish;
};
export type EscrowStructOutput = [
    buyer: string,
    challengeExtension: bigint,
    seller: string,
    challengePeriodStart: bigint,
    marketplace: string,
    marketplaceFee: bigint,
    challengePeriodEnd: bigint,
    currency: string,
    claimed: bigint,
    consensus: [bigint, bigint],
    split: [bigint, bigint, bigint, bigint],
    amount: bigint
] & {
    buyer: string;
    challengeExtension: bigint;
    seller: string;
    challengePeriodStart: bigint;
    marketplace: string;
    marketplaceFee: bigint;
    challengePeriodEnd: bigint;
    currency: string;
    claimed: bigint;
    consensus: [bigint, bigint];
    split: [bigint, bigint, bigint, bigint];
    amount: bigint;
};
export type SettlementStruct = {
    latestSettlementOfferBy: AddressLike;
    latestSettlementOffer: [BigNumberish, BigNumberish];
};
export type SettlementStructOutput = [
    latestSettlementOfferBy: string,
    latestSettlementOffer: [bigint, bigint]
] & {
    latestSettlementOfferBy: string;
    latestSettlementOffer: [bigint, bigint];
};
export interface UnicrowDisputeInterface extends Interface {
    getFunction(nameOrSignature: "approveSettlement" | "challenge" | "getSettlementDetails" | "latestSettlementOffer" | "latestSettlementOfferBy" | "offerSettlement" | "unicrow" | "unicrowArbitrator" | "unicrowClaim"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ApproveOffer" | "Challenge" | "SettlementOffer"): EventFragment;
    encodeFunctionData(functionFragment: "approveSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "challenge", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSettlementDetails", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestSettlementOffer", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestSettlementOfferBy", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "offerSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "unicrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowClaim", values?: undefined): string;
    decodeFunctionResult(functionFragment: "approveSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlementDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestSettlementOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestSettlementOfferBy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offerSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowClaim", data: BytesLike): Result;
}
export declare namespace ApproveOfferEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        escrow: EscrowStruct,
        latestSettlementOffer: [BigNumberish, BigNumberish],
        blockTime: BigNumberish,
        amounts: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ];
    type OutputTuple = [
        escrowId: bigint,
        escrow: EscrowStructOutput,
        latestSettlementOffer: [bigint, bigint],
        blockTime: bigint,
        amounts: [bigint, bigint, bigint, bigint, bigint]
    ];
    interface OutputObject {
        escrowId: bigint;
        escrow: EscrowStructOutput;
        latestSettlementOffer: [bigint, bigint];
        blockTime: bigint;
        amounts: [bigint, bigint, bigint, bigint, bigint];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChallengeEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        blockTime: BigNumberish,
        escrow: EscrowStruct
    ];
    type OutputTuple = [
        escrowId: bigint,
        blockTime: bigint,
        escrow: EscrowStructOutput
    ];
    interface OutputObject {
        escrowId: bigint;
        blockTime: bigint;
        escrow: EscrowStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SettlementOfferEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        blockTime: BigNumberish,
        latestSettlementOffer: [BigNumberish, BigNumberish],
        latestSettlementOfferBy: AddressLike
    ];
    type OutputTuple = [
        escrowId: bigint,
        blockTime: bigint,
        latestSettlementOffer: [bigint, bigint],
        latestSettlementOfferBy: string
    ];
    interface OutputObject {
        escrowId: bigint;
        blockTime: bigint;
        latestSettlementOffer: [bigint, bigint];
        latestSettlementOfferBy: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface UnicrowDispute extends BaseContract {
    connect(runner?: ContractRunner | null): BaseContract;
    attach(addressOrName: AddressLike): this;
    deployed(): Promise<this>;
    interface: UnicrowDisputeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    approveSettlement: TypedContractMethod<[
        escrowId: BigNumberish,
        validation: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    challenge: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getSettlementDetails: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        SettlementStructOutput
    ], "view">;
    latestSettlementOffer: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    latestSettlementOfferBy: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        string
    ], "view">;
    offerSettlement: TypedContractMethod<[
        escrowId: BigNumberish,
        newSplit: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    unicrow: TypedContractMethod<[], [string], "view">;
    unicrowArbitrator: TypedContractMethod<[], [string], "view">;
    unicrowClaim: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "approveSettlement"): TypedContractMethod<[
        escrowId: BigNumberish,
        validation: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "challenge"): TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "getSettlementDetails"): TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        SettlementStructOutput
    ], "view">;
    getFunction(nameOrSignature: "latestSettlementOffer"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "latestSettlementOfferBy"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "offerSettlement"): TypedContractMethod<[
        escrowId: BigNumberish,
        newSplit: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unicrow"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unicrowArbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unicrowClaim"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "ApproveOffer"): TypedContractEvent<ApproveOfferEvent.InputTuple, ApproveOfferEvent.OutputTuple, ApproveOfferEvent.OutputObject>;
    getEvent(key: "Challenge"): TypedContractEvent<ChallengeEvent.InputTuple, ChallengeEvent.OutputTuple, ChallengeEvent.OutputObject>;
    getEvent(key: "SettlementOffer"): TypedContractEvent<SettlementOfferEvent.InputTuple, SettlementOfferEvent.OutputTuple, SettlementOfferEvent.OutputObject>;
    filters: {
        "ApproveOffer(uint256,tuple,uint16[2],uint256,uint256[5])": TypedContractEvent<ApproveOfferEvent.InputTuple, ApproveOfferEvent.OutputTuple, ApproveOfferEvent.OutputObject>;
        ApproveOffer: TypedContractEvent<ApproveOfferEvent.InputTuple, ApproveOfferEvent.OutputTuple, ApproveOfferEvent.OutputObject>;
        "Challenge(uint256,uint256,tuple)": TypedContractEvent<ChallengeEvent.InputTuple, ChallengeEvent.OutputTuple, ChallengeEvent.OutputObject>;
        Challenge: TypedContractEvent<ChallengeEvent.InputTuple, ChallengeEvent.OutputTuple, ChallengeEvent.OutputObject>;
        "SettlementOffer(uint256,uint256,uint16[2],address)": TypedContractEvent<SettlementOfferEvent.InputTuple, SettlementOfferEvent.OutputTuple, SettlementOfferEvent.OutputObject>;
        SettlementOffer: TypedContractEvent<SettlementOfferEvent.InputTuple, SettlementOfferEvent.OutputTuple, SettlementOfferEvent.OutputObject>;
    };
}
