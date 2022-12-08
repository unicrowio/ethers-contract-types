import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CrowStakingRewardsInterface extends utils.Interface {
    contractName: "CrowStakingRewards";
    functions: {
        "CROW()": FunctionFragment;
        "WETH9()": FunctionFragment;
        "activate()": FunctionFragment;
        "addToken(address)": FunctionFragment;
        "allowedTokens(address)": FunctionFragment;
        "claimAllowed()": FunctionFragment;
        "claimOwnership()": FunctionFragment;
        "collectFee(address,uint256)": FunctionFragment;
        "convert(address,uint24)": FunctionFragment;
        "deactivate(address[])": FunctionFragment;
        "earned(uint256,address,address)": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "harvest(address[])": FunctionFragment;
        "inactivityBurnPeriod()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "primaryTokens(uint256)": FunctionFragment;
        "remainingBalance(address)": FunctionFragment;
        "removeToken(address,uint256)": FunctionFragment;
        "rewardPerSCrow(address)": FunctionFragment;
        "rewardsCollected(address)": FunctionFragment;
        "rewardsPerSCrowStored(address)": FunctionFragment;
        "sCROW()": FunctionFragment;
        "setClaimAllowed(bool)": FunctionFragment;
        "setInactivityBurnPeriod(uint256)": FunctionFragment;
        "stake(uint256,address)": FunctionFragment;
        "swapRouter()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferOwnership(address,bool,bool)": FunctionFragment;
        "unstake(uint256,address)": FunctionFragment;
        "updateGovernance(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "CROW", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "activate", values?: undefined): string;
    encodeFunctionData(functionFragment: "addToken", values: [string]): string;
    encodeFunctionData(functionFragment: "allowedTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "claimAllowed", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "collectFee", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "convert", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deactivate", values: [string[]]): string;
    encodeFunctionData(functionFragment: "earned", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "harvest", values: [string[]]): string;
    encodeFunctionData(functionFragment: "inactivityBurnPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "primaryTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "remainingBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "removeToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardPerSCrow", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardsCollected", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardsPerSCrowStored", values: [string]): string;
    encodeFunctionData(functionFragment: "sCROW", values?: undefined): string;
    encodeFunctionData(functionFragment: "setClaimAllowed", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setInactivityBurnPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "swapRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "unstake", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "updateGovernance", values: [string]): string;
    decodeFunctionResult(functionFragment: "CROW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deactivate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inactivityBurnPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primaryTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerSCrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsCollected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsPerSCrowStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sCROW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInactivityBurnPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGovernance", data: BytesLike): Result;
    events: {
        "Deposit(address,uint256,address)": EventFragment;
        "EmergencyWithdraw(address,uint256,uint256,address)": EventFragment;
        "Harvest(address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Withdraw(address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export type DepositEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    user: string;
    amount: BigNumber;
    to: string;
}>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export type EmergencyWithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
    to: string;
}>;
export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;
export type HarvestEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}>;
export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type WithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    user: string;
    amount: BigNumber;
    to: string;
}>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface CrowStakingRewards extends BaseContract {
    contractName: "CrowStakingRewards";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CrowStakingRewardsInterface;
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
        CROW(overrides?: CallOverrides): Promise<[string]>;
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        activate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowedTokens(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        claimAllowed(overrides?: CallOverrides): Promise<[boolean]>;
        claimOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collectFee(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deactivate(accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        earned(totalRewards: BigNumberish, account: string, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string]>;
        harvest(tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        inactivityBurnPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        primaryTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        remainingBalance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewardPerSCrow(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardsCollected(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardsPerSCrowStored(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        sCROW(overrides?: CallOverrides): Promise<[string]>;
        setClaimAllowed(allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapRouter(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, direct: boolean, renounce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    CROW(overrides?: CallOverrides): Promise<string>;
    WETH9(overrides?: CallOverrides): Promise<string>;
    activate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addToken(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    claimAllowed(overrides?: CallOverrides): Promise<boolean>;
    claimOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collectFee(token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deactivate(accounts: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    earned(totalRewards: BigNumberish, account: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    harvest(tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    inactivityBurnPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    primaryTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    remainingBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewardPerSCrow(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    rewardsCollected(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    rewardsPerSCrowStored(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    sCROW(overrides?: CallOverrides): Promise<string>;
    setClaimAllowed(allowed: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stake(amount: BigNumberish, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapRouter(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, direct: boolean, renounce: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateGovernance(governance: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CROW(overrides?: CallOverrides): Promise<string>;
        WETH9(overrides?: CallOverrides): Promise<string>;
        activate(overrides?: CallOverrides): Promise<void>;
        addToken(token: string, overrides?: CallOverrides): Promise<void>;
        allowedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        claimAllowed(overrides?: CallOverrides): Promise<boolean>;
        claimOwnership(overrides?: CallOverrides): Promise<void>;
        collectFee(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        convert(token: string, pollFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deactivate(accounts: string[], overrides?: CallOverrides): Promise<void>;
        earned(totalRewards: BigNumberish, account: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        harvest(tokens: string[], overrides?: CallOverrides): Promise<void>;
        inactivityBurnPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        primaryTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        remainingBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeToken(token: string, index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        rewardPerSCrow(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsCollected(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsPerSCrowStored(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        sCROW(overrides?: CallOverrides): Promise<string>;
        setClaimAllowed(allowed: boolean, overrides?: CallOverrides): Promise<void>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stake(amount: BigNumberish, account: string, overrides?: CallOverrides): Promise<void>;
        swapRouter(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, direct: boolean, renounce: boolean, overrides?: CallOverrides): Promise<void>;
        unstake(amount: BigNumberish, account: string, overrides?: CallOverrides): Promise<void>;
        updateGovernance(governance: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit(address,uint256,address)"(user?: string | null, amount?: null, to?: string | null): DepositEventFilter;
        Deposit(user?: string | null, amount?: null, to?: string | null): DepositEventFilter;
        "EmergencyWithdraw(address,uint256,uint256,address)"(user?: string | null, pid?: BigNumberish | null, amount?: null, to?: string | null): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(user?: string | null, pid?: BigNumberish | null, amount?: null, to?: string | null): EmergencyWithdrawEventFilter;
        "Harvest(address,uint256,uint256)"(user?: string | null, pid?: BigNumberish | null, amount?: null): HarvestEventFilter;
        Harvest(user?: string | null, pid?: BigNumberish | null, amount?: null): HarvestEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Withdraw(address,uint256,address)"(user?: string | null, amount?: null, to?: string | null): WithdrawEventFilter;
        Withdraw(user?: string | null, amount?: null, to?: string | null): WithdrawEventFilter;
    };
    estimateGas: {
        CROW(overrides?: CallOverrides): Promise<BigNumber>;
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        activate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowedTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimAllowed(overrides?: CallOverrides): Promise<BigNumber>;
        claimOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collectFee(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deactivate(accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        earned(totalRewards: BigNumberish, account: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        harvest(tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        inactivityBurnPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        primaryTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        remainingBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewardPerSCrow(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsCollected(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsPerSCrowStored(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        sCROW(overrides?: CallOverrides): Promise<BigNumber>;
        setClaimAllowed(allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapRouter(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, direct: boolean, renounce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CROW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        activate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowedTokens(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collectFee(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convert(token: string, pollFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deactivate(accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        earned(totalRewards: BigNumberish, account: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        harvest(tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        inactivityBurnPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primaryTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remainingBalance(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeToken(token: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewardPerSCrow(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsCollected(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsPerSCrowStored(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sCROW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setClaimAllowed(allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInactivityBurnPeriod(period: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, direct: boolean, renounce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unstake(amount: BigNumberish, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateGovernance(governance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
