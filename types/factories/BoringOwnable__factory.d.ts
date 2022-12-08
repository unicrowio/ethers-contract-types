import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoringOwnable, BoringOwnableInterface } from "../BoringOwnable";
type BoringOwnableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BoringOwnable__factory extends ContractFactory {
    constructor(...args: BoringOwnableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BoringOwnable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BoringOwnable;
    connect(signer: Signer): BoringOwnable__factory;
    static readonly contractName: "BoringOwnable";
    readonly contractName: "BoringOwnable";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3610788806100bb6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063078dfbe7146100515780634e71e0c81461006d5780638da5cb5b14610077578063e30c397814610095575b600080fd5b61006b6004803603810190610066919061050f565b6100b3565b005b610075610307565b005b61007f61049b565b60405161008c91906105da565b60405180910390f35b61009d6104bf565b6040516100aa91906105da565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610141576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161013890610615565b60405180910390fd5b81156102c057600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415806101805750805b6101bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b6906105f5565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610302565b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461039c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039390610635565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813590506104f481610724565b92915050565b6000813590506105098161073b565b92915050565b600080600060608486031215610528576105276106a4565b5b6000610536868287016104e5565b9350506020610547868287016104fa565b9250506040610558868287016104fa565b9150509250925092565b61056b81610666565b82525050565b600061057e601583610655565b9150610589826106a9565b602082019050919050565b60006105a1602083610655565b91506105ac826106d2565b602082019050919050565b60006105c4602083610655565b91506105cf826106fb565b602082019050919050565b60006020820190506105ef6000830184610562565b92915050565b6000602082019050818103600083015261060e81610571565b9050919050565b6000602082019050818103600083015261062e81610594565b9050919050565b6000602082019050818103600083015261064e816105b7565b9050919050565b600082825260208201905092915050565b600061067182610684565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b7f4f776e61626c653a207a65726f20616464726573730000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572600082015250565b61072d81610666565b811461073857600080fd5b50565b61074481610678565b811461074f57600080fd5b5056fea26469706673582212206ea1ab540f20f040f24eaa3dbc4043c2e1966689cb77e06030dcb50a3b78076264736f6c63430008070033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BoringOwnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BoringOwnable;
}
export {};
