import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DoubleEndedQueue, DoubleEndedQueueInterface } from "../DoubleEndedQueue";
type DoubleEndedQueueConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DoubleEndedQueue__factory extends ContractFactory {
    constructor(...args: DoubleEndedQueueConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DoubleEndedQueue>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DoubleEndedQueue;
    connect(signer: Signer): DoubleEndedQueue__factory;
    static readonly contractName: "DoubleEndedQueue";
    readonly contractName: "DoubleEndedQueue";
    static readonly bytecode = "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c6b3f83fd917f6a6b8e39920469ca789afb9a7c5ad83dd6638622afe8965700264736f6c63430008070033";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): DoubleEndedQueueInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DoubleEndedQueue;
}
export {};
