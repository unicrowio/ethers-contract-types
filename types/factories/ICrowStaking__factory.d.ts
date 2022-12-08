import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICrowStaking, ICrowStakingInterface } from "../ICrowStaking";
export declare class ICrowStaking__factory {
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
    static createInterface(): ICrowStakingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICrowStaking;
}
