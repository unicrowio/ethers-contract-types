import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SafeERC20Interface extends utils.Interface {
    contractName: "SafeERC20";
    functions: {
        "safeDecimals(IERC20)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "safeDecimals", values: [string]): string;
    decodeFunctionResult(functionFragment: "safeDecimals", data: BytesLike): Result;
    events: {};
}
export interface SafeERC20 extends BaseContract {
    contractName: "SafeERC20";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafeERC20Interface;
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
        safeDecimals(token: string, overrides?: CallOverrides): Promise<[number]>;
    };
    safeDecimals(token: string, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        safeDecimals(token: string, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        safeDecimals(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        safeDecimals(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
