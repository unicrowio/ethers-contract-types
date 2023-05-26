import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export declare namespace UnicrowClaim {
    type ClaimEventStruct = {
        escrowId: BigNumberish;
        amount: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ];
    };
    type ClaimEventStructOutput = [
        escrowId: bigint,
        amount: [bigint, bigint, bigint, bigint, bigint]
    ] & {
        escrowId: bigint;
        amount: [bigint, bigint, bigint, bigint, bigint];
    };
}
export interface UnicrowClaimInterface extends Interface {
    getFunction(nameOrSignature: "claim" | "claimMultiple" | "crowRewards" | "protocolFeeAddress" | "stakingRewards" | "unicrow" | "unicrowArbitrator" | "updateCrowRewards" | "updateProtocolFeeAddress" | "updateStakingRewards"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Claim" | "ClaimMultiple"): EventFragment;
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimMultiple", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "crowRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakingRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCrowRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateProtocolFeeAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateStakingRewards", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimMultiple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crowRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCrowRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFeeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakingRewards", data: BytesLike): Result;
}
export declare namespace ClaimEvent {
    type InputTuple = [escrow: UnicrowClaim.ClaimEventStruct];
    type OutputTuple = [escrow: UnicrowClaim.ClaimEventStructOutput];
    interface OutputObject {
        escrow: UnicrowClaim.ClaimEventStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ClaimMultipleEvent {
    type InputTuple = [escrows: UnicrowClaim.ClaimEventStruct[]];
    type OutputTuple = [escrows: UnicrowClaim.ClaimEventStructOutput[]];
    interface OutputObject {
        escrows: UnicrowClaim.ClaimEventStructOutput[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface UnicrowClaim extends BaseContract {
    connect(runner?: ContractRunner | null): BaseContract;
    attach(addressOrName: AddressLike): this;
    deployed(): Promise<this>;
    interface: UnicrowClaimInterface;
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
    crowRewards: TypedContractMethod<[], [string], "view">;
    protocolFeeAddress: TypedContractMethod<[], [string], "view">;
    stakingRewards: TypedContractMethod<[], [string], "view">;
    unicrow: TypedContractMethod<[], [string], "view">;
    unicrowArbitrator: TypedContractMethod<[], [string], "view">;
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
        stakingRewards_: AddressLike
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
    getFunction(nameOrSignature: "crowRewards"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "protocolFeeAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "stakingRewards"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unicrow"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unicrowArbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "updateCrowRewards"): TypedContractMethod<[crowRewards_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateProtocolFeeAddress"): TypedContractMethod<[
        protocolFeeAddress_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateStakingRewards"): TypedContractMethod<[stakingRewards_: AddressLike], [void], "nonpayable">;
    getEvent(key: "Claim"): TypedContractEvent<ClaimEvent.InputTuple, ClaimEvent.OutputTuple, ClaimEvent.OutputObject>;
    getEvent(key: "ClaimMultiple"): TypedContractEvent<ClaimMultipleEvent.InputTuple, ClaimMultipleEvent.OutputTuple, ClaimMultipleEvent.OutputObject>;
    filters: {
        "Claim(tuple)": TypedContractEvent<ClaimEvent.InputTuple, ClaimEvent.OutputTuple, ClaimEvent.OutputObject>;
        Claim: TypedContractEvent<ClaimEvent.InputTuple, ClaimEvent.OutputTuple, ClaimEvent.OutputObject>;
        "ClaimMultiple(tuple[])": TypedContractEvent<ClaimMultipleEvent.InputTuple, ClaimMultipleEvent.OutputTuple, ClaimMultipleEvent.OutputObject>;
        ClaimMultiple: TypedContractEvent<ClaimMultipleEvent.InputTuple, ClaimMultipleEvent.OutputTuple, ClaimMultipleEvent.OutputObject>;
    };
}
