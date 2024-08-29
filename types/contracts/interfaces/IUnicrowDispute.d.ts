import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IUnicrowDisputeInterface extends Interface {
    getFunction(nameOrSignature: "approveSettlement" | "challenge" | "offerSettlement"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "challenge", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "offerSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    decodeFunctionResult(functionFragment: "approveSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offerSettlement", data: BytesLike): Result;
}
export interface IUnicrowDispute extends BaseContract {
    connect(runner?: ContractRunner | null): IUnicrowDispute;
    waitForDeployment(): Promise<this>;
    interface: IUnicrowDisputeInterface;
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
    offerSettlement: TypedContractMethod<[
        escrowId: BigNumberish,
        newSplit: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "approveSettlement"): TypedContractMethod<[
        escrowId: BigNumberish,
        validation: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "challenge"): TypedContractMethod<[escrowId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "offerSettlement"): TypedContractMethod<[
        escrowId: BigNumberish,
        newSplit: [BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
