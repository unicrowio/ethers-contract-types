/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnicrowPrimaryTokensListMock,
  UnicrowPrimaryTokensListMockInterface,
} from "../UnicrowPrimaryTokensListMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "governanceAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokens",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        internalType: "struct UnicrowPrimaryTokensListMock.Token[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "primaryTokens",
    outputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "governance",
        type: "address",
      },
    ],
    name: "updateGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620019d9380380620019d983398181016040528101906200003791906200063b565b620000576200004b620004a860201b60201c565b620004b060201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160405180604001604052806040518060400160405280600381526020017f45544800000000000000000000000000000000000000000000000000000000008152508152602001600073ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906200014292919062000574565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050600160405180604001604052806040518060400160405280600481526020017f55534454000000000000000000000000000000000000000000000000000000008152508152602001737ed124f79447a1390281c88bb9bca2ac4f009bbe73ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906200024992919062000574565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050600160405180604001604052806040518060400160405280600481526020017f555344430000000000000000000000000000000000000000000000000000000081525081526020017335b06c1727c538561cb4675799527baa48689f5e73ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906200035092919062000574565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050600160405180604001604052806040518060400160405280600381526020017f4441490000000000000000000000000000000000000000000000000000000000815250815260200173e5acb9b25ab1e0d930a3180dff5c20d78853b51473ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906200045792919062000574565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000725565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200058290620006a1565b90600052602060002090601f016020900481019282620005a65760008555620005f2565b82601f10620005c157805160ff1916838001178555620005f2565b82800160010185558215620005f2579182015b82811115620005f1578251825591602001919060010190620005d4565b5b50905062000601919062000605565b5090565b5b808211156200062057600081600090555060010162000606565b5090565b60008151905062000635816200070b565b92915050565b60006020828403121562000654576200065362000706565b5b6000620006648482850162000624565b91505092915050565b60006200067a8262000681565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006002820490506001821680620006ba57607f821691505b60208210811415620006d157620006d0620006d7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b62000716816200066d565b81146200072257600080fd5b50565b6112a480620007356000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063aa6ca8081161005b578063aa6ca80814610102578063b0b22c2c14610120578063b25612631461013c578063f2fde38b1461015857610088565b80630d7ed0ab1461008d57806363bf8d6a146100be578063715018a6146100da5780638da5cb5b146100e4575b600080fd5b6100a760048036038101906100a29190610c20565b610174565b6040516100b5929190610e53565b60405180910390f35b6100d860048036038101906100d39190610c4d565b610250565b005b6100e26103f6565b005b6100ec61047e565b6040516100f99190610e16565b60405180910390f35b61010a6104a7565b6040516101179190610e31565b60405180910390f35b61013a60048036038101906101359190610bc4565b6105ee565b005b61015660048036038101906101519190610b97565b61070f565b005b610172600480360381019061016d9190610b97565b6107b4565b005b6001818154811061018457600080fd5b90600052602060002090600202016000915090508060000180546101a79061103e565b80601f01602080910402602001604051908101604052809291908181526020018280546101d39061103e565b80156102205780601f106101f557610100808354040283529160200191610220565b820191906000526020600020905b81548152906001019060200180831161020357829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166102916108ac565b73ffffffffffffffffffffffffffffffffffffffff16146102b157600080fd5b60018080805490506102c39190610f7f565b815481106102d4576102d361112e565b5b906000526020600020906002020160018260ff16815481106102f9576102f861112e565b5b9060005260206000209060020201600082018160000190805461031b9061103e565b610326929190610978565b506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505060018054806103a3576103a26110ff565b5b6001900381819060005260206000209060020201600080820160006103c89190610a05565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050905550565b6103fe6108ac565b73ffffffffffffffffffffffffffffffffffffffff1661041c61047e565b73ffffffffffffffffffffffffffffffffffffffff1614610472576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046990610ea3565b60405180910390fd5b61047c60006108b4565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156105e557838290600052602060002090600202016040518060400160405290816000820180546104fe9061103e565b80601f016020809104026020016040519081016040528092919081815260200182805461052a9061103e565b80156105775780601f1061054c57610100808354040283529160200191610577565b820191906000526020600020905b81548152906001019060200180831161055a57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050815260200190600101906104cb565b50505050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661062f6108ac565b73ffffffffffffffffffffffffffffffffffffffff161461064f57600080fd5b600160405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906106c1929190610a45565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166107506108ac565b73ffffffffffffffffffffffffffffffffffffffff161461077057600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6107bc6108ac565b73ffffffffffffffffffffffffffffffffffffffff166107da61047e565b73ffffffffffffffffffffffffffffffffffffffff1614610830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082790610ea3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089790610e83565b60405180910390fd5b6108a9816108b4565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546109849061103e565b90600052602060002090601f0160209004810192826109a657600085556109f4565b82601f106109b757805485556109f4565b828001600101855582156109f457600052602060002091601f016020900482015b828111156109f35782548255916001019190600101906109d8565b5b509050610a019190610acb565b5090565b508054610a119061103e565b6000825580601f10610a235750610a42565b601f016020900490600052602060002090810190610a419190610acb565b5b50565b828054610a519061103e565b90600052602060002090601f016020900481019282610a735760008555610aba565b82601f10610a8c57805160ff1916838001178555610aba565b82800160010185558215610aba579182015b82811115610ab9578251825591602001919060010190610a9e565b5b509050610ac79190610acb565b5090565b5b80821115610ae4576000816000905550600101610acc565b5090565b6000610afb610af684610ee8565b610ec3565b905082815260208101848484011115610b1757610b16611191565b5b610b22848285610ffc565b509392505050565b600081359050610b3981611229565b92915050565b600082601f830112610b5457610b5361118c565b5b8135610b64848260208601610ae8565b91505092915050565b600081359050610b7c81611240565b92915050565b600081359050610b9181611257565b92915050565b600060208284031215610bad57610bac61119b565b5b6000610bbb84828501610b2a565b91505092915050565b60008060408385031215610bdb57610bda61119b565b5b600083013567ffffffffffffffff811115610bf957610bf8611196565b5b610c0585828601610b3f565b9250506020610c1685828601610b2a565b9150509250929050565b600060208284031215610c3657610c3561119b565b5b6000610c4484828501610b6d565b91505092915050565b600060208284031215610c6357610c6261119b565b5b6000610c7184828501610b82565b91505092915050565b6000610c868383610dd9565b905092915050565b610c9781610fb3565b82525050565b610ca681610fb3565b82525050565b6000610cb782610f29565b610cc18185610f4c565b935083602082028501610cd385610f19565b8060005b85811015610d0f5784840389528151610cf08582610c7a565b9450610cfb83610f3f565b925060208a01995050600181019050610cd7565b50829750879550505050505092915050565b6000610d2c82610f34565b610d368185610f5d565b9350610d4681856020860161100b565b610d4f816111a0565b840191505092915050565b6000610d6582610f34565b610d6f8185610f6e565b9350610d7f81856020860161100b565b610d88816111a0565b840191505092915050565b6000610da0602683610f6e565b9150610dab826111b1565b604082019050919050565b6000610dc3602083610f6e565b9150610dce82611200565b602082019050919050565b60006040830160008301518482036000860152610df68282610d21565b9150506020830151610e0b6020860182610c8e565b508091505092915050565b6000602082019050610e2b6000830184610c9d565b92915050565b60006020820190508181036000830152610e4b8184610cac565b905092915050565b60006040820190508181036000830152610e6d8185610d5a565b9050610e7c6020830184610c9d565b9392505050565b60006020820190508181036000830152610e9c81610d93565b9050919050565b60006020820190508181036000830152610ebc81610db6565b9050919050565b6000610ecd610ede565b9050610ed98282611070565b919050565b6000604051905090565b600067ffffffffffffffff821115610f0357610f0261115d565b5b610f0c826111a0565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610f8a82610fe5565b9150610f9583610fe5565b925082821015610fa857610fa76110a1565b5b828203905092915050565b6000610fbe82610fc5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b8381101561102957808201518184015260208101905061100e565b83811115611038576000848401525b50505050565b6000600282049050600182168061105657607f821691505b6020821081141561106a576110696110d0565b5b50919050565b611079826111a0565b810181811067ffffffffffffffff821117156110985761109761115d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b61123281610fb3565b811461123d57600080fd5b50565b61124981610fe5565b811461125457600080fd5b50565b61126081610fef565b811461126b57600080fd5b5056fea264697066735822122049d33318b02c150a6187132e5e479e7266a9b255f43f6e3cc95182118647710c64736f6c63430008070033";

type UnicrowPrimaryTokensListMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnicrowPrimaryTokensListMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnicrowPrimaryTokensListMock__factory extends ContractFactory {
  constructor(...args: UnicrowPrimaryTokensListMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UnicrowPrimaryTokensListMock";
  }

  deploy(
    governanceAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnicrowPrimaryTokensListMock> {
    return super.deploy(
      governanceAddress_,
      overrides || {}
    ) as Promise<UnicrowPrimaryTokensListMock>;
  }
  getDeployTransaction(
    governanceAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(governanceAddress_, overrides || {});
  }
  attach(address: string): UnicrowPrimaryTokensListMock {
    return super.attach(address) as UnicrowPrimaryTokensListMock;
  }
  connect(signer: Signer): UnicrowPrimaryTokensListMock__factory {
    return super.connect(signer) as UnicrowPrimaryTokensListMock__factory;
  }
  static readonly contractName: "UnicrowPrimaryTokensListMock";
  public readonly contractName: "UnicrowPrimaryTokensListMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnicrowPrimaryTokensListMockInterface {
    return new utils.Interface(_abi) as UnicrowPrimaryTokensListMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnicrowPrimaryTokensListMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UnicrowPrimaryTokensListMock;
  }
}
