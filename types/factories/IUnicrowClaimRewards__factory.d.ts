import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnicrowClaimRewards, IUnicrowClaimRewardsInterface } from "../IUnicrowClaimRewards";
export declare class IUnicrowClaimRewards__factory {
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
    static createInterface(): IUnicrowClaimRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnicrowClaimRewards;
}
