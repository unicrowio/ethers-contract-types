import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ArbitratorStruct = {
    arbitrator: string;
    arbitratorFee: BigNumberish;
    sellerConsensus: boolean;
    buyerConsensus: boolean;
    arbitrated: boolean;
};
export type ArbitratorStructOutput = [
    string,
    number,
    boolean,
    boolean,
    boolean
] & {
    arbitrator: string;
    arbitratorFee: number;
    sellerConsensus: boolean;
    buyerConsensus: boolean;
    arbitrated: boolean;
};
export interface IUnicrowArbitratorInterface extends utils.Interface {
    contractName: "IUnicrowArbitrator";
    functions: {
        "approveArbitrator(uint256,address,uint16)": FunctionFragment;
        "arbitrate(uint256,uint16[2])": FunctionFragment;
        "getArbitratorData(uint256)": FunctionFragment;
        "proposeArbitrator(uint256,address,uint16)": FunctionFragment;
        "setArbitrator(uint256,address,uint16)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "approveArbitrator", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "arbitrate", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "getArbitratorData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposeArbitrator", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setArbitrator", values: [BigNumberish, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approveArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArbitratorData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setArbitrator", data: BytesLike): Result;
    events: {};
}
export interface IUnicrowArbitrator extends BaseContract {
    contractName: "IUnicrowArbitrator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUnicrowArbitratorInterface;
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
        approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<[ArbitratorStructOutput]>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<ArbitratorStructOutput>;
    proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: CallOverrides): Promise<void>;
        arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<ArbitratorStructOutput>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
