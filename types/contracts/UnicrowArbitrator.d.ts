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
export type ArbitratorStruct = {
    arbitrator: AddressLike;
    arbitratorFee: BigNumberish;
    sellerConsensus: boolean;
    buyerConsensus: boolean;
    arbitrated: boolean;
};
export type ArbitratorStructOutput = [
    arbitrator: string,
    arbitratorFee: bigint,
    sellerConsensus: boolean,
    buyerConsensus: boolean,
    arbitrated: boolean
] & {
    arbitrator: string;
    arbitratorFee: bigint;
    sellerConsensus: boolean;
    buyerConsensus: boolean;
    arbitrated: boolean;
};
export interface UnicrowArbitratorInterface extends Interface {
    getFunction(nameOrSignature: "approveArbitrator" | "arbitrate" | "arbitrationCalculation" | "escrowArbitrator" | "getArbitratorData" | "proposeArbitrator" | "setArbitrator" | "unicrow" | "unicrowClaim"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Arbitrated" | "ArbitratorApproved" | "ArbitratorProposed"): EventFragment;
    encodeFunctionData(functionFragment: "approveArbitrator", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "arbitrate", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "arbitrationCalculation", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "escrowArbitrator", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getArbitratorData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposeArbitrator", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setArbitrator", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unicrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowClaim", values?: undefined): string;
    decodeFunctionResult(functionFragment: "approveArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCalculation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArbitratorData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowClaim", data: BytesLike): Result;
}
export declare namespace ArbitratedEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        escrow: EscrowStruct,
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
        blockTime: bigint,
        amounts: [bigint, bigint, bigint, bigint, bigint]
    ];
    interface OutputObject {
        escrowId: bigint;
        escrow: EscrowStructOutput;
        blockTime: bigint;
        amounts: [bigint, bigint, bigint, bigint, bigint];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ArbitratorApprovedEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ];
    type OutputTuple = [
        escrowId: bigint,
        arbitrator: string,
        arbitratorFee: bigint
    ];
    interface OutputObject {
        escrowId: bigint;
        arbitrator: string;
        arbitratorFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ArbitratorProposedEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish,
        proposer: AddressLike
    ];
    type OutputTuple = [
        escrowId: bigint,
        arbitrator: string,
        arbitratorFee: bigint,
        proposer: string
    ];
    interface OutputObject {
        escrowId: bigint;
        arbitrator: string;
        arbitratorFee: bigint;
        proposer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface UnicrowArbitrator extends BaseContract {
    connect(runner?: ContractRunner | null): BaseContract;
    attach(addressOrName: AddressLike): this;
    deployed(): Promise<this>;
    interface: UnicrowArbitratorInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    approveArbitrator: TypedContractMethod<[
        escrowId: BigNumberish,
        validationAddress: AddressLike,
        validation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    arbitrate: TypedContractMethod<[
        escrowId: BigNumberish,
        newSplit: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    arbitrationCalculation: TypedContractMethod<[
        currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ], [
        [bigint, bigint, bigint, bigint, bigint]
    ], "view">;
    escrowArbitrator: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            boolean,
            boolean,
            boolean
        ] & {
            arbitrator: string;
            arbitratorFee: bigint;
            sellerConsensus: boolean;
            buyerConsensus: boolean;
            arbitrated: boolean;
        }
    ], "view">;
    getArbitratorData: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        ArbitratorStructOutput
    ], "view">;
    proposeArbitrator: TypedContractMethod<[
        escrowId: BigNumberish,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setArbitrator: TypedContractMethod<[
        escrowId: BigNumberish,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    unicrow: TypedContractMethod<[], [string], "view">;
    unicrowClaim: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "approveArbitrator"): TypedContractMethod<[
        escrowId: BigNumberish,
        validationAddress: AddressLike,
        validation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "arbitrate"): TypedContractMethod<[
        escrowId: BigNumberish,
        newSplit: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "arbitrationCalculation"): TypedContractMethod<[
        currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ], [
        [bigint, bigint, bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "escrowArbitrator"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            boolean,
            boolean,
            boolean
        ] & {
            arbitrator: string;
            arbitratorFee: bigint;
            sellerConsensus: boolean;
            buyerConsensus: boolean;
            arbitrated: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "getArbitratorData"): TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        ArbitratorStructOutput
    ], "view">;
    getFunction(nameOrSignature: "proposeArbitrator"): TypedContractMethod<[
        escrowId: BigNumberish,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setArbitrator"): TypedContractMethod<[
        escrowId: BigNumberish,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unicrow"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unicrowClaim"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "Arbitrated"): TypedContractEvent<ArbitratedEvent.InputTuple, ArbitratedEvent.OutputTuple, ArbitratedEvent.OutputObject>;
    getEvent(key: "ArbitratorApproved"): TypedContractEvent<ArbitratorApprovedEvent.InputTuple, ArbitratorApprovedEvent.OutputTuple, ArbitratorApprovedEvent.OutputObject>;
    getEvent(key: "ArbitratorProposed"): TypedContractEvent<ArbitratorProposedEvent.InputTuple, ArbitratorProposedEvent.OutputTuple, ArbitratorProposedEvent.OutputObject>;
    filters: {
        "Arbitrated(uint256,tuple,uint256,uint256[5])": TypedContractEvent<ArbitratedEvent.InputTuple, ArbitratedEvent.OutputTuple, ArbitratedEvent.OutputObject>;
        Arbitrated: TypedContractEvent<ArbitratedEvent.InputTuple, ArbitratedEvent.OutputTuple, ArbitratedEvent.OutputObject>;
        "ArbitratorApproved(uint256,address,uint256)": TypedContractEvent<ArbitratorApprovedEvent.InputTuple, ArbitratorApprovedEvent.OutputTuple, ArbitratorApprovedEvent.OutputObject>;
        ArbitratorApproved: TypedContractEvent<ArbitratorApprovedEvent.InputTuple, ArbitratorApprovedEvent.OutputTuple, ArbitratorApprovedEvent.OutputObject>;
        "ArbitratorProposed(uint256,address,uint16,address)": TypedContractEvent<ArbitratorProposedEvent.InputTuple, ArbitratorProposedEvent.OutputTuple, ArbitratorProposedEvent.OutputObject>;
        ArbitratorProposed: TypedContractEvent<ArbitratorProposedEvent.InputTuple, ArbitratorProposedEvent.OutputTuple, ArbitratorProposedEvent.OutputObject>;
    };
}
