import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
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
    paymentReference: string;
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
    amount: bigint,
    paymentReference: string
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
    paymentReference: string;
};
export type EscrowInputStruct = {
    buyer: AddressLike;
    seller: AddressLike;
    marketplace: AddressLike;
    marketplaceFee: BigNumberish;
    currency: AddressLike;
    challengePeriod: BigNumberish;
    challengeExtension: BigNumberish;
    amount: BigNumberish;
    paymentReference: string;
};
export type EscrowInputStructOutput = [
    buyer: string,
    seller: string,
    marketplace: string,
    marketplaceFee: bigint,
    currency: string,
    challengePeriod: bigint,
    challengeExtension: bigint,
    amount: bigint,
    paymentReference: string
] & {
    buyer: string;
    seller: string;
    marketplace: string;
    marketplaceFee: bigint;
    currency: string;
    challengePeriod: bigint;
    challengeExtension: bigint;
    amount: bigint;
    paymentReference: string;
};
export interface IUnicrowInterface extends Interface {
    getFunction(nameOrSignature: "challenge" | "getEscrow" | "pay" | "refund" | "release" | "setClaimed" | "settle" | "splitCalculation" | "updateEscrowFee" | "updateGovernance"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "getEscrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pay", values: [EscrowInputStruct, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "refund", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "release", values: [BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "updateEscrowFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateGovernance", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitCalculation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEscrowFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGovernance", data: BytesLike): Result;
}
export interface IUnicrow extends BaseContract {
    connect(runner?: ContractRunner | null): IUnicrow;
    waitForDeployment(): Promise<this>;
    interface: IUnicrowInterface;
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
    getEscrow: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        EscrowStructOutput
    ], "nonpayable">;
    pay: TypedContractMethod<[
        input: EscrowInputStruct,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        bigint
    ], "payable">;
    refund: TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    release: TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
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
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "getEscrow"): TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        EscrowStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "pay"): TypedContractMethod<[
        input: EscrowInputStruct,
        arbitrator: AddressLike,
        arbitratorFee: BigNumberish
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "refund"): TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "release"): TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
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
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateEscrowFee"): TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateGovernance"): TypedContractMethod<[governance: AddressLike], [void], "nonpayable">;
    filters: {};
}
