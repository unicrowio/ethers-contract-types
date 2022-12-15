import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnicrowDispute, IUnicrowDisputeInterface } from "../IUnicrowDispute";
export declare class IUnicrowDispute__factory {
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
    static createInterface(): IUnicrowDisputeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnicrowDispute;
}
