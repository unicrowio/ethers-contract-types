import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorMultiToken, GovernorMultiTokenInterface } from "../GovernorMultiToken";
export declare class GovernorMultiToken__factory {
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
    static createInterface(): GovernorMultiTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorMultiToken;
}
