import { type ContractRunner } from "ethers";
import type { IUnicrowClaim, IUnicrowClaimInterface } from "../../../contracts/interfaces/IUnicrowClaim";
export declare class IUnicrowClaim__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }];
        readonly name: "claim";
        readonly outputs: readonly [{
            readonly internalType: "uint256[5]";
            readonly name: "";
            readonly type: "uint256[5]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "escrows";
            readonly type: "uint256[]";
        }];
        readonly name: "claimMultiple";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "crowRewards_";
            readonly type: "address";
        }];
        readonly name: "updateCrowRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "protocolFeeAddress_";
            readonly type: "address";
        }];
        readonly name: "updateProtocolFeeAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "crowRewards_";
            readonly type: "address";
        }];
        readonly name: "updateStakingRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUnicrowClaimInterface;
    static connect(address: string, runner?: ContractRunner | null): IUnicrowClaim;
}
