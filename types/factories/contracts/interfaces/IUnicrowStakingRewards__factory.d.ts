import { ContractRunner } from "ethers";
import type { IUnicrowStakingRewards, IUnicrowStakingRewardsInterface } from "../../../contracts/interfaces/IUnicrowStakingRewards";
export declare class IUnicrowStakingRewards__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "collectFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUnicrowStakingRewardsInterface;
    static connect(address: string, runner?: ContractRunner | null): IUnicrowStakingRewards;
}
