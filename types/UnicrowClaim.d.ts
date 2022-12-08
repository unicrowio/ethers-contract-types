import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
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
        BigNumber,
        [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]
    ] & {
        escrowId: BigNumber;
        amount: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
    };
}
export interface UnicrowClaimInterface extends utils.Interface {
    contractName: "UnicrowClaim";
    functions: {
        "claim(uint256[])": FunctionFragment;
        "crowRewards()": FunctionFragment;
        "protocolFeeAddress()": FunctionFragment;
        "singleClaim(uint256)": FunctionFragment;
        "stakingRewards()": FunctionFragment;
        "unicrow()": FunctionFragment;
        "unicrowArbitrator()": FunctionFragment;
        "updateCrowRewards(address)": FunctionFragment;
        "updateProtocolFeeAddress(address)": FunctionFragment;
        "updateStakingRewards(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "crowRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "singleClaim", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakingRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCrowRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "updateProtocolFeeAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "updateStakingRewards", values: [string]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crowRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "singleClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCrowRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFeeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakingRewards", data: BytesLike): Result;
    events: {
        "Claim(tuple[])": EventFragment;
        "SingleClaim(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SingleClaim"): EventFragment;
}
export type ClaimEvent = TypedEvent<[
    UnicrowClaim.ClaimEventStructOutput[]
], {
    escrows: UnicrowClaim.ClaimEventStructOutput[];
}>;
export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export type SingleClaimEvent = TypedEvent<[
    UnicrowClaim.ClaimEventStructOutput
], {
    escrow: UnicrowClaim.ClaimEventStructOutput;
}>;
export type SingleClaimEventFilter = TypedEventFilter<SingleClaimEvent>;
export interface UnicrowClaim extends BaseContract {
    contractName: "UnicrowClaim";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UnicrowClaimInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        claim(escrows: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        crowRewards(overrides?: CallOverrides): Promise<[string]>;
        protocolFeeAddress(overrides?: CallOverrides): Promise<[string]>;
        singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakingRewards(overrides?: CallOverrides): Promise<[string]>;
        unicrow(overrides?: CallOverrides): Promise<[string]>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<[string]>;
        updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateStakingRewards(stakingRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claim(escrows: BigNumberish[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    crowRewards(overrides?: CallOverrides): Promise<string>;
    protocolFeeAddress(overrides?: CallOverrides): Promise<string>;
    singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakingRewards(overrides?: CallOverrides): Promise<string>;
    unicrow(overrides?: CallOverrides): Promise<string>;
    unicrowArbitrator(overrides?: CallOverrides): Promise<string>;
    updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateStakingRewards(stakingRewards_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(escrows: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        crowRewards(overrides?: CallOverrides): Promise<string>;
        protocolFeeAddress(overrides?: CallOverrides): Promise<string>;
        singleClaim(escrowId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        stakingRewards(overrides?: CallOverrides): Promise<string>;
        unicrow(overrides?: CallOverrides): Promise<string>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<string>;
        updateCrowRewards(crowRewards_: string, overrides?: CallOverrides): Promise<void>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: CallOverrides): Promise<void>;
        updateStakingRewards(stakingRewards_: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Claim(tuple[])"(escrows?: null): ClaimEventFilter;
        Claim(escrows?: null): ClaimEventFilter;
        "SingleClaim(tuple)"(escrow?: null): SingleClaimEventFilter;
        SingleClaim(escrow?: null): SingleClaimEventFilter;
    };
    estimateGas: {
        claim(escrows: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        crowRewards(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakingRewards(overrides?: CallOverrides): Promise<BigNumber>;
        unicrow(overrides?: CallOverrides): Promise<BigNumber>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<BigNumber>;
        updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateStakingRewards(stakingRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(escrows: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        crowRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFeeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakingRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateStakingRewards(stakingRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
