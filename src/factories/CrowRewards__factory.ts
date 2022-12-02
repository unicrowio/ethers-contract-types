/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CrowRewards, CrowRewardsInterface } from "../CrowRewards";

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
    stateMutability: "nonpayable",
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

const _bytecode =
  "0x608060405268056bc75e2d63100000600955670de0b6b3a7640000600a553480156200002a57600080fd5b506040516200226f3803806200226f8339818101604052810190620000509190620002ec565b62000070620000646200020960201b60201c565b6200021160201b60201c565b6001808190555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050620003db565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620002e681620003c1565b92915050565b60008060008060008060c087890312156200030c576200030b620003bc565b5b60006200031c89828a01620002d5565b96505060206200032f89828a01620002d5565b95505060406200034289828a01620002d5565b94505060606200035589828a01620002d5565b93505060806200036889828a01620002d5565b92505060a06200037b89828a01620002d5565b9150509295509295509295565b600062000395826200039c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620003cc8162000388565b8114620003d857600080fd5b50565b611e8480620003eb6000396000f3fe60806040526004361061010d5760003560e01c80638e15f47311610095578063d0d8e73211610064578063d0d8e73214610307578063d2d7231f14610330578063e7a7250a1461036d578063e9db7d7914610398578063f2fde38b146103c357610114565b80638e15f473146102855780638e95aecc1461029c578063a16a9183146102c7578063cb1a4fc0146102f057610114565b80634e71d92d116100dc5780634e71d92d146101d657806361f94048146101ed5780636e4e293414610218578063715018a6146102435780638da5cb5b1461025a57610114565b80630700037d146101195780631213c7ba1461015757806325caf390146101825780632e5bb6ff146101ad57610114565b3661011457005b600080fd5b34801561012557600080fd5b50610140600480360381019061013b919061151d565b6103ec565b60405161014e92919061194c565b60405180910390f35b34801561016357600080fd5b5061016c610410565b6040516101799190611817565b60405180910390f35b34801561018e57600080fd5b50610197610436565b6040516101a49190611832565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf9190611613565b61045c565b005b3480156101e257600080fd5b506101eb6104c7565b005b3480156101f957600080fd5b5061020261071f565b60405161020f9190611832565b60405180910390f35b34801561022457600080fd5b5061022d610745565b60405161023a91906117b8565b60405180910390f35b34801561024f57600080fd5b5061025861076b565b005b34801561026657600080fd5b5061026f6107f3565b60405161027c91906117b8565b60405180910390f35b34801561029157600080fd5b5061029a61081c565b005b3480156102a857600080fd5b506102b161081e565b6040516102be9190611908565b60405180910390f35b3480156102d357600080fd5b506102ee60048036038101906102e9919061154a565b610824565b005b3480156102fc57600080fd5b50610305610bfa565b005b34801561031357600080fd5b5061032e6004803603810190610329919061159d565b610f45565b005b34801561033c57600080fd5b5061035760048036038101906103529190611613565b611123565b60405161036491906117fc565b60405180910390f35b34801561037957600080fd5b506103826111d6565b60405161038f9190611908565b60405180910390f35b3480156103a457600080fd5b506103ad6111dc565b6040516103ba919061184d565b60405180910390f35b3480156103cf57600080fd5b506103ea60048036038101906103e5919061151d565b611202565b005b600b6020528060005260406000206000915090508060000154908060010154905082565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661049d6112fa565b73ffffffffffffffffffffffffffffffffffffffff16146104bd57600080fd5b8060088190555050565b6002600154141561050d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610504906118e8565b60405180910390fd5b60026001819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154111561071657600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546040518363ffffffff1660e01b81526004016105ff9291906117d3565b602060405180830381600087803b15801561061957600080fd5b505af115801561062d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065191906115e6565b506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a33600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460405161070d9291906117d3565b60405180910390a15b60018081905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107736112fa565b73ffffffffffffffffffffffffffffffffffffffff166107916107f3565b73ffffffffffffffffffffffffffffffffffffffff16146107e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107de906118c8565b60405180910390fd5b6107f16000611302565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b565b60085481565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108cd5750600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61090c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610903906118a8565b60405180910390fd5b600061091782611123565b905060095481600160ff166002811061093357610932611c93565b5b602002015182600060ff166002811061094f5761094e611c93565b5b602002015161095e9190611a04565b1061099e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099590611888565b60405180910390fd5b610a0e81600060ff16600281106109b8576109b7611c93565b5b6020020151600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546113c690919063ffffffff16565b600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550610ac481600160ff1660028110610a6e57610a6d611c93565b5b6020020151600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546113c690919063ffffffff16565b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555042600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555042600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550610bee81600160ff1660028110610bb257610bb1611c93565b5b602002015182600060ff1660028110610bce57610bcd611c93565b5b6020020151610bdd9190611a04565b6009546113dc90919063ffffffff16565b60098190555050505050565b60026001541415610c40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c37906118e8565b60405180910390fd5b60026001819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541115610f3c57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546040518363ffffffff1660e01b8152600401610d549291906117d3565b602060405180830381600087803b158015610d6e57600080fd5b505af1158015610d82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da691906115e6565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637acb7757600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154336040518363ffffffff1660e01b8152600401610e46929190611923565b600060405180830381600087803b158015610e6057600080fd5b505af1158015610e74573d6000803e3d6000fd5b505050506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507f68495e3d64715347985c953095ae70deaae00087c5efc4a3aa0e00b370441b2433600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154604051610f339291906117d3565b60405180910390a15b60018081905550565b6000805b825181101561110357600a42610f5f9190611ae5565b600b6000858481518110610f7657610f75611c93565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015410156110f057600b6000848381518110610fd957610fd8611c93565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548261102a9190611a04565b91506000600b600085848151811061104557611044611c93565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555042600b60008584815181106110a6576110a5611c93565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505b80806110fb90611bec565b915050610f49565b50611119816009546113c690919063ffffffff16565b6009819055505050565b61112b61141e565b61113361141e565b61116061271061ffff16611152611388866113f290919063ffffffff16565b61140890919063ffffffff16565b81600060ff166002811061117757611176611c93565b5b6020020181815250506111ad61271061ffff1661119f611388866113f290919063ffffffff16565b61140890919063ffffffff16565b81600160ff16600281106111c4576111c3611c93565b5b60200201818152505080915050919050565b60095481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61120a6112fa565b73ffffffffffffffffffffffffffffffffffffffff166112286107f3565b73ffffffffffffffffffffffffffffffffffffffff161461127e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611275906118c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e590611868565b60405180910390fd5b6112f781611302565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081836113d49190611a04565b905092915050565b600081836113ea9190611ae5565b905092915050565b600081836114009190611a8b565b905092915050565b600081836114169190611a5a565b905092915050565b6040518060400160405280600290602082028036833780820191505090505090565b600061145361144e8461199a565b611975565b9050808382526020820190508285602086028201111561147657611475611cf6565b5b60005b858110156114a6578161148c88826114b0565b845260208401935060208301925050600181019050611479565b5050509392505050565b6000813590506114bf81611e09565b92915050565b600082601f8301126114da576114d9611cf1565b5b81356114ea848260208601611440565b91505092915050565b60008151905061150281611e20565b92915050565b60008135905061151781611e37565b92915050565b60006020828403121561153357611532611d00565b5b6000611541848285016114b0565b91505092915050565b60008060006060848603121561156357611562611d00565b5b6000611571868287016114b0565b9350506020611582868287016114b0565b925050604061159386828701611508565b9150509250925092565b6000602082840312156115b3576115b2611d00565b5b600082013567ffffffffffffffff8111156115d1576115d0611cfb565b5b6115dd848285016114c5565b91505092915050565b6000602082840312156115fc576115fb611d00565b5b600061160a848285016114f3565b91505092915050565b60006020828403121561162957611628611d00565b5b600061163784828501611508565b91505092915050565b600061164c838361179a565b60208301905092915050565b61166181611b19565b82525050565b611670816119d0565b61167a81846119e8565b9250611685826119c6565b8060005b838110156116b657815161169d8782611640565b96506116a8836119db565b925050600181019050611689565b505050505050565b6116c781611b61565b82525050565b6116d681611b73565b82525050565b6116e581611b85565b82525050565b60006116f86026836119f3565b915061170382611d16565b604082019050919050565b600061171b6005836119f3565b915061172682611d65565b602082019050919050565b600061173e6005836119f3565b915061174982611d8e565b602082019050919050565b60006117616020836119f3565b915061176c82611db7565b602082019050919050565b6000611784601f836119f3565b915061178f82611de0565b602082019050919050565b6117a381611b57565b82525050565b6117b281611b57565b82525050565b60006020820190506117cd6000830184611658565b92915050565b60006040820190506117e86000830185611658565b6117f560208301846117a9565b9392505050565b60006040820190506118116000830184611667565b92915050565b600060208201905061182c60008301846116be565b92915050565b600060208201905061184760008301846116cd565b92915050565b600060208201905061186260008301846116dc565b92915050565b60006020820190508181036000830152611881816116eb565b9050919050565b600060208201905081810360008301526118a18161170e565b9050919050565b600060208201905081810360008301526118c181611731565b9050919050565b600060208201905081810360008301526118e181611754565b9050919050565b6000602082019050818103600083015261190181611777565b9050919050565b600060208201905061191d60008301846117a9565b92915050565b600060408201905061193860008301856117a9565b6119456020830184611658565b9392505050565b600060408201905061196160008301856117a9565b61196e60208301846117a9565b9392505050565b600061197f611990565b905061198b8282611bbb565b919050565b6000604051905090565b600067ffffffffffffffff8211156119b5576119b4611cc2565b5b602082029050602081019050919050565b6000819050919050565b600060029050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b6000611a0f82611b57565b9150611a1a83611b57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a4f57611a4e611c35565b5b828201905092915050565b6000611a6582611b57565b9150611a7083611b57565b925082611a8057611a7f611c64565b5b828204905092915050565b6000611a9682611b57565b9150611aa183611b57565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611ada57611ad9611c35565b5b828202905092915050565b6000611af082611b57565b9150611afb83611b57565b925082821015611b0e57611b0d611c35565b5b828203905092915050565b6000611b2482611b37565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611b6c82611b97565b9050919050565b6000611b7e82611b97565b9050919050565b6000611b9082611b97565b9050919050565b6000611ba282611ba9565b9050919050565b6000611bb482611b37565b9050919050565b611bc482611d05565b810181811067ffffffffffffffff82111715611be357611be2611cc2565b5b80604052505050565b6000611bf782611b57565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c2a57611c29611c35565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f312d303231000000000000000000000000000000000000000000000000000000600082015250565b7f302d303037000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b611e1281611b19565b8114611e1d57600080fd5b50565b611e2981611b2b565b8114611e3457600080fd5b50565b611e4081611b57565b8114611e4b57600080fd5b5056fea2646970667358221220a6356e22006b1c6571795f7d46b8406d6220a46b49227e3753ffb3855cd431b464736f6c63430008070033";

type CrowRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowRewards__factory extends ContractFactory {
  constructor(...args: CrowRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CrowRewards";
  }

  deploy(
    unicrowGovernance_: string,
    unicrow_: string,
    unicrowClaim_: string,
    crowToken_: string,
    scrow_: string,
    crowStaking_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrowRewards> {
    return super.deploy(
      unicrowGovernance_,
      unicrow_,
      unicrowClaim_,
      crowToken_,
      scrow_,
      crowStaking_,
      overrides || {}
    ) as Promise<CrowRewards>;
  }
  getDeployTransaction(
    unicrowGovernance_: string,
    unicrow_: string,
    unicrowClaim_: string,
    crowToken_: string,
    scrow_: string,
    crowStaking_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      unicrowGovernance_,
      unicrow_,
      unicrowClaim_,
      crowToken_,
      scrow_,
      crowStaking_,
      overrides || {}
    );
  }
  attach(address: string): CrowRewards {
    return super.attach(address) as CrowRewards;
  }
  connect(signer: Signer): CrowRewards__factory {
    return super.connect(signer) as CrowRewards__factory;
  }
  static readonly contractName: "CrowRewards";
  public readonly contractName: "CrowRewards";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowRewardsInterface {
    return new utils.Interface(_abi) as CrowRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowRewards {
    return new Contract(address, _abi, signerOrProvider) as CrowRewards;
  }
}
