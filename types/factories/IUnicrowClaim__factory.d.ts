import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnicrowClaim, IUnicrowClaimInterface } from "../IUnicrowClaim";
export declare class IUnicrowClaim__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IUnicrowClaimInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnicrowClaim;
}
