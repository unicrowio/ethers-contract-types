import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICrowRewards, ICrowRewardsInterface } from "../ICrowRewards";
export declare class ICrowRewards__factory {
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
    static createInterface(): ICrowRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICrowRewards;
}
