import { type ContractRunner } from "ethers";
import type { IUnicrowArbitrator, IUnicrowArbitratorInterface } from "../../../contracts/interfaces/IUnicrowArbitrator";
export declare class IUnicrowArbitrator__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "validationAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "validation";
            readonly type: "uint16";
        }];
        readonly name: "approveArbitrator";
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
        readonly name: "arbitrate";
        readonly outputs: readonly [{
            readonly internalType: "uint256[5]";
            readonly name: "";
            readonly type: "uint256[5]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }];
        readonly name: "getArbitratorData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "arbitrator";
                readonly type: "address";
            }, {
                readonly internalType: "uint16";
                readonly name: "arbitratorFee";
                readonly type: "uint16";
            }, {
                readonly internalType: "bool";
                readonly name: "sellerConsensus";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "buyerConsensus";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "arbitrated";
                readonly type: "bool";
            }];
            readonly internalType: "struct Arbitrator";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "arbitrator";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "arbitratorFee";
            readonly type: "uint16";
        }];
        readonly name: "proposeArbitrator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "arbitrator";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "arbitratorFee";
            readonly type: "uint16";
        }];
        readonly name: "setArbitrator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUnicrowArbitratorInterface;
    static connect(address: string, runner?: ContractRunner | null): IUnicrowArbitrator;
}
