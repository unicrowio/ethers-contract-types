import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnicrowStakingRewards, IUnicrowStakingRewardsInterface } from "../IUnicrowStakingRewards";
export declare class IUnicrowStakingRewards__factory {
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
    static createInterface(): IUnicrowStakingRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnicrowStakingRewards;
}
