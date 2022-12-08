import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnicrowPrimaryTokensList, IUnicrowPrimaryTokensListInterface } from "../IUnicrowPrimaryTokensList";
export declare class IUnicrowPrimaryTokensList__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IUnicrowPrimaryTokensListInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnicrowPrimaryTokensList;
}
