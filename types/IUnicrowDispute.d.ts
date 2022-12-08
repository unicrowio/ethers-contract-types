import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUnicrowDisputeInterface extends utils.Interface {
    contractName: "IUnicrowDispute";
    functions: {
        "approveSettlement(uint256,uint16[2])": FunctionFragment;
        "challenge(uint256)": FunctionFragment;
        "offerSettlement(uint256,uint16[2])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "approveSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "challenge", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "offerSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    decodeFunctionResult(functionFragment: "approveSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offerSettlement", data: BytesLike): Result;
    events: {};
}
export interface IUnicrowDispute extends BaseContract {
    contractName: "IUnicrowDispute";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUnicrowDisputeInterface;
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
        approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        challenge(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    challenge(escrowId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        challenge(escrowId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        challenge(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        challenge(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
