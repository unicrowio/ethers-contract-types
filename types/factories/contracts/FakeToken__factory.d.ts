import { Signer, ContractFactory, ContractTransactionResponse, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { FakeToken, FakeTokenInterface } from "../../contracts/FakeToken";
type FakeTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FakeToken__factory extends ContractFactory {
    constructor(...args: FakeTokenConstructorParams);
    getDeployTransaction(name: string, symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name: string, symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<FakeToken & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): FakeToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162000eaa38038062000eaa8339810160408190526200003491620002f0565b8151829082906200004d90600390602085019062000193565b5080516200006390600490602084019062000193565b5050506200009e336200007b620000a660201b60201c565b6200008890600a620003be565b62000098906311e1a3006200048c565b620000ab565b505062000517565b601290565b6001600160a01b038216620001065760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200011a91906200035a565b90915550506001600160a01b03821660009081526020819052604081208054839290620001499084906200035a565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001a190620004ae565b90600052602060002090601f016020900481019282620001c5576000855562000210565b82601f10620001e057805160ff191683800117855562000210565b8280016001018555821562000210579182015b8281111562000210578251825591602001919060010190620001f3565b506200021e92915062000222565b5090565b5b808211156200021e576000815560010162000223565b600082601f8301126200024b57600080fd5b81516001600160401b038082111562000268576200026862000501565b604051601f8301601f19908116603f0116810190828211818310171562000293576200029362000501565b81604052838152602092508683858801011115620002b057600080fd5b600091505b83821015620002d45785820183015181830184015290820190620002b5565b83821115620002e65760008385830101525b9695505050505050565b600080604083850312156200030457600080fd5b82516001600160401b03808211156200031c57600080fd5b6200032a8683870162000239565b935060208501519150808211156200034157600080fd5b50620003508582860162000239565b9150509250929050565b60008219821115620003705762000370620004eb565b500190565b600181815b80851115620003b65781600019048211156200039a576200039a620004eb565b80851615620003a857918102915b93841c93908002906200037a565b509250929050565b6000620003cf60ff841683620003d6565b9392505050565b600082620003e75750600162000486565b81620003f65750600062000486565b81600181146200040f57600281146200041a576200043a565b600191505062000486565b60ff8411156200042e576200042e620004eb565b50506001821b62000486565b5060208310610133831016604e8410600b84101617156200045f575081810a62000486565b6200046b838362000375565b8060001904821115620004825762000482620004eb565b0290505b92915050565b6000816000190483118215151615620004a957620004a9620004eb565b500290565b600181811c90821680620004c357607f821691505b60208210811415620004e557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61098380620005276000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461017f57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e6565b6040516100e39190610897565b60405180910390f35b6100ff6100fa36600461086d565b610278565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f366004610831565b610290565b604051601281526020016100e3565b6100ff61015136600461086d565b6102b4565b6101136101643660046107dc565b6001600160a01b031660009081526020819052604090205490565b6100d66102f3565b6100ff61019536600461086d565b610302565b6100ff6101a836600461086d565b6103b1565b6101136101bb3660046107fe565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f590610912565b80601f016020809104026020016040519081016040528092919081815260200182805461022190610912565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b6000336102868185856103bf565b5060019392505050565b60003361029e858285610517565b6102a98585856105a9565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028690829086906102ee9087906108ec565b6103bf565b6060600480546101f590610912565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103a45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102a982868684036103bf565b6000336102868185856105a9565b6001600160a01b03831661043a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0382166104b65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105a357818110156105965760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161039b565b6105a384848484036103bf565b50505050565b6001600160a01b0383166106255760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0382166106a15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b038316600090815260208190526040902054818110156107305760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107679084906108ec565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107b391815260200190565b60405180910390a36105a3565b80356001600160a01b03811681146107d757600080fd5b919050565b6000602082840312156107ee57600080fd5b6107f7826107c0565b9392505050565b6000806040838503121561081157600080fd5b61081a836107c0565b9150610828602084016107c0565b90509250929050565b60008060006060848603121561084657600080fd5b61084f846107c0565b925061085d602085016107c0565b9150604084013590509250925092565b6000806040838503121561088057600080fd5b610889836107c0565b946020939093013593505050565b600060208083528351808285015260005b818110156108c4578581018301518582016040015282016108a8565b818111156108d6576000604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561090d57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061092657607f821691505b6020821081141561094757634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220b6729888f194df09f01638608240df514693cc17cced8d2080b7071933d7fbd164736f6c63430008070033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FakeTokenInterface;
    static connect(address: string, runner?: ContractRunner | null): FakeToken;
}
export {};
