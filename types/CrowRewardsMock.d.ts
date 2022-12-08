import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CrowRewardsMockInterface extends utils.Interface {
    contractName: "CrowRewardsMock";
    functions: {
        "calculateReward(uint256)": FunctionFragment;
        "claim()": FunctionFragment;
        "claimAndStake()": FunctionFragment;
        "crowStaking()": FunctionFragment;
        "crowToken()": FunctionFragment;
        "distribute(address,address,uint256)": FunctionFragment;
        "getLatestPrice()": FunctionFragment;
        "owner()": FunctionFragment;
        "reallocate(address[])": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewards(address)": FunctionFragment;
        "rewardsAvailable()": FunctionFragment;
        "rewardsTax()": FunctionFragment;
        "sCrow()": FunctionFragment;
        "setTax(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unicrow()": FunctionFragment;
        "unicrowClaim()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateReward", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claim", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAndStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "crowStaking", values?: undefined): string;
    encodeFunctionData(functionFragment: "crowToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "distribute", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLatestPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "reallocate", values: [string[]]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardsAvailable", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsTax", values?: undefined): string;
    encodeFunctionData(functionFragment: "sCrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "setTax", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unicrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "unicrowClaim", values?: undefined): string;
    decodeFunctionResult(functionFragment: "calculateReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAndStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crowStaking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crowToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLatestPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reallocate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsAvailable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsTax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sCrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unicrowClaim", data: BytesLike): Result;
    events: {
        "ClaimAndStake(address,uint256)": EventFragment;
        "Claimed(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Reward(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimAndStake"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Reward"): EventFragment;
}
export type ClaimAndStakeEvent = TypedEvent<[
    string,
    BigNumber
], {
    address_: string;
    value: BigNumber;
}>;
export type ClaimAndStakeEventFilter = TypedEventFilter<ClaimAndStakeEvent>;
export type ClaimedEvent = TypedEvent<[
    string,
    BigNumber
], {
    address_: string;
    value: BigNumber;
}>;
export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type RewardEvent = TypedEvent<[BigNumber], {
    value: BigNumber;
}>;
export type RewardEventFilter = TypedEventFilter<RewardEvent>;
export interface CrowRewardsMock extends BaseContract {
    contractName: "CrowRewardsMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CrowRewardsMockInterface;
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
        calculateReward(fee: BigNumberish, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimAndStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        crowStaking(overrides?: CallOverrides): Promise<[string]>;
        crowToken(overrides?: CallOverrides): Promise<[string]>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getLatestPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        reallocate(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            balance: BigNumber;
            lastUpdate: BigNumber;
        }>;
        rewardsAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardsTax(overrides?: CallOverrides): Promise<[BigNumber]>;
        sCrow(overrides?: CallOverrides): Promise<[string]>;
        setTax(address_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unicrow(overrides?: CallOverrides): Promise<[string]>;
        unicrowClaim(overrides?: CallOverrides): Promise<[string]>;
    };
    calculateReward(fee: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    claim(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimAndStake(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    crowStaking(overrides?: CallOverrides): Promise<string>;
    crowToken(overrides?: CallOverrides): Promise<string>;
    distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getLatestPrice(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    reallocate(addresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewards(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        balance: BigNumber;
        lastUpdate: BigNumber;
    }>;
    rewardsAvailable(overrides?: CallOverrides): Promise<BigNumber>;
    rewardsTax(overrides?: CallOverrides): Promise<BigNumber>;
    sCrow(overrides?: CallOverrides): Promise<string>;
    setTax(address_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unicrow(overrides?: CallOverrides): Promise<string>;
    unicrowClaim(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        calculateReward(fee: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        claim(overrides?: CallOverrides): Promise<void>;
        claimAndStake(overrides?: CallOverrides): Promise<void>;
        crowStaking(overrides?: CallOverrides): Promise<string>;
        crowToken(overrides?: CallOverrides): Promise<string>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getLatestPrice(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        reallocate(addresses: string[], overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            balance: BigNumber;
            lastUpdate: BigNumber;
        }>;
        rewardsAvailable(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsTax(overrides?: CallOverrides): Promise<BigNumber>;
        sCrow(overrides?: CallOverrides): Promise<string>;
        setTax(address_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unicrow(overrides?: CallOverrides): Promise<string>;
        unicrowClaim(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ClaimAndStake(address,uint256)"(address_?: null, value?: null): ClaimAndStakeEventFilter;
        ClaimAndStake(address_?: null, value?: null): ClaimAndStakeEventFilter;
        "Claimed(address,uint256)"(address_?: null, value?: null): ClaimedEventFilter;
        Claimed(address_?: null, value?: null): ClaimedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Reward(uint256)"(value?: null): RewardEventFilter;
        Reward(value?: null): RewardEventFilter;
    };
    estimateGas: {
        calculateReward(fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimAndStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        crowStaking(overrides?: CallOverrides): Promise<BigNumber>;
        crowToken(overrides?: CallOverrides): Promise<BigNumber>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getLatestPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        reallocate(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsAvailable(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsTax(overrides?: CallOverrides): Promise<BigNumber>;
        sCrow(overrides?: CallOverrides): Promise<BigNumber>;
        setTax(address_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unicrow(overrides?: CallOverrides): Promise<BigNumber>;
        unicrowClaim(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateReward(fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimAndStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        crowStaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        crowToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        distribute(buyer: string, seller: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getLatestPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reallocate(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsAvailable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsTax(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sCrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setTax(address_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unicrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unicrowClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
