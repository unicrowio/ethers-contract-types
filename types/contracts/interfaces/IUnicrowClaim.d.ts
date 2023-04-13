import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IUnicrowClaimInterface extends Interface {
    getFunction(nameOrSignature: "claim" | "claimMultiple" | "updateCrowRewards" | "updateProtocolFeeAddress" | "updateStakingRewards"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimMultiple", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "updateCrowRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateProtocolFeeAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateStakingRewards", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimMultiple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCrowRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFeeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakingRewards", data: BytesLike): Result;
}
export interface IUnicrowClaim extends BaseContract {
    connect(runner?: ContractRunner | null): BaseContract;
    attach(addressOrName: AddressLike): this;
    deployed(): Promise<this>;
    interface: IUnicrowClaimInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    claim: TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint, bigint]
    ], "nonpayable">;
    claimMultiple: TypedContractMethod<[
        escrows: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    updateCrowRewards: TypedContractMethod<[
        crowRewards_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateProtocolFeeAddress: TypedContractMethod<[
        protocolFeeAddress_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateStakingRewards: TypedContractMethod<[
        crowRewards_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "claim"): TypedContractMethod<[
        escrowId: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint, bigint]
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimMultiple"): TypedContractMethod<[escrows: BigNumberish[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateCrowRewards"): TypedContractMethod<[crowRewards_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateProtocolFeeAddress"): TypedContractMethod<[
        protocolFeeAddress_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateStakingRewards"): TypedContractMethod<[crowRewards_: AddressLike], [void], "nonpayable">;
    filters: {};
}
