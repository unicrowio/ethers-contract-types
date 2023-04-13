import { type ContractRunner } from "ethers";
import type { IUnicrowClaimRewards, IUnicrowClaimRewardsInterface } from "../../../contracts/interfaces/IUnicrowClaimRewards";
export declare class IUnicrowClaimRewards__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "buyer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "seller";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly name: "distribute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUnicrowClaimRewardsInterface;
    static connect(address: string, runner?: ContractRunner | null): IUnicrowClaimRewards;
}
