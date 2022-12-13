import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export type SettlementStruct = {
    latestSettlementOfferBy: string;
    latestSettlementOffer: [BigNumberish, BigNumberish];
};
export type SettlementStructOutput = [string, [number, number]] & {
    latestSettlementOfferBy: string;
    latestSettlementOffer: [number, number];
};
export type TokenStruct = {
    address_: string;
    decimals: BigNumberish;
    symbol: string;
};
export type TokenStructOutput = [string, number, string] & {
    address_: string;
    decimals: number;
    symbol: string;
};
export type DataStruct = {
    escrow: EscrowStruct;
    arbitrator: ArbitratorStruct;
    settlement: SettlementStruct;
    token: TokenStruct;
};
export type DataStructOutput = [
    EscrowStructOutput,
    ArbitratorStructOutput,
    SettlementStructOutput,
    TokenStructOutput
] & {
    escrow: EscrowStructOutput;
    arbitrator: ArbitratorStructOutput;
    settlement: SettlementStructOutput;
    token: TokenStructOutput;
};
export type EscrowInputStruct = {
    seller: string;
    marketplace: string;
    marketplaceFee: BigNumberish;
    currency: string;
    challengePeriod: BigNumberish;
    challengeExtension: BigNumberish;
    amount: BigNumberish;
};
export type EscrowInputStructOutput = [
    string,
    string,
    number,
    string,
    number,
    number,
    BigNumber
] & {
    seller: string;
    marketplace: string;
    marketplaceFee: number;
    currency: string;
    challengePeriod: number;
    challengeExtension: number;
    amount: BigNumber;
};
export interface UnicrowInterface extends utils.Interface {
    contractName: "Unicrow";
    functions: {
        "challenge(uint256,uint16[4],int16[2],uint64,uint64)": FunctionFragment;
        "escrowIdCounter()": FunctionFragment;
        "getAllEscrowData(uint256)": FunctionFragment;
        "getEscrow(uint256)": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "pay((address,address,uint16,address,uint32,uint32,uint256),address,uint16)": FunctionFragment;
        "protocolFee()": FunctionFragment;
        "refund(uint256)": FunctionFragment;
        "release(uint256)": FunctionFragment;
        "sendEscrowShare(address,uint256,address)": FunctionFragment;
        "setClaimed(uint256)": FunctionFragment;
        "settle(uint256,uint16[4],int16[2])": FunctionFragment;
        "splitCalculation(uint16[5])": FunctionFragment;
        "unicrowArbitrator()": FunctionFragment;
        "unicrowClaim()": FunctionFragment;
        "unicrowDispute()": FunctionFragment;
        "updateEscrowFee(uint16)": FunctionFragment;
        "updateGovernance(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "challenge", values: [
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        [
            BigNumberish,
            BigNumberish
        ],
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "escrowIdCounter", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllEscrowData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getEscrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "pay", values: [EscrowInputStruct, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "refund", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "release", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendEscrowShare", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setClaimed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "settle", values: [
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        [
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "splitCalculation", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "unicrowArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowDispute", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateEscrowFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateGovernance", values: [string]): string;
    decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escrowIdCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllEscrowData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendEscrowShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitCalculation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEscrowFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGovernance", data: BytesLike): Result;
    events: {
        "Pay(uint256,uint256,tuple,address,uint256,uint256)": EventFragment;
        "Refund(uint256,tuple,uint256)": EventFragment;
        "Release(uint256,uint256,tuple,uint256[5])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Pay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Release"): EventFragment;
}
export type PayEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    EscrowStructOutput,
    string,
    BigNumber,
    BigNumber
], {
    escrowId: BigNumber;
    blockTime: BigNumber;
    escrow: EscrowStructOutput;
    arbitrator: string;
    arbitratorFee: BigNumber;
    challengePeriod: BigNumber;
}>;
export type PayEventFilter = TypedEventFilter<PayEvent>;
export type RefundEvent = TypedEvent<[
    BigNumber,
    EscrowStructOutput,
    BigNumber
], {
    escrowId: BigNumber;
    escrow: EscrowStructOutput;
    blockTime: BigNumber;
}>;
export type RefundEventFilter = TypedEventFilter<RefundEvent>;
export type ReleaseEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    EscrowStructOutput,
    [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ]
], {
    escrowId: BigNumber;
    blockTime: BigNumber;
    escrow: EscrowStructOutput;
    amounts: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
}>;
export type ReleaseEventFilter = TypedEventFilter<ReleaseEvent>;
export interface Unicrow extends BaseContract {
    contractName: "Unicrow";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UnicrowInterface;
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
        challenge(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], challengeStart: BigNumberish, challengeEnd: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        escrowIdCounter(overrides?: CallOverrides): Promise<[BigNumber] & {
            _value: BigNumber;
        }>;
        getAllEscrowData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<[DataStructOutput]>;
        getEscrow(escrowId: BigNumberish, overrides?: CallOverrides): Promise<[EscrowStructOutput]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string]>;
        pay(input: EscrowInputStruct, arbitrator: string, arbitratorFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        protocolFee(overrides?: CallOverrides): Promise<[number]>;
        refund(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        release(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendEscrowShare(to: string, amount: BigNumberish, currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimed(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        settle(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        splitCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<[[number, number, number, number, number]]>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<[string]>;
        unicrowClaim(overrides?: CallOverrides): Promise<[string]>;
        unicrowDispute(overrides?: CallOverrides): Promise<[string]>;
        updateEscrowFee(fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    challenge(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], challengeStart: BigNumberish, challengeEnd: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    escrowIdCounter(overrides?: CallOverrides): Promise<BigNumber>;
    getAllEscrowData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<DataStructOutput>;
    getEscrow(escrowId: BigNumberish, overrides?: CallOverrides): Promise<EscrowStructOutput>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    pay(input: EscrowInputStruct, arbitrator: string, arbitratorFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    protocolFee(overrides?: CallOverrides): Promise<number>;
    refund(escrowId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    release(escrowId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendEscrowShare(to: string, amount: BigNumberish, currency: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimed(escrowId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    settle(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    splitCalculation(currentSplit: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ], overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
    unicrowArbitrator(overrides?: CallOverrides): Promise<string>;
    unicrowClaim(overrides?: CallOverrides): Promise<string>;
    unicrowDispute(overrides?: CallOverrides): Promise<string>;
    updateEscrowFee(fee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateGovernance(governance: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        challenge(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], challengeStart: BigNumberish, challengeEnd: BigNumberish, overrides?: CallOverrides): Promise<void>;
        escrowIdCounter(overrides?: CallOverrides): Promise<BigNumber>;
        getAllEscrowData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<DataStructOutput>;
        getEscrow(escrowId: BigNumberish, overrides?: CallOverrides): Promise<EscrowStructOutput>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        pay(input: EscrowInputStruct, arbitrator: string, arbitratorFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        protocolFee(overrides?: CallOverrides): Promise<number>;
        refund(escrowId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        release(escrowId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendEscrowShare(to: string, amount: BigNumberish, currency: string, overrides?: CallOverrides): Promise<void>;
        setClaimed(escrowId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        settle(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        splitCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<string>;
        unicrowClaim(overrides?: CallOverrides): Promise<string>;
        unicrowDispute(overrides?: CallOverrides): Promise<string>;
        updateEscrowFee(fee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateGovernance(governance: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Pay(uint256,uint256,tuple,address,uint256,uint256)"(escrowId?: BigNumberish | null, blockTime?: null, escrow?: null, arbitrator?: null, arbitratorFee?: null, challengePeriod?: null): PayEventFilter;
        Pay(escrowId?: BigNumberish | null, blockTime?: null, escrow?: null, arbitrator?: null, arbitratorFee?: null, challengePeriod?: null): PayEventFilter;
        "Refund(uint256,tuple,uint256)"(escrowId?: BigNumberish | null, escrow?: null, blockTime?: null): RefundEventFilter;
        Refund(escrowId?: BigNumberish | null, escrow?: null, blockTime?: null): RefundEventFilter;
        "Release(uint256,uint256,tuple,uint256[5])"(escrowId?: BigNumberish | null, blockTime?: null, escrow?: null, amounts?: null): ReleaseEventFilter;
        Release(escrowId?: BigNumberish | null, blockTime?: null, escrow?: null, amounts?: null): ReleaseEventFilter;
    };
    estimateGas: {
        challenge(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], challengeStart: BigNumberish, challengeEnd: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        escrowIdCounter(overrides?: CallOverrides): Promise<BigNumber>;
        getAllEscrowData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getEscrow(escrowId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        pay(input: EscrowInputStruct, arbitrator: string, arbitratorFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        refund(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        release(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendEscrowShare(to: string, amount: BigNumberish, currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimed(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        settle(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        splitCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<BigNumber>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<BigNumber>;
        unicrowClaim(overrides?: CallOverrides): Promise<BigNumber>;
        unicrowDispute(overrides?: CallOverrides): Promise<BigNumber>;
        updateEscrowFee(fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        challenge(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], challengeStart: BigNumberish, challengeEnd: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        escrowIdCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllEscrowData(escrowId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEscrow(escrowId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pay(input: EscrowInputStruct, arbitrator: string, arbitratorFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        protocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refund(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        release(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendEscrowShare(to: string, amount: BigNumberish, currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimed(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        settle(escrowId: BigNumberish, split: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], consensus: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        splitCalculation(currentSplit: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowDispute(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateEscrowFee(fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}