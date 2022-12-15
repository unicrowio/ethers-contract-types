import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnicrowArbitrator, IUnicrowArbitratorInterface } from "../IUnicrowArbitrator";
export declare class IUnicrowArbitrator__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IUnicrowArbitratorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnicrowArbitrator;
}
