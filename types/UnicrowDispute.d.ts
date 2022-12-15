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
export type SettlementStruct = {
    latestSettlementOfferBy: string;
    latestSettlementOffer: [BigNumberish, BigNumberish];
};
export type SettlementStructOutput = [string, [number, number]] & {
    latestSettlementOfferBy: string;
    latestSettlementOffer: [number, number];
};
export interface UnicrowDisputeInterface extends utils.Interface {
    contractName: "UnicrowDispute";
    functions: {
        "approveSettlement(uint256,uint16[2])": FunctionFragment;
        "challenge(uint256)": FunctionFragment;
        "getSettlementDetails(uint256)": FunctionFragment;
        "latestSettlementOffer(uint256,uint256)": FunctionFragment;
        "latestSettlementOfferBy(uint256)": FunctionFragment;
        "offerSettlement(uint256,uint16[2])": FunctionFragment;
        "unicrow()": FunctionFragment;
        "unicrowArbitrator()": FunctionFragment;
        "unicrowClaim()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "approveSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "challenge", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSettlementDetails", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestSettlementOffer", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestSettlementOfferBy", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "offerSettlement", values: [BigNumberish, [BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "unicrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowClaim", values?: undefined): string;
    decodeFunctionResult(functionFragment: "approveSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlementDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestSettlementOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestSettlementOfferBy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offerSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowClaim", data: BytesLike): Result;
    events: {
        "ApproveOffer(uint256,tuple,uint16[2],uint256,uint256[5])": EventFragment;
        "Challenge(uint256,uint256,tuple)": EventFragment;
        "SettlementOffer(uint256,uint256,uint16[2],address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApproveOffer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Challenge"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettlementOffer"): EventFragment;
}
export type ApproveOfferEvent = TypedEvent<[
    BigNumber,
    EscrowStructOutput,
    [
        number,
        number
    ],
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
    latestSettlementOffer: [number, number];
    blockTime: BigNumber;
    amounts: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
}>;
export type ApproveOfferEventFilter = TypedEventFilter<ApproveOfferEvent>;
export type ChallengeEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    EscrowStructOutput
], {
    escrowId: BigNumber;
    blockTime: BigNumber;
    escrow: EscrowStructOutput;
}>;
export type ChallengeEventFilter = TypedEventFilter<ChallengeEvent>;
export type SettlementOfferEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    [number, number],
    string
], {
    escrowId: BigNumber;
    blockTime: BigNumber;
    latestSettlementOffer: [number, number];
    latestSettlementOfferBy: string;
}>;
export type SettlementOfferEventFilter = TypedEventFilter<SettlementOfferEvent>;
export interface UnicrowDispute extends BaseContract {
    contractName: "UnicrowDispute";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UnicrowDisputeInterface;
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
        getSettlementDetails(escrowId: BigNumberish, overrides?: CallOverrides): Promise<[SettlementStructOutput]>;
        latestSettlementOffer(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        latestSettlementOfferBy(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unicrow(overrides?: CallOverrides): Promise<[string]>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<[string]>;
        unicrowClaim(overrides?: CallOverrides): Promise<[string]>;
    };
    approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    challenge(escrowId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getSettlementDetails(escrowId: BigNumberish, overrides?: CallOverrides): Promise<SettlementStructOutput>;
    latestSettlementOffer(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<number>;
    latestSettlementOfferBy(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unicrow(overrides?: CallOverrides): Promise<string>;
    unicrowArbitrator(overrides?: CallOverrides): Promise<string>;
    unicrowClaim(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        challenge(escrowId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getSettlementDetails(escrowId: BigNumberish, overrides?: CallOverrides): Promise<SettlementStructOutput>;
        latestSettlementOffer(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<number>;
        latestSettlementOfferBy(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        unicrow(overrides?: CallOverrides): Promise<string>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<string>;
        unicrowClaim(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ApproveOffer(uint256,tuple,uint16[2],uint256,uint256[5])"(escrowId?: BigNumberish | null, escrow?: null, latestSettlementOffer?: null, blockTime?: null, amounts?: null): ApproveOfferEventFilter;
        ApproveOffer(escrowId?: BigNumberish | null, escrow?: null, latestSettlementOffer?: null, blockTime?: null, amounts?: null): ApproveOfferEventFilter;
        "Challenge(uint256,uint256,tuple)"(escrowId?: BigNumberish | null, blockTime?: null, escrow?: null): ChallengeEventFilter;
        Challenge(escrowId?: BigNumberish | null, blockTime?: null, escrow?: null): ChallengeEventFilter;
        "SettlementOffer(uint256,uint256,uint16[2],address)"(escrowId?: BigNumberish | null, blockTime?: null, latestSettlementOffer?: null, latestSettlementOfferBy?: null): SettlementOfferEventFilter;
        SettlementOffer(escrowId?: BigNumberish | null, blockTime?: null, latestSettlementOffer?: null, latestSettlementOfferBy?: null): SettlementOfferEventFilter;
    };
    estimateGas: {
        approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        challenge(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getSettlementDetails(escrowId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latestSettlementOffer(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latestSettlementOfferBy(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unicrow(overrides?: CallOverrides): Promise<BigNumber>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<BigNumber>;
        unicrowClaim(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approveSettlement(escrowId: BigNumberish, validation: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        challenge(escrowId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getSettlementDetails(escrowId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestSettlementOffer(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestSettlementOfferBy(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        offerSettlement(escrowId: BigNumberish, newSplit: [BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unicrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowArbitrator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
