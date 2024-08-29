import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
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
export interface IUnicrowArbitratorInterface extends Interface {
    getFunction(nameOrSignature: "approveArbitrator" | "arbitrate" | "getArbitratorData" | "proposeArbitrator" | "setArbitrator"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveArbitrator", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "arbitrate", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "getArbitratorData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposeArbitrator", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setArbitrator", values: [BigNumberish, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approveArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArbitratorData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setArbitrator", data: BytesLike): Result;
}
export interface IUnicrowArbitrator extends BaseContract {
    connect(runner?: ContractRunner | null): IUnicrowArbitrator;
    waitForDeployment(): Promise<this>;
    interface: IUnicrowArbitratorInterface;
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
        [bigint, bigint, bigint, bigint, bigint]
    ], "nonpayable">;
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
        [bigint, bigint, bigint, bigint, bigint]
    ], "nonpayable">;
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
    filters: {};
}
