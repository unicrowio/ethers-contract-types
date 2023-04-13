import { ContractRunner } from "ethers";
import type { IUnicrowDispute, IUnicrowDisputeInterface } from "../../../contracts/interfaces/IUnicrowDispute";
export declare class IUnicrowDispute__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16[2]";
            readonly name: "validation";
            readonly type: "uint16[2]";
        }];
        readonly name: "approveSettlement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }];
        readonly name: "challenge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16[2]";
            readonly name: "newSplit";
            readonly type: "uint16[2]";
        }];
        readonly name: "offerSettlement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUnicrowDisputeInterface;
    static connect(address: string, runner?: ContractRunner | null): IUnicrowDispute;
}
