import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoringOwnableData, BoringOwnableDataInterface } from "../BoringOwnableData";
type BoringOwnableDataConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BoringOwnableData__factory extends ContractFactory {
    constructor(...args: BoringOwnableDataConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BoringOwnableData>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BoringOwnableData;
    connect(signer: Signer): BoringOwnableData__factory;
    static readonly contractName: "BoringOwnableData";
    readonly contractName: "BoringOwnableData";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610153806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063e30c397814610059575b600080fd5b610043610077565b60405161005091906100d0565b60405180910390f35b61006161009b565b60405161006e91906100d0565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6100ca816100eb565b82525050565b60006020820190506100e560008301846100c1565b92915050565b60006100f6826100fd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff8216905091905056fea2646970667358221220aa4a0938abe565e894596c11d6b39440fb31839572783039496a5e78e01e48cc64736f6c63430008070033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BoringOwnableDataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BoringOwnableData;
}
export {};
