"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDCToken__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "address",
                name: "initialAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialBalance",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "approveInternal",
        outputs: [],
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
        ],
        name: "balanceOf",
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
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "transferInternal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405260405162001fa838038062001fa883398181016040528101906200002991906200035a565b8383816003908051906020019062000043929190620001fe565b5080600490805190602001906200005c929190620001fe565b5050506200007182826200007b60201b60201c565b505050506200073d565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000e59062000442565b60405180910390fd5b6200010260008383620001f460201b60201c565b8060026000828254620001169190620004f1565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200016d9190620004f1565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001d4919062000464565b60405180910390a3620001f060008383620001f960201b60201c565b5050565b505050565b505050565b8280546200020c90620005c2565b90600052602060002090601f0160209004810192826200023057600085556200027c565b82601f106200024b57805160ff19168380011785556200027c565b828001600101855582156200027c579182015b828111156200027b5782518255916020019190600101906200025e565b5b5090506200028b91906200028f565b5090565b5b80821115620002aa57600081600090555060010162000290565b5090565b6000620002c5620002bf84620004aa565b62000481565b905082815260208101848484011115620002e457620002e3620006c0565b5b620002f18482856200058c565b509392505050565b6000815190506200030a8162000709565b92915050565b600082601f830112620003285762000327620006bb565b5b81516200033a848260208601620002ae565b91505092915050565b600081519050620003548162000723565b92915050565b60008060008060808587031215620003775762000376620006ca565b5b600085015167ffffffffffffffff811115620003985762000397620006c5565b5b620003a68782880162000310565b945050602085015167ffffffffffffffff811115620003ca57620003c9620006c5565b5b620003d88782880162000310565b9350506040620003eb87828801620002f9565b9250506060620003fe8782880162000343565b91505092959194509250565b600062000419601f83620004e0565b91506200042682620006e0565b602082019050919050565b6200043c8162000582565b82525050565b600060208201905081810360008301526200045d816200040a565b9050919050565b60006020820190506200047b600083018462000431565b92915050565b60006200048d620004a0565b90506200049b8282620005f8565b919050565b6000604051905090565b600067ffffffffffffffff821115620004c857620004c76200068c565b5b620004d382620006cf565b9050602081019050919050565b600082825260208201905092915050565b6000620004fe8262000582565b91506200050b8362000582565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200054357620005426200062e565b5b828201905092915050565b60006200055b8262000562565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620005ac5780820151818401526020810190506200058f565b83811115620005bc576000848401525b50505050565b60006002820490506001821680620005db57607f821691505b60208210811415620005f257620005f16200065d565b5b50919050565b6200060382620006cf565b810181811067ffffffffffffffff821117156200062557620006246200068c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b62000714816200054e565b81146200072057600080fd5b50565b6200072e8162000582565b81146200073a57600080fd5b50565b61185b806200074d6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f19116100975780639dc29fac116100665780639dc29fac14610286578063a457c2d7146102a2578063a9059cbb146102d2578063dd62ed3e14610302576100f5565b806340c10f191461020057806356189cb41461021c57806370a082311461023857806395d89b4114610268576100f5565b8063222f5be0116100d3578063222f5be01461016657806323b872dd14610182578063313ce567146101b257806339509351146101d0576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610332565b60405161010f91906111c1565b60405180910390f35b610132600480360381019061012d9190610fa2565b6103c4565b60405161013f91906111a6565b60405180910390f35b6101506103e7565b60405161015d9190611323565b60405180910390f35b610180600480360381019061017b9190610f4f565b6103f1565b005b61019c60048036038101906101979190610f4f565b610401565b6040516101a991906111a6565b60405180910390f35b6101ba610430565b6040516101c7919061133e565b60405180910390f35b6101ea60048036038101906101e59190610fa2565b610439565b6040516101f791906111a6565b60405180910390f35b61021a60048036038101906102159190610fa2565b610470565b005b61023660048036038101906102319190610f4f565b61047e565b005b610252600480360381019061024d9190610ee2565b61048e565b60405161025f9190611323565b60405180910390f35b6102706104d6565b60405161027d91906111c1565b60405180910390f35b6102a0600480360381019061029b9190610fa2565b610568565b005b6102bc60048036038101906102b79190610fa2565b610576565b6040516102c991906111a6565b60405180910390f35b6102ec60048036038101906102e79190610fa2565b6105ed565b6040516102f991906111a6565b60405180910390f35b61031c60048036038101906103179190610f0f565b610610565b6040516103299190611323565b60405180910390f35b60606003805461034190611487565b80601f016020809104026020016040519081016040528092919081815260200182805461036d90611487565b80156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b5050505050905090565b6000806103cf610697565b90506103dc81858561069f565b600191505092915050565b6000600254905090565b6103fc83838361086a565b505050565b60008061040c610697565b9050610419858285610aeb565b61042485858561086a565b60019150509392505050565b60006006905090565b600080610444610697565b90506104658185856104568589610610565b6104609190611375565b61069f565b600191505092915050565b61047a8282610b77565b5050565b61048983838361069f565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546104e590611487565b80601f016020809104026020016040519081016040528092919081815260200182805461051190611487565b801561055e5780601f106105335761010080835404028352916020019161055e565b820191906000526020600020905b81548152906001019060200180831161054157829003601f168201915b5050505050905090565b6105728282610cd7565b5050565b600080610581610697565b9050600061058f8286610610565b9050838110156105d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cb906112e3565b60405180910390fd5b6105e1828686840361069f565b60019250505092915050565b6000806105f8610697565b905061060581858561086a565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561070f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610706906112c3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561077f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077690611223565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161085d9190611323565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d1906112a3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561094a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610941906111e3565b60405180910390fd5b610955838383610eae565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d290611263565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a6e9190611375565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ad29190611323565b60405180910390a3610ae5848484610eb3565b50505050565b6000610af78484610610565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b715781811015610b63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5a90611243565b60405180910390fd5b610b70848484840361069f565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610be7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bde90611303565b60405180910390fd5b610bf360008383610eae565b8060026000828254610c059190611375565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c5a9190611375565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610cbf9190611323565b60405180910390a3610cd360008383610eb3565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3e90611283565b60405180910390fd5b610d5382600083610eae565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd090611203565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610e3091906113cb565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e959190611323565b60405180910390a3610ea983600084610eb3565b505050565b505050565b505050565b600081359050610ec7816117f7565b92915050565b600081359050610edc8161180e565b92915050565b600060208284031215610ef857610ef7611517565b5b6000610f0684828501610eb8565b91505092915050565b60008060408385031215610f2657610f25611517565b5b6000610f3485828601610eb8565b9250506020610f4585828601610eb8565b9150509250929050565b600080600060608486031215610f6857610f67611517565b5b6000610f7686828701610eb8565b9350506020610f8786828701610eb8565b9250506040610f9886828701610ecd565b9150509250925092565b60008060408385031215610fb957610fb8611517565b5b6000610fc785828601610eb8565b9250506020610fd885828601610ecd565b9150509250929050565b610feb81611411565b82525050565b6000610ffc82611359565b6110068185611364565b9350611016818560208601611454565b61101f8161151c565b840191505092915050565b6000611037602383611364565b91506110428261152d565b604082019050919050565b600061105a602283611364565b91506110658261157c565b604082019050919050565b600061107d602283611364565b9150611088826115cb565b604082019050919050565b60006110a0601d83611364565b91506110ab8261161a565b602082019050919050565b60006110c3602683611364565b91506110ce82611643565b604082019050919050565b60006110e6602183611364565b91506110f182611692565b604082019050919050565b6000611109602583611364565b9150611114826116e1565b604082019050919050565b600061112c602483611364565b915061113782611730565b604082019050919050565b600061114f602583611364565b915061115a8261177f565b604082019050919050565b6000611172601f83611364565b915061117d826117ce565b602082019050919050565b6111918161143d565b82525050565b6111a081611447565b82525050565b60006020820190506111bb6000830184610fe2565b92915050565b600060208201905081810360008301526111db8184610ff1565b905092915050565b600060208201905081810360008301526111fc8161102a565b9050919050565b6000602082019050818103600083015261121c8161104d565b9050919050565b6000602082019050818103600083015261123c81611070565b9050919050565b6000602082019050818103600083015261125c81611093565b9050919050565b6000602082019050818103600083015261127c816110b6565b9050919050565b6000602082019050818103600083015261129c816110d9565b9050919050565b600060208201905081810360008301526112bc816110fc565b9050919050565b600060208201905081810360008301526112dc8161111f565b9050919050565b600060208201905081810360008301526112fc81611142565b9050919050565b6000602082019050818103600083015261131c81611165565b9050919050565b60006020820190506113386000830184611188565b92915050565b60006020820190506113536000830184611197565b92915050565b600081519050919050565b600082825260208201905092915050565b60006113808261143d565b915061138b8361143d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113c0576113bf6114b9565b5b828201905092915050565b60006113d68261143d565b91506113e18361143d565b9250828210156113f4576113f36114b9565b5b828203905092915050565b600061140a8261141d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611472578082015181840152602081019050611457565b83811115611481576000848401525b50505050565b6000600282049050600182168061149f57607f821691505b602082108114156114b3576114b26114e8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611800816113ff565b811461180b57600080fd5b50565b6118178161143d565b811461182257600080fd5b5056fea2646970667358221220883b05fdf866d10471c931f0ee36a8fd5c7312f808d7cb10458a9bc4e8326f0d64736f6c63430008070033";
const isSuperArgs = (xs) => xs.length > 1;
class USDCToken__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "USDCToken";
    }
    deploy(name_, symbol_, initialAccount, initialBalance, overrides) {
        return super.deploy(name_, symbol_, initialAccount, initialBalance, overrides || {});
    }
    getDeployTransaction(name_, symbol_, initialAccount, initialBalance, overrides) {
        return super.getDeployTransaction(name_, symbol_, initialAccount, initialBalance, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.USDCToken__factory = USDCToken__factory;
USDCToken__factory.bytecode = _bytecode;
USDCToken__factory.abi = _abi;
