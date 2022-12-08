import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUnicrowClaimInterface extends utils.Interface {
    contractName: "IUnicrowClaim";
    functions: {
        "claim(uint256[])": FunctionFragment;
        "singleClaim(uint256)": FunctionFragment;
        "updateCrowRewards(address)": FunctionFragment;
        "updateProtocolFeeAddress(address)": FunctionFragment;
        "updateStakingRewards(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "singleClaim", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateCrowRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "updateProtocolFeeAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "updateStakingRewards", values: [string]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "singleClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCrowRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFeeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakingRewards", data: BytesLike): Result;
    events: {};
}
export interface IUnicrowClaim extends BaseContract {
    contractName: "IUnicrowClaim";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUnicrowClaimInterface;
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
        singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateStakingRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claim(escrows: BigNumberish[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateStakingRewards(crowRewards_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(escrows: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        singleClaim(escrowId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        updateCrowRewards(crowRewards_: string, overrides?: CallOverrides): Promise<void>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: CallOverrides): Promise<void>;
        updateStakingRewards(crowRewards_: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        claim(escrows: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateStakingRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(escrows: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        singleClaim(escrowId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateCrowRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateProtocolFeeAddress(protocolFeeAddress_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateStakingRewards(crowRewards_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
