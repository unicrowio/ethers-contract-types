import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type EscrowStruct = {
    buyer: string;
    challengeExtension: BigNumberish;
    seller: string;
    challengePeriodStart: BigNumberish;
    marketplace: string;
    marketplaceFee: BigNumberish;
    challengePeriodEnd: BigNumberish;
    currency: string;
    claimed: BigNumberish;
    consensus: [BigNumberish, BigNumberish];
    split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
    amount: BigNumberish;
};
export type EscrowStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    number,
    [
        number,
        number
    ],
    [
        number,
        number,
        number,
        number
    ],
    BigNumber
] & {
    buyer: string;
    challengeExtension: BigNumber;
    seller: string;
    challengePeriodStart: BigNumber;
    marketplace: string;
    marketplaceFee: BigNumber;
    challengePeriodEnd: BigNumber;
    currency: string;
    claimed: number;
    consensus: [number, number];
    split: [number, number, number, number];
    amount: BigNumber;
};
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
export interface UnicrowArbitratorInterface extends utils.Interface {
    contractName: "UnicrowArbitrator";
    functions: {
        "approveArbitrator(uint256,address,uint16)": FunctionFragment;
        "arbitrate(uint256,uint16[2])": FunctionFragment;
        "arbitrationCalculation(uint16[5])": FunctionFragment;
        "escrowArbitrator(uint256)": FunctionFragment;
        "getArbitratorData(uint256)": FunctionFragment;
        "proposeArbitrator(uint256,address,uint16)": FunctionFragment;
        "setArbitrator(uint256,address,uint16)": FunctionFragment;
        "unicrow()": FunctionFragment;
        "unicrowClaim()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "approveArbitrator", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "arbitrate", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "arbitrationCalculation", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "escrowArbitrator", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getArbitratorData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposeArbitrator", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setArbitrator", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unicrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowClaim", values?: undefined): string;
    decodeFunctionResult(functionFragment: "approveArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCalculation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArbitratorData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowClaim", data: BytesLike): Result;
    events: {
        "Arbitrated(uint256,tuple,uint256,uint256[5])": EventFragment;
        "ArbitratorApproved(uint256,address,uint256)": EventFragment;
        "ArbitratorProposed(uint256,address,uint16,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Arbitrated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ArbitratorApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ArbitratorProposed"): EventFragment;
}
export type ArbitratedEvent = TypedEvent<[
    BigNumber,
    EscrowStructOutput,
    BigNumber,
    [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ]
], {
    escrowId: BigNumber;
    escrow: EscrowStructOutput;
    blockTime: BigNumber;
    amounts: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
}>;
export type ArbitratedEventFilter = TypedEventFilter<ArbitratedEvent>;
export type ArbitratorApprovedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    escrowId: BigNumber;
    arbitrator: string;
    arbitratorFee: BigNumber;
}>;
export type ArbitratorApprovedEventFilter = TypedEventFilter<ArbitratorApprovedEvent>;
export type ArbitratorProposedEvent = TypedEvent<[
    BigNumber,
    string,
    number,
    string
], {
    escrowId: BigNumber;
    arbitrator: string;
    arbitratorFee: number;
    proposer: string;
}>;
export type ArbitratorProposedEventFilter = TypedEventFilter<ArbitratorProposedEvent>;
export interface UnicrowArbitrator extends BaseContract {
    contractName: "UnicrowArbitrator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UnicrowArbitratorInterface;
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
        arbitrationCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<[[number, number, number, number, number]]>;
        escrowArbitrator(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        }>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<[ArbitratorStructOutput]>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unicrow(overrides?: CallOverrides): Promise<[string]>;
        unicrowClaim(overrides?: CallOverrides): Promise<[string]>;
    };
    approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    arbitrationCalculation(currentSplit: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ], overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
    escrowArbitrator(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
    }>;
    getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<ArbitratorStructOutput>;
    proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unicrow(overrides?: CallOverrides): Promise<string>;
    unicrowClaim(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: CallOverrides): Promise<void>;
        arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        arbitrationCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
        escrowArbitrator(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        }>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<ArbitratorStructOutput>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unicrow(overrides?: CallOverrides): Promise<string>;
        unicrowClaim(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Arbitrated(uint256,tuple,uint256,uint256[5])"(escrowId?: BigNumberish | null, escrow?: null, blockTime?: null, amounts?: null): ArbitratedEventFilter;
        Arbitrated(escrowId?: BigNumberish | null, escrow?: null, blockTime?: null, amounts?: null): ArbitratedEventFilter;
        "ArbitratorApproved(uint256,address,uint256)"(escrowId?: BigNumberish | null, arbitrator?: null, arbitratorFee?: null): ArbitratorApprovedEventFilter;
        ArbitratorApproved(escrowId?: BigNumberish | null, arbitrator?: null, arbitratorFee?: null): ArbitratorApprovedEventFilter;
        "ArbitratorProposed(uint256,address,uint16,address)"(escrowId?: BigNumberish | null, arbitrator?: null, arbitratorFee?: null, proposer?: null): ArbitratorProposedEventFilter;
        ArbitratorProposed(escrowId?: BigNumberish | null, arbitrator?: null, arbitratorFee?: null, proposer?: null): ArbitratorProposedEventFilter;
    };
    estimateGas: {
        approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        arbitrationCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<BigNumber>;
        escrowArbitrator(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unicrow(overrides?: CallOverrides): Promise<BigNumber>;
        unicrowClaim(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approveArbitrator(escrowId: BigNumberish, validationAddress: string, validation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        arbitrate(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        arbitrationCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        escrowArbitrator(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getArbitratorData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setArbitrator(escrowId: BigNumberish, arbitrator: string, arbitratorFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unicrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
