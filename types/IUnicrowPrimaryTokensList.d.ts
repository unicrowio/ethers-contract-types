import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUnicrowPrimaryTokensListInterface extends utils.Interface {
    contractName: "IUnicrowPrimaryTokensList";
    functions: {
        "addToken(string,address)": FunctionFragment;
        "removeToken(uint8)": FunctionFragment;
        "updateGovernance(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addToken", values: [string, string]): string;
    encodeFunctionData(functionFragment: "removeToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateGovernance", values: [string]): string;
    decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGovernance", data: BytesLike): Result;
    events: {};
}
export interface IUnicrowPrimaryTokensList extends BaseContract {
    contractName: "IUnicrowPrimaryTokensList";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUnicrowPrimaryTokensListInterface;
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
        addToken(symbol: string, currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeToken(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addToken(symbol: string, currency: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeToken(index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateGovernance(governance: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToken(symbol: string, currency: string, overrides?: CallOverrides): Promise<void>;
        removeToken(index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateGovernance(governance: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addToken(symbol: string, currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeToken(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToken(symbol: string, currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeToken(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
