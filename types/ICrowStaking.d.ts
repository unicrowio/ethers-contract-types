import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICrowStakingInterface extends utils.Interface {
    contractName: "ICrowStaking";
    functions: {
        "activate()": FunctionFragment;
        "addToken(address)": FunctionFragment;
        "convert(address,uint24)": FunctionFragment;
        "deactivate(address[])": FunctionFragment;
        "harvest(address[])": FunctionFragment;
        "removeToken(address,uint256)": FunctionFragment;
        "setInactivityBurnPeriod(uint256)": FunctionFragment;
        "stake(uint256,address)": FunctionFragment;
        "unstake(uint256,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "activate", values?: undefined): string;
    encodeFunctionData(functionFragment: "addToken", values: [string]): string;
    encodeFunctionData(functionFragment: "convert", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deactivate", values: [string[]]): string;
    encodeFunctionData(functionFragment: "harvest", values: [string[]]): string;
    encodeFunctionData(functionFragment: "removeToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setInactivityBurnPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unstake", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deactivate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInactivityBurnPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
    events: {};
}
export interface ICrowStaking extends BaseContract {
    contractName: "ICrowStaking";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICrowStakingInterface;
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
        activate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deactivate(accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        harvest(tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    activate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addToken(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deactivate(accounts: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    harvest(tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stake(amount: BigNumberish, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        activate(overrides?: CallOverrides): Promise<void>;
        addToken(token: string, overrides?: CallOverrides): Promise<void>;
        convert(token: string, pollFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deactivate(accounts: string[], overrides?: CallOverrides): Promise<void>;
        harvest(tokens: string[], overrides?: CallOverrides): Promise<void>;
        removeToken(token: string, index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stake(amount: BigNumberish, account: string, overrides?: CallOverrides): Promise<void>;
        unstake(amount: BigNumberish, account: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        activate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deactivate(accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        harvest(tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        activate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deactivate(accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        harvest(tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}