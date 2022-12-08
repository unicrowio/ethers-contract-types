"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowRewardsMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "unicrowGovernance_",
                type: "address",
            },
            {
                internalType: "address",
                name: "unicrow_",
                type: "address",
            },
            {
                internalType: "address",
                name: "unicrowClaim_",
                type: "address",
            },
            {
                internalType: "address",
                name: "crowToken_",
                type: "address",
            },
            {
                internalType: "address",
                name: "scrow_",
                type: "address",
            },
            {
                internalType: "address",
                name: "crowStaking_",
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
                indexed: false,
                internalType: "address",
                name: "address_",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "ClaimAndStake",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "address_",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Claimed",
        type: "event",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Reward",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "calculateReward",
        outputs: [
            {
                internalType: "uint256[2]",
                name: "",
                type: "uint256[2]",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "claimAndStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "crowStaking",
        outputs: [
            {
                internalType: "contract ICrowStaking",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "crowToken",
        outputs: [
            {
                internalType: "contract IERC20",
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
                internalType: "address",
                name: "buyer",
                type: "address",
            },
            {
                internalType: "address",
                name: "seller",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "distribute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getLatestPrice",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "address[]",
                name: "addresses",
                type: "address[]",
            },
        ],
        name: "reallocate",
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
                name: "",
                type: "address",
            },
        ],
        name: "rewards",
        outputs: [
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "lastUpdate",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardsAvailable",
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
        name: "rewardsTax",
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
        name: "sCrow",
        outputs: [
            {
                internalType: "contract IERC20",
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
                name: "address_",
                type: "uint256",
            },
        ],
        name: "setTax",
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
        inputs: [],
        name: "unicrow",
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
        inputs: [],
        name: "unicrowClaim",
        outputs: [
            {
                internalType: "contract UnicrowClaim",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405268056bc75e2d63100000600955670de0b6b3a7640000600a553480156200002a57600080fd5b5060405162002103380380620021038339818101604052810190620000509190620002ec565b62000070620000646200020960201b60201c565b6200021160201b60201c565b6001808190555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050620003db565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620002e681620003c1565b92915050565b60008060008060008060c087890312156200030c576200030b620003bc565b5b60006200031c89828a01620002d5565b96505060206200032f89828a01620002d5565b95505060406200034289828a01620002d5565b94505060606200035589828a01620002d5565b93505060806200036889828a01620002d5565b92505060a06200037b89828a01620002d5565b9150509295509295509295565b600062000395826200039c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620003cc8162000388565b8114620003d857600080fd5b50565b611d1880620003eb6000396000f3fe60806040526004361061010d5760003560e01c80638e15f47311610095578063d0d8e73211610064578063d0d8e73214610307578063d2d7231f14610330578063e7a7250a1461036d578063e9db7d7914610398578063f2fde38b146103c357610114565b80638e15f473146102855780638e95aecc1461029c578063a16a9183146102c7578063cb1a4fc0146102f057610114565b80634e71d92d116100dc5780634e71d92d146101d657806361f94048146101ed5780636e4e293414610218578063715018a6146102435780638da5cb5b1461025a57610114565b80630700037d146101195780631213c7ba1461015757806325caf390146101825780632e5bb6ff146101ad57610114565b3661011457005b600080fd5b34801561012557600080fd5b50610140600480360381019061013b919061141d565b6103ec565b60405161014e929190611809565b60405180910390f35b34801561016357600080fd5b5061016c610410565b60405161017991906116f4565b60405180910390f35b34801561018e57600080fd5b50610197610436565b6040516101a4919061170f565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf9190611513565b61045c565b005b3480156101e257600080fd5b506101eb6104c7565b005b3480156101f957600080fd5b5061020261071f565b60405161020f919061170f565b60405180910390f35b34801561022457600080fd5b5061022d610745565b60405161023a9190611695565b60405180910390f35b34801561024f57600080fd5b5061025861076b565b005b34801561026657600080fd5b5061026f6107f3565b60405161027c9190611695565b60405180910390f35b34801561029157600080fd5b5061029a61081c565b005b3480156102a857600080fd5b506102b161081e565b6040516102be91906117c5565b60405180910390f35b3480156102d357600080fd5b506102ee60048036038101906102e9919061144a565b610824565b005b3480156102fc57600080fd5b50610305610b00565b005b34801561031357600080fd5b5061032e6004803603810190610329919061149d565b610e4b565b005b34801561033c57600080fd5b5061035760048036038101906103529190611513565b611029565b60405161036491906116d9565b60405180910390f35b34801561037957600080fd5b506103826110d6565b60405161038f91906117c5565b60405180910390f35b3480156103a457600080fd5b506103ad6110dc565b6040516103ba919061172a565b60405180910390f35b3480156103cf57600080fd5b506103ea60048036038101906103e5919061141d565b611102565b005b600b6020528060005260406000206000915090508060000154908060010154905082565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661049d6111fa565b73ffffffffffffffffffffffffffffffffffffffff16146104bd57600080fd5b8060088190555050565b6002600154141561050d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610504906117a5565b60405180910390fd5b60026001819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154111561071657600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546040518363ffffffff1660e01b81526004016105ff9291906116b0565b602060405180830381600087803b15801561061957600080fd5b505af115801561062d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065191906114e6565b506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a33600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460405161070d9291906116b0565b60405180910390a15b60018081905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107736111fa565b73ffffffffffffffffffffffffffffffffffffffff166107916107f3565b73ffffffffffffffffffffffffffffffffffffffff16146107e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107de90611785565b60405180910390fd5b6107f16000611202565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b565b60085481565b600061082f82611029565b90506009548160016002811061084857610847611b50565b5b60200201518260006002811061086157610860611b50565b5b602002015161087091906118c1565b106108b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a790611765565b60405180910390fd5b61091d816000600281106108c7576108c6611b50565b5b6020020151600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546112c690919063ffffffff16565b600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506109d08160016002811061097a57610979611b50565b5b6020020151600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546112c690919063ffffffff16565b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555042600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555042600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550610af481600160028110610abb57610aba611b50565b5b602002015182600060028110610ad457610ad3611b50565b5b6020020151610ae391906118c1565b6009546112dc90919063ffffffff16565b60098190555050505050565b60026001541415610b46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3d906117a5565b60405180910390fd5b60026001819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541115610e4257600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546040518363ffffffff1660e01b8152600401610c5a9291906116b0565b602060405180830381600087803b158015610c7457600080fd5b505af1158015610c88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cac91906114e6565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637acb7757600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154336040518363ffffffff1660e01b8152600401610d4c9291906117e0565b600060405180830381600087803b158015610d6657600080fd5b505af1158015610d7a573d6000803e3d6000fd5b505050506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507f68495e3d64715347985c953095ae70deaae00087c5efc4a3aa0e00b370441b2433600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154604051610e399291906116b0565b60405180910390a15b60018081905550565b6000805b825181101561100957600a42610e6591906119a2565b600b6000858481518110610e7c57610e7b611b50565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541015610ff657600b6000848381518110610edf57610ede611b50565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015482610f3091906118c1565b91506000600b6000858481518110610f4b57610f4a611b50565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555042600b6000858481518110610fac57610fab611b50565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505b808061100190611aa9565b915050610e4f565b5061101f816009546112c690919063ffffffff16565b6009819055505050565b61103161131e565b61103961131e565b61106661271061ffff16611058856107d06112f290919063ffffffff16565b61130890919063ffffffff16565b8160006002811061107a57611079611b50565b5b6020020181815250506110b061271061ffff166110a285611f406112f290919063ffffffff16565b61130890919063ffffffff16565b816001600281106110c4576110c3611b50565b5b60200201818152505080915050919050565b60095481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61110a6111fa565b73ffffffffffffffffffffffffffffffffffffffff166111286107f3565b73ffffffffffffffffffffffffffffffffffffffff161461117e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117590611785565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e590611745565b60405180910390fd5b6111f781611202565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081836112d491906118c1565b905092915050565b600081836112ea91906119a2565b905092915050565b600081836113009190611948565b905092915050565b600081836113169190611917565b905092915050565b6040518060400160405280600290602082028036833780820191505090505090565b600061135361134e84611857565b611832565b9050808382526020820190508285602086028201111561137657611375611bb3565b5b60005b858110156113a6578161138c88826113b0565b845260208401935060208301925050600181019050611379565b5050509392505050565b6000813590506113bf81611c9d565b92915050565b600082601f8301126113da576113d9611bae565b5b81356113ea848260208601611340565b91505092915050565b60008151905061140281611cb4565b92915050565b60008135905061141781611ccb565b92915050565b60006020828403121561143357611432611bbd565b5b6000611441848285016113b0565b91505092915050565b60008060006060848603121561146357611462611bbd565b5b6000611471868287016113b0565b9350506020611482868287016113b0565b925050604061149386828701611408565b9150509250925092565b6000602082840312156114b3576114b2611bbd565b5b600082013567ffffffffffffffff8111156114d1576114d0611bb8565b5b6114dd848285016113c5565b91505092915050565b6000602082840312156114fc576114fb611bbd565b5b600061150a848285016113f3565b91505092915050565b60006020828403121561152957611528611bbd565b5b600061153784828501611408565b91505092915050565b600061154c8383611677565b60208301905092915050565b611561816119d6565b82525050565b6115708161188d565b61157a81846118a5565b925061158582611883565b8060005b838110156115b657815161159d8782611540565b96506115a883611898565b925050600181019050611589565b505050505050565b6115c781611a1e565b82525050565b6115d681611a30565b82525050565b6115e581611a42565b82525050565b60006115f86026836118b0565b915061160382611bd3565b604082019050919050565b600061161b6005836118b0565b915061162682611c22565b602082019050919050565b600061163e6020836118b0565b915061164982611c4b565b602082019050919050565b6000611661601f836118b0565b915061166c82611c74565b602082019050919050565b61168081611a14565b82525050565b61168f81611a14565b82525050565b60006020820190506116aa6000830184611558565b92915050565b60006040820190506116c56000830185611558565b6116d26020830184611686565b9392505050565b60006040820190506116ee6000830184611567565b92915050565b600060208201905061170960008301846115be565b92915050565b600060208201905061172460008301846115cd565b92915050565b600060208201905061173f60008301846115dc565b92915050565b6000602082019050818103600083015261175e816115eb565b9050919050565b6000602082019050818103600083015261177e8161160e565b9050919050565b6000602082019050818103600083015261179e81611631565b9050919050565b600060208201905081810360008301526117be81611654565b9050919050565b60006020820190506117da6000830184611686565b92915050565b60006040820190506117f56000830185611686565b6118026020830184611558565b9392505050565b600060408201905061181e6000830185611686565b61182b6020830184611686565b9392505050565b600061183c61184d565b90506118488282611a78565b919050565b6000604051905090565b600067ffffffffffffffff82111561187257611871611b7f565b5b602082029050602081019050919050565b6000819050919050565b600060029050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b60006118cc82611a14565b91506118d783611a14565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561190c5761190b611af2565b5b828201905092915050565b600061192282611a14565b915061192d83611a14565b92508261193d5761193c611b21565b5b828204905092915050565b600061195382611a14565b915061195e83611a14565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561199757611996611af2565b5b828202905092915050565b60006119ad82611a14565b91506119b883611a14565b9250828210156119cb576119ca611af2565b5b828203905092915050565b60006119e1826119f4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611a2982611a54565b9050919050565b6000611a3b82611a54565b9050919050565b6000611a4d82611a54565b9050919050565b6000611a5f82611a66565b9050919050565b6000611a71826119f4565b9050919050565b611a8182611bc2565b810181811067ffffffffffffffff82111715611aa057611a9f611b7f565b5b80604052505050565b6000611ab482611a14565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ae757611ae6611af2565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f312d303231000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b611ca6816119d6565b8114611cb157600080fd5b50565b611cbd816119e8565b8114611cc857600080fd5b50565b611cd481611a14565b8114611cdf57600080fd5b5056fea26469706673582212202eb56e9012475cef74248bc917cded4154194dd2a739c6fed6b0342ccc92d91064736f6c63430008070033";
const isSuperArgs = (xs) => xs.length > 1;
class CrowRewardsMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "CrowRewardsMock";
    }
    deploy(unicrowGovernance_, unicrow_, unicrowClaim_, crowToken_, scrow_, crowStaking_, overrides) {
        return super.deploy(unicrowGovernance_, unicrow_, unicrowClaim_, crowToken_, scrow_, crowStaking_, overrides || {});
    }
    getDeployTransaction(unicrowGovernance_, unicrow_, unicrowClaim_, crowToken_, scrow_, crowStaking_, overrides) {
        return super.getDeployTransaction(unicrowGovernance_, unicrow_, unicrowClaim_, crowToken_, scrow_, crowStaking_, overrides || {});
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
exports.CrowRewardsMock__factory = CrowRewardsMock__factory;
CrowRewardsMock__factory.bytecode = _bytecode;
CrowRewardsMock__factory.abi = _abi;
