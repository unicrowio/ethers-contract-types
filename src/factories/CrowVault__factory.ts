/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CrowVault, CrowVaultInterface } from "../CrowVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGovernorMultiToken[]",
        name: "assets",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000cda38038062000cda8339818101604052810190620000379190620001cc565b8080600090805190602001906200005092919062000059565b50505062000361565b828054828255906000526020600020908101928215620000d5579160200282015b82811115620000d45782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906200007a565b5b509050620000e49190620000e8565b5090565b5b8082111562000103576000816000905550600101620000e9565b5090565b60006200011e620001188462000246565b6200021d565b9050808382526020820190508285602086028201111562000144576200014362000327565b5b60005b858110156200017857816200015d8882620001b5565b84526020840193506020830192505060018101905062000147565b5050509392505050565b600082601f8301126200019a576200019962000322565b5b8151620001ac84826020860162000107565b91505092915050565b600081519050620001c68162000347565b92915050565b600060208284031215620001e557620001e462000331565b5b600082015167ffffffffffffffff8111156200020657620002056200032c565b5b620002148482850162000182565b91505092915050565b6000620002296200023c565b9050620002378282620002bd565b919050565b6000604051905090565b600067ffffffffffffffff821115620002645762000263620002f3565b5b602082029050602081019050919050565b600062000282826200029d565b9050919050565b6000620002968262000275565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620002c88262000336565b810181811067ffffffffffffffff82111715620002ea57620002e9620002f3565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b620003528162000289565b81146200035e57600080fd5b50565b61096980620003716000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806318160ddd1461005c5780633a46b1a81461007a57806370a08231146100aa5780638e539e8c146100da5780639ab24eb01461010a575b600080fd5b61006461013a565b60405161007191906107ac565b60405180910390f35b610094600480360381019061008f91906106b0565b610231565b6040516100a191906107ac565b60405180910390f35b6100c460048036038101906100bf9190610683565b610338565b6040516100d191906107ac565b60405180910390f35b6100f460048036038101906100ef91906106f0565b61043c565b60405161010191906107ac565b60405180910390f35b610124600480360381019061011f9190610683565b610540565b60405161013191906107ac565b60405180910390f35b60008060005b6000805490508110156102295760008181548110610161576101606108d1565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101d157600080fd5b505afa1580156101e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610209919061071d565b8261021491906107c7565b9150808061022190610859565b915050610140565b508091505090565b60008060005b60008054905081101561032d5760008181548110610258576102576108d1565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a46b1a886866040518363ffffffff1660e01b81526004016102bd929190610783565b60206040518083038186803b1580156102d557600080fd5b505afa1580156102e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030d919061071d565b8261031891906107c7565b9150808061032590610859565b915050610237565b508091505092915050565b60008060005b600080549050811015610432576000818154811061035f5761035e6108d1565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016103c29190610768565b60206040518083038186803b1580156103da57600080fd5b505afa1580156103ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610412919061071d565b8261041d91906107c7565b9150808061042a90610859565b91505061033e565b5080915050919050565b60008060005b6000805490508110156105365760008181548110610463576104626108d1565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638e539e8c856040518263ffffffff1660e01b81526004016104c691906107ac565b60206040518083038186803b1580156104de57600080fd5b505afa1580156104f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610516919061071d565b8261052191906107c7565b9150808061052e90610859565b915050610442565b5080915050919050565b60008060005b60008054905081101561063a5760008181548110610567576105666108d1565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639ab24eb0856040518263ffffffff1660e01b81526004016105ca9190610768565b60206040518083038186803b1580156105e257600080fd5b505afa1580156105f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061a919061071d565b8261062591906107c7565b9150808061063290610859565b915050610546565b5080915050919050565b60008135905061065381610905565b92915050565b6000813590506106688161091c565b92915050565b60008151905061067d8161091c565b92915050565b60006020828403121561069957610698610900565b5b60006106a784828501610644565b91505092915050565b600080604083850312156106c7576106c6610900565b5b60006106d585828601610644565b92505060206106e685828601610659565b9150509250929050565b60006020828403121561070657610705610900565b5b600061071484828501610659565b91505092915050565b60006020828403121561073357610732610900565b5b60006107418482850161066e565b91505092915050565b6107538161081d565b82525050565b6107628161084f565b82525050565b600060208201905061077d600083018461074a565b92915050565b6000604082019050610798600083018561074a565b6107a56020830184610759565b9392505050565b60006020820190506107c16000830184610759565b92915050565b60006107d28261084f565b91506107dd8361084f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610812576108116108a2565b5b828201905092915050565b60006108288261082f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006108648261084f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610897576108966108a2565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b61090e8161081d565b811461091957600080fd5b50565b6109258161084f565b811461093057600080fd5b5056fea2646970667358221220437aaae62cddf07285382a015beabb1b99126426132ba0330331d58c5547227c64736f6c63430008070033";

type CrowVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowVault__factory extends ContractFactory {
  constructor(...args: CrowVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CrowVault";
  }

  deploy(
    assets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrowVault> {
    return super.deploy(assets, overrides || {}) as Promise<CrowVault>;
  }
  getDeployTransaction(
    assets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(assets, overrides || {});
  }
  attach(address: string): CrowVault {
    return super.attach(address) as CrowVault;
  }
  connect(signer: Signer): CrowVault__factory {
    return super.connect(signer) as CrowVault__factory;
  }
  static readonly contractName: "CrowVault";
  public readonly contractName: "CrowVault";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowVaultInterface {
    return new utils.Interface(_abi) as CrowVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowVault {
    return new Contract(address, _abi, signerOrProvider) as CrowVault;
  }
}
