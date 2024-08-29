import { type ContractRunner } from "ethers";
import type { IUnicrow, IUnicrowInterface } from "../../../contracts/interfaces/IUnicrow";
export declare class IUnicrow__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16[4]";
            readonly name: "split";
            readonly type: "uint16[4]";
        }, {
            readonly internalType: "int16[2]";
            readonly name: "consensus";
            readonly type: "int16[2]";
        }, {
            readonly internalType: "uint64";
            readonly name: "challengeStart";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "challengeEnd";
            readonly type: "uint64";
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
        }];
        readonly name: "getEscrow";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "buyer";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "challengeExtension";
                readonly type: "uint64";
            }, {
                readonly internalType: "address";
                readonly name: "seller";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "challengePeriodStart";
                readonly type: "uint64";
            }, {
                readonly internalType: "address";
                readonly name: "marketplace";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "marketplaceFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "challengePeriodEnd";
                readonly type: "uint64";
            }, {
                readonly internalType: "address";
                readonly name: "currency";
                readonly type: "address";
            }, {
                readonly internalType: "uint16";
                readonly name: "claimed";
                readonly type: "uint16";
            }, {
                readonly internalType: "int16[2]";
                readonly name: "consensus";
                readonly type: "int16[2]";
            }, {
                readonly internalType: "uint16[4]";
                readonly name: "split";
                readonly type: "uint16[4]";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "paymentReference";
                readonly type: "string";
            }];
            readonly internalType: "struct Escrow";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "seller";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "marketplace";
                readonly type: "address";
            }, {
                readonly internalType: "uint16";
                readonly name: "marketplaceFee";
                readonly type: "uint16";
            }, {
                readonly internalType: "address";
                readonly name: "currency";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "challengePeriod";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "challengeExtension";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "paymentReference";
                readonly type: "string";
            }];
            readonly internalType: "struct EscrowInput";
            readonly name: "input";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "arbitrator";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "arbitratorFee";
            readonly type: "uint16";
        }];
        readonly name: "pay";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }];
        readonly name: "refund";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }];
        readonly name: "release";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }];
        readonly name: "setClaimed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "escrowId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16[4]";
            readonly name: "split";
            readonly type: "uint16[4]";
        }, {
            readonly internalType: "int16[2]";
            readonly name: "consensus";
            readonly type: "int16[2]";
        }];
        readonly name: "settle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[5]";
            readonly name: "currentSplit";
            readonly type: "uint16[5]";
        }];
        readonly name: "splitCalculation";
        readonly outputs: readonly [{
            readonly internalType: "uint16[5]";
            readonly name: "";
            readonly type: "uint16[5]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "fee";
            readonly type: "uint16";
        }];
        readonly name: "updateEscrowFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "governance";
            readonly type: "address";
        }];
        readonly name: "updateGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUnicrowInterface;
    static connect(address: string, runner?: ContractRunner | null): IUnicrow;
}
