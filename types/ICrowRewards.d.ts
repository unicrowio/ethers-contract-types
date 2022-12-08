import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICrowRewardsInterface extends utils.Interface {
    contractName: "ICrowRewards";
    functions: {
        "claim()": FunctionFragment;
        "claimAndStake()": FunctionFragment;
        "distribute(address,address,uint256)": FunctionFragment;
        "reallocate(address[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "claim", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAndStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "distribute", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reallocate", values: [string[]]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAndStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reallocate", data: BytesLike): Result;
    events: {};
}
export interface ICrowRewards extends BaseContract {
    contractName: "ICrowRewards";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICrowRewardsInterface;
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
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimAndStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reallocate(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claim(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimAndStake(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reallocate(addresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(overrides?: CallOverrides): Promise<void>;
        claimAndStake(overrides?: CallOverrides): Promise<void>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        reallocate(addresses: string[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimAndStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reallocate(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimAndStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reallocate(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
