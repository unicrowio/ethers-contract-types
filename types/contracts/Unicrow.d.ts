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
export type TokenStruct = {
    address_: AddressLike;
    decimals: BigNumberish;
    symbol: string;
};
export type TokenStructOutput = [
    address_: string,
    decimals: bigint,
    symbol: string
] & {
    address_: string;
    decimals: bigint;
    symbol: string;
};
export type DataStruct = {
    escrow: EscrowStruct;
    arbitrator: ArbitratorStruct;
    settlement: SettlementStruct;
    token: TokenStruct;
};
export type DataStructOutput = [
    escrow: EscrowStructOutput,
    arbitrator: ArbitratorStructOutput,
    settlement: SettlementStructOutput,
    token: TokenStructOutput
] & {
    escrow: EscrowStructOutput;
    arbitrator: ArbitratorStructOutput;
    settlement: SettlementStructOutput;
    token: TokenStructOutput;
};
export type EscrowInputStruct = {
    seller: AddressLike;
    marketplace: AddressLike;
    marketplaceFee: BigNumberish;
    currency: AddressLike;
    challengePeriod: BigNumberish;
    challengeExtension: BigNumberish;
    amount: BigNumberish;
};
export type EscrowInputStructOutput = [
    seller: string,
    marketplace: string,
    marketplaceFee: bigint,
    currency: string,
    challengePeriod: bigint,
    challengeExtension: bigint,
    amount: bigint
] & {
    seller: string;
    marketplace: string;
    marketplaceFee: bigint;
    currency: string;
    challengePeriod: bigint;
    challengeExtension: bigint;
    amount: bigint;
};
export interface UnicrowInterface extends Interface {
    getFunction(nameOrSignature: "challenge" | "escrowIdCounter" | "getAllEscrowData" | "getEscrow" | "governanceAddress" | "pay" | "protocolFee" | "refund" | "release" | "sendEscrowShare" | "setClaimed" | "settle" | "splitCalculation" | "unicrowArbitrator" | "unicrowClaim" | "unicrowDispute" | "updateEscrowFee" | "updateGovernance"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Pay" | "Refund" | "Release"): EventFragment;
    encodeFunctionData(functionFragment: "challenge", values: [
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        [
            BigNumberish,
            BigNumberish
        ],
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "escrowIdCounter", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllEscrowData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getEscrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "pay", values: [EscrowInputStruct, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "refund", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "release", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendEscrowShare", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "setClaimed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "settle", values: [
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        [
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "splitCalculation", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "unicrowArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowDispute", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateEscrowFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateGovernance", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escrowIdCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllEscrowData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendEscrowShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitCalculation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEscrowFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGovernance", data: BytesLike): Result;
}
export declare namespace PayEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        blockTime: BigNumberish,
        escrow: EscrowStruct,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish,
        challengePeriod: BigNumberish
    ];
    type OutputTuple = [
        escrowId: bigint,
        blockTime: bigint,
        escrow: EscrowStructOutput,
        arbitrator: string,
        arbitratorFee: bigint,
        challengePeriod: bigint
    ];
    interface OutputObject {
        escrowId: bigint;
        blockTime: bigint;
        escrow: EscrowStructOutput;
        arbitrator: string;
        arbitratorFee: bigint;
        challengePeriod: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RefundEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        escrow: EscrowStruct,
        blockTime: BigNumberish
    ];
    type OutputTuple = [
        escrowId: bigint,
        escrow: EscrowStructOutput,
        blockTime: bigint
    ];
    interface OutputObject {
        escrowId: bigint;
        escrow: EscrowStructOutput;
        blockTime: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReleaseEvent {
    type InputTuple = [
        escrowId: BigNumberish,
        blockTime: BigNumberish,
        escrow: EscrowStruct,
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
        blockTime: bigint,
        escrow: EscrowStructOutput,
        amounts: [bigint, bigint, bigint, bigint, bigint]
    ];
    interface OutputObject {
        escrowId: bigint;
        blockTime: bigint;
        escrow: EscrowStructOutput;
        amounts: [bigint, bigint, bigint, bigint, bigint];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Unicrow extends BaseContract {
    connect(runner?: ContractRunner | null): BaseContract;
    attach(addressOrName: AddressLike): this;
    deployed(): Promise<this>;
    interface: UnicrowInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    challenge: TypedContractMethod<[
        escrowId: BigNumberish,
        split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        consensus: [BigNumberish, BigNumberish],
        challengeStart: BigNumberish,
        challengeEnd: BigNumberish
    ], [
        void
    ], "nonpayable">;
    escrowIdCounter: TypedContractMethod<[], [bigint], "view">;
    getAllEscrowData: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        DataStructOutput
    ], "view">;
    getEscrow: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        EscrowStructOutput
    ], "view">;
    governanceAddress: TypedContractMethod<[], [string], "view">;
    pay: TypedContractMethod<[
        input: EscrowInputStruct,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        void
    ], "payable">;
    protocolFee: TypedContractMethod<[], [bigint], "view">;
    refund: TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    release: TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    sendEscrowShare: TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish,
        currency: AddressLike
    ], [
        void
    ], "nonpayable">;
    setClaimed: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    settle: TypedContractMethod<[
        escrowId: BigNumberish,
        split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        consensus: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    splitCalculation: TypedContractMethod<[
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
    unicrowArbitrator: TypedContractMethod<[], [string], "view">;
    unicrowClaim: TypedContractMethod<[], [string], "view">;
    unicrowDispute: TypedContractMethod<[], [string], "view">;
    updateEscrowFee: TypedContractMethod<[
        fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateGovernance: TypedContractMethod<[
        governance: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "challenge"): TypedContractMethod<[
        escrowId: BigNumberish,
        split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        consensus: [BigNumberish, BigNumberish],
        challengeStart: BigNumberish,
        challengeEnd: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "escrowIdCounter"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getAllEscrowData"): TypedContractMethod<[escrowId: BigNumberish], [DataStructOutput], "view">;
    getFunction(nameOrSignature: "getEscrow"): TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        EscrowStructOutput
    ], "view">;
    getFunction(nameOrSignature: "governanceAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pay"): TypedContractMethod<[
        input: EscrowInputStruct,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "protocolFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "refund"): TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "release"): TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "sendEscrowShare"): TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish,
        currency: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setClaimed"): TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "settle"): TypedContractMethod<[
        escrowId: BigNumberish,
        split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        consensus: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "splitCalculation"): TypedContractMethod<[
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
    getFunction(nameOrSignature: "unicrowArbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unicrowClaim"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unicrowDispute"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "updateEscrowFee"): TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateGovernance"): TypedContractMethod<[governance: AddressLike], [void], "nonpayable">;
    getEvent(key: "Pay"): TypedContractEvent<PayEvent.InputTuple, PayEvent.OutputTuple, PayEvent.OutputObject>;
    getEvent(key: "Refund"): TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
    getEvent(key: "Release"): TypedContractEvent<ReleaseEvent.InputTuple, ReleaseEvent.OutputTuple, ReleaseEvent.OutputObject>;
    filters: {
        "Pay(uint256,uint256,tuple,address,uint256,uint256)": TypedContractEvent<PayEvent.InputTuple, PayEvent.OutputTuple, PayEvent.OutputObject>;
        Pay: TypedContractEvent<PayEvent.InputTuple, PayEvent.OutputTuple, PayEvent.OutputObject>;
        "Refund(uint256,tuple,uint256)": TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
        Refund: TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
        "Release(uint256,uint256,tuple,uint256[5])": TypedContractEvent<ReleaseEvent.InputTuple, ReleaseEvent.OutputTuple, ReleaseEvent.OutputObject>;
        Release: TypedContractEvent<ReleaseEvent.InputTuple, ReleaseEvent.OutputTuple, ReleaseEvent.OutputObject>;
    };
}
