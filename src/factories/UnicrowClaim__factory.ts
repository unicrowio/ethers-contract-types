/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnicrowClaim, UnicrowClaimInterface } from "../UnicrowClaim";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "unicrow_",
        type: "address",
      },
      {
        internalType: "address",
        name: "unicrowArbitrator_",
        type: "address",
      },
      {
        internalType: "address",
        name: "protocolFeeAddress_",
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
        components: [
          {
            internalType: "uint256",
            name: "escrowId",
            type: "uint256",
          },
          {
            internalType: "uint256[5]",
            name: "amount",
            type: "uint256[5]",
          },
        ],
        indexed: false,
        internalType: "struct UnicrowClaim.ClaimEvent[]",
        name: "escrows",
        type: "tuple[]",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "escrowId",
            type: "uint256",
          },
          {
            internalType: "uint256[5]",
            name: "amount",
            type: "uint256[5]",
          },
        ],
        indexed: false,
        internalType: "struct UnicrowClaim.ClaimEvent",
        name: "escrow",
        type: "tuple",
      },
    ],
    name: "SingleClaim",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256[5]",
        name: "",
        type: "uint256[5]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "escrows",
        type: "uint256[]",
      },
    ],
    name: "claimMultiple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crowRewards",
    outputs: [
      {
        internalType: "contract IUnicrowClaimRewards",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeeAddress",
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
    name: "stakingRewards",
    outputs: [
      {
        internalType: "contract IUnicrowStakingRewards",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unicrow",
    outputs: [
      {
        internalType: "contract Unicrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unicrowArbitrator",
    outputs: [
      {
        internalType: "contract UnicrowArbitrator",
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
        name: "crowRewards_",
        type: "address",
      },
    ],
    name: "updateCrowRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "protocolFeeAddress_",
        type: "address",
      },
    ],
    name: "updateProtocolFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakingRewards_",
        type: "address",
      },
    ],
    name: "updateStakingRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002f5538038062002f5583398181016040528101906200003791906200010e565b60016000819055508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620001bd565b6000815190506200010881620001a3565b92915050565b6000806000606084860312156200012a57620001296200019e565b5b60006200013a86828701620000f7565b93505060206200014d86828701620000f7565b92505060406200016086828701620000f7565b9150509250925092565b600062000177826200017e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001ae816200016a565b8114620001ba57600080fd5b50565b60805160601c60a05160601c612d1f62000236600039600081816102e10152818161096601528181610c7401526115970152600081816102330152818161098a01528181610ad001528181610bad015281816112eb015281816114310152818161171501528181611ade0152611b950152612d1f6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639051cce9116100665780639051cce91461014957806394417bce14610165578063a76b8fb714610183578063cce516b71461019f578063eeca9a31146101bd5761009e565b8063379607f5146100a357806349c4920f146100d35780634cb6995a146100f157806364b87a701461010d5780636e4e29341461012b575b600080fd5b6100bd60048036038101906100b89190612266565b6101d9565b6040516100ca919061267a565b60405180910390f35b6100db610964565b6040516100e891906126cb565b60405180910390f35b61010b60048036038101906101069190612137565b610988565b005b610115610aa8565b60405161012291906126b0565b60405180910390f35b610133610ace565b60405161014091906126e6565b60405180910390f35b610163600480360381019061015e91906121be565b610af2565b005b61016d6112c3565b60405161017a9190612695565b60405180910390f35b61019d60048036038101906101989190612137565b6112e9565b005b6101a7611409565b6040516101b4919061257d565b60405180910390f35b6101d760048036038101906101d29190612137565b61142f565b005b6101e1611c71565b60026000541415610227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021e90612741565b60405180910390fd5b600260008190555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596846040518263ffffffff1660e01b815260040161028a919061277c565b6102006040518083038186803b1580156102a357600080fd5b505afa1580156102b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102db9190612238565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166316e0551b856040518263ffffffff1660e01b8152600401610338919061277c565b60a06040518083038186803b15801561035057600080fd5b505afa158015610364573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610388919061220b565b9050600082610100015161ffff16146103d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cd90612721565b60405180910390fd5b6001826101200151600160ff16600281106103f4576103f3612b57565b5b602002015160010b1215801561042e57506001826101200151600060ff166002811061042357610422612b57565b5b602002015160010b12155b8061044657508160c0015167ffffffffffffffff1642115b610485576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047c90612701565b60405180910390fd5b6000610491828461154f565b905060006104a484610160015183611899565b905060006040518060a00160405280866000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001856000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525090506105ef8783838860e00151611adc565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156106695750600082600360ff166005811061066257610661612b57565b5b6020020151115b1561072957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376770a9c8660e001518760000151886040015186600360ff16600581106106d2576106d1612b57565b5b60200201516040518563ffffffff1660e01b81526004016106f69493929190612598565b600060405180830381600087803b15801561071057600080fd5b505af1158015610724573d6000803e3d6000fd5b505050505b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156107a35750600082600360ff166005811061079c5761079b612b57565b5b6020020151115b1561085757600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632ec0ff6c8660e0015184600360ff166005811061080257610801612b57565b5b60200201516040518363ffffffff1660e01b81526004016108249291906125dd565b600060405180830381600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b505050505b7f4dcc1cbd3586ce0ab63396e3e3601351a6fd799aec0cd7bd657611103353356060405180604001604052808981526020018481525060405161089a9190612761565b60405180910390a16040518060a0016040528083600060ff16600581106108c4576108c3612b57565b5b6020020151815260200183600160ff16600581106108e5576108e4612b57565b5b6020020151815260200183600260ff166005811061090657610905612b57565b5b6020020151815260200183600360ff166005811061092757610926612b57565b5b6020020151815260200183600460ff166005811061094857610947612b57565b5b6020020151815250955050505050506001600081905550919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b1580156109ee57600080fd5b505afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190612164565b73ffffffffffffffffffffffffffffffffffffffff16610a44611c69565b73ffffffffffffffffffffffffffffffffffffffff1614610a6457600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60026000541415610b38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2f90612741565b60405180910390fd5b600260008190555060008282905067ffffffffffffffff811115610b5f57610b5e612b86565b5b604051908082528060200260200182016040528015610b9857816020015b610b85611c93565b815260200190600190039081610b7d5790505b50905060005b8383905081101561127e5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596868685818110610bfa57610bf9612b57565b5b905060200201356040518263ffffffff1660e01b8152600401610c1d919061277c565b6102006040518083038186803b158015610c3657600080fd5b505afa158015610c4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6e9190612238565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166316e0551b878786818110610cc157610cc0612b57565b5b905060200201356040518263ffffffff1660e01b8152600401610ce4919061277c565b60a06040518083038186803b158015610cfc57600080fd5b505afa158015610d10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d34919061220b565b9050600082610100015161ffff1614610d82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7990612721565b60405180910390fd5b6001826101200151600160ff1660028110610da057610d9f612b57565b5b602002015160010b12158015610dda57506001826101200151600060ff1660028110610dcf57610dce612b57565b5b602002015160010b12155b80610df257508160c0015167ffffffffffffffff1642115b610e31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2890612701565b60405180910390fd5b6000610e3d828461154f565b90506000610e5084610160015183611899565b905060006040518060a00160405280866000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001856000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152509050610fb4898988818110610fa157610fa0612b57565b5b9050602002013583838860e00151611adc565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561102e5750600082600360ff166005811061102757611026612b57565b5b6020020151115b156110ee57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376770a9c8660e001518760000151886040015186600360ff166005811061109757611096612b57565b5b60200201516040518563ffffffff1660e01b81526004016110bb9493929190612598565b600060405180830381600087803b1580156110d557600080fd5b505af11580156110e9573d6000803e3d6000fd5b505050505b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156111685750600082600360ff166005811061116157611160612b57565b5b6020020151115b1561121c57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632ec0ff6c8660e0015184600360ff16600581106111c7576111c6612b57565b5b60200201516040518363ffffffff1660e01b81526004016111e99291906125dd565b600060405180830381600087803b15801561120357600080fd5b505af1158015611217573d6000803e3d6000fd5b505050505b60405180604001604052808a8a8981811061123a57611239612b57565b5b9050602002013581526020018381525087878151811061125d5761125c612b57565b5b602002602001018190525050505050508061127790612ab0565b9050610b9e565b507f05270dc3f040b6099aa59b4dc25043ad9d14706a809c4dd4ad6356935332b851816040516112ae919061263d565b60405180910390a15060016000819055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b15801561134f57600080fd5b505afa158015611363573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113879190612164565b73ffffffffffffffffffffffffffffffffffffffff166113a5611c69565b73ffffffffffffffffffffffffffffffffffffffff16146113c557600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b15801561149557600080fd5b505afa1580156114a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cd9190612164565b73ffffffffffffffffffffffffffffffffffffffff166114eb611c69565b73ffffffffffffffffffffffffffffffffffffffff161461150b57600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611557611cb3565b61155f611cb3565b600084606001518015611573575084604001515b9050600081611583576000611589565b85602001515b9050856080015115611713577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634c403c536040518060a00160405280886101400151600060ff16600481106115f8576115f7612b57565b5b602002015161ffff1661ffff168152602001886101400151600160ff166004811061162657611625612b57565b5b602002015161ffff1661ffff168152602001886101400151600260ff166004811061165457611653612b57565b5b602002015161ffff1661ffff168152602001886101400151600360ff166004811061168257611681612b57565b5b602002015161ffff1661ffff1681526020018461ffff1661ffff168152506040518263ffffffff1660e01b81526004016116bc919061265f565b60a06040518083038186803b1580156116d457600080fd5b505afa1580156116e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170c9190612191565b925061188d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d02f411e6040518060a00160405280886101400151600060ff166004811061177657611775612b57565b5b602002015161ffff1661ffff168152602001886101400151600160ff16600481106117a4576117a3612b57565b5b602002015161ffff1661ffff168152602001886101400151600260ff16600481106117d2576117d1612b57565b5b602002015161ffff1661ffff168152602001886101400151600360ff1660048110611800576117ff612b57565b5b602002015161ffff1661ffff1681526020018461ffff1661ffff168152506040518263ffffffff1660e01b815260040161183a919061265f565b60a06040518083038186803b15801561185257600080fd5b505afa158015611866573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188a9190612191565b92505b82935050505092915050565b6118a1611c71565b6118a9611c71565b61271061ffff168484600060ff16600581106118c8576118c7612b57565b5b602002015161ffff166118db919061290e565b6118e591906128dd565b81600060ff16600581106118fc576118fb612b57565b5b60200201818152505061271061ffff168484600160ff166005811061192457611923612b57565b5b602002015161ffff16611937919061290e565b61194191906128dd565b81600160ff166005811061195857611957612b57565b5b60200201818152505061271061ffff168484600260ff16600581106119805761197f612b57565b5b602002015161ffff16611993919061290e565b61199d91906128dd565b81600260ff16600581106119b4576119b3612b57565b5b60200201818152505061271061ffff168484600460ff16600581106119dc576119db612b57565b5b602002015161ffff166119ef919061290e565b6119f991906128dd565b81600460ff1660058110611a1057611a0f612b57565b5b60200201818152505080600460ff1660058110611a3057611a2f612b57565b5b602002015181600260ff1660058110611a4c57611a4b612b57565b5b602002015182600160ff1660058110611a6857611a67612b57565b5b602002015183600060ff1660058110611a8457611a83612b57565b5b602002015187611a949190612968565b611a9e9190612968565b611aa89190612968565b611ab29190612968565b81600360ff1660058110611ac957611ac8612b57565b5b6020020181815250508091505092915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e7aa0bd7856040518263ffffffff1660e01b8152600401611b35919061277c565b600060405180830381600087803b158015611b4f57600080fd5b505af1158015611b63573d6000803e3d6000fd5b5050505060005b6005811015611c62576000848260058110611b8857611b87612b57565b5b60200201511115611c51577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638ede1f05848360058110611be257611be1612b57565b5b6020020151868460058110611bfa57611bf9612b57565b5b6020020151856040518463ffffffff1660e01b8152600401611c1e93929190612606565b600060405180830381600087803b158015611c3857600080fd5b505af1158015611c4c573d6000803e3d6000fd5b505050505b80611c5b90612ab0565b9050611b6a565b5050505050565b600033905090565b6040518060a00160405280600590602082028036833780820191505090505090565b604051806040016040528060008152602001611cad611c71565b81525090565b6040518060a00160405280600590602082028036833780820191505090505090565b6000611ce8611ce3846127bc565b612797565b90508082856020860282011115611d0257611d01612bc4565b5b60005b85811015611d325781611d188882611f20565b845260208401935060208301925050600181019050611d05565b5050509392505050565b6000611d4f611d4a846127e2565b612797565b90508082856020860282011115611d6957611d68612bc4565b5b60005b85811015611d995781611d7f88826120e3565b845260208401935060208301925050600181019050611d6c565b5050509392505050565b6000611db6611db184612808565b612797565b90508082856020860282011115611dd057611dcf612bc4565b5b60005b85811015611e005781611de688826120e3565b845260208401935060208301925050600181019050611dd3565b5050509392505050565b600081359050611e1981612c5f565b92915050565b600081519050611e2e81612c5f565b92915050565b600082601f830112611e4957611e48612bba565b5b6002611e56848285611cd5565b91505092915050565b600082601f830112611e7457611e73612bba565b5b6004611e81848285611d3c565b91505092915050565b600082601f830112611e9f57611e9e612bba565b5b6005611eac848285611da3565b91505092915050565b60008083601f840112611ecb57611eca612bba565b5b8235905067ffffffffffffffff811115611ee857611ee7612bb5565b5b602083019150836020820283011115611f0457611f03612bc4565b5b9250929050565b600081519050611f1a81612c76565b92915050565b600081519050611f2f81612c8d565b92915050565b600060a08284031215611f4b57611f4a612bbf565b5b611f5560a0612797565b90506000611f6584828501611e1f565b6000830152506020611f79848285016120e3565b6020830152506040611f8d84828501611f0b565b6040830152506060611fa184828501611f0b565b6060830152506080611fb584828501611f0b565b60808301525092915050565b60006102008284031215611fd857611fd7612bbf565b5b611fe3610180612797565b90506000611ff384828501611e1f565b600083015250602061200784828501612122565b602083015250604061201b84828501611e1f565b604083015250606061202f84828501612122565b606083015250608061204384828501611e1f565b60808301525060a06120578482850161210d565b60a08301525060c061206b84828501612122565b60c08301525060e061207f84828501611e1f565b60e083015250610100612094848285016120e3565b610100830152506101206120aa84828501611e34565b610120830152506101606120c084828501611e5f565b610140830152506101e06120d68482850161210d565b6101608301525092915050565b6000815190506120f281612ca4565b92915050565b60008135905061210781612cbb565b92915050565b60008151905061211c81612cbb565b92915050565b60008151905061213181612cd2565b92915050565b60006020828403121561214d5761214c612bce565b5b600061215b84828501611e0a565b91505092915050565b60006020828403121561217a57612179612bce565b5b600061218884828501611e1f565b91505092915050565b600060a082840312156121a7576121a6612bce565b5b60006121b584828501611e8a565b91505092915050565b600080602083850312156121d5576121d4612bce565b5b600083013567ffffffffffffffff8111156121f3576121f2612bc9565b5b6121ff85828601611eb5565b92509250509250929050565b600060a0828403121561222157612220612bce565b5b600061222f84828501611f35565b91505092915050565b6000610200828403121561224f5761224e612bce565b5b600061225d84828501611fc1565b91505092915050565b60006020828403121561227c5761227b612bce565b5b600061228a848285016120f8565b91505092915050565b600061229f83836124f2565b60c08301905092915050565b60006122b78383612550565b60208301905092915050565b60006122cf838361255f565b60208301905092915050565b6122e48161299c565b82525050565b60006122f582612852565b6122ff818561289a565b935061230a8361282e565b8060005b8381101561233b5781516123228882612293565b975061232d83612873565b92505060018101905061230e565b5085935050505092915050565b6123518161285d565b61235b81846128ab565b92506123668261283e565b8060005b8381101561239757815161237e87826122ab565b965061238983612880565b92505060018101905061236a565b505050505050565b6123a881612868565b6123b281846128b6565b92506123bd82612848565b8060005b838110156123ee5781516123d587826122c3565b96506123e08361288d565b9250506001810190506123c1565b505050505050565b6123ff81612868565b61240981846128c1565b925061241482612848565b8060005b8381101561244557815161242c87826122c3565b96506124378361288d565b925050600181019050612418565b505050505050565b61245681612a13565b82525050565b61246581612a25565b82525050565b61247481612a37565b82525050565b61248381612a49565b82525050565b60006124966005836128cc565b91506124a182612be4565b602082019050919050565b60006124b96005836128cc565b91506124c482612c0d565b602082019050919050565b60006124dc601f836128cc565b91506124e782612c36565b602082019050919050565b60c082016000820151612508600085018261255f565b50602082015161251b602085018261239f565b50505050565b60c082016000820151612537600085018261255f565b50602082015161254a602085018261239f565b50505050565b612559816129c7565b82525050565b612568816129f5565b82525050565b612577816129f5565b82525050565b600060208201905061259260008301846122db565b92915050565b60006080820190506125ad60008301876122db565b6125ba60208301866122db565b6125c760408301856122db565b6125d4606083018461256e565b95945050505050565b60006040820190506125f260008301856122db565b6125ff602083018461256e565b9392505050565b600060608201905061261b60008301866122db565b612628602083018561256e565b61263560408301846122db565b949350505050565b6000602082019050818103600083015261265781846122ea565b905092915050565b600060a0820190506126746000830184612348565b92915050565b600060a08201905061268f60008301846123f6565b92915050565b60006020820190506126aa600083018461244d565b92915050565b60006020820190506126c5600083018461245c565b92915050565b60006020820190506126e0600083018461246b565b92915050565b60006020820190506126fb600083018461247a565b92915050565b6000602082019050818103600083015261271a81612489565b9050919050565b6000602082019050818103600083015261273a816124ac565b9050919050565b6000602082019050818103600083015261275a816124cf565b9050919050565b600060c0820190506127766000830184612521565b92915050565b6000602082019050612791600083018461256e565b92915050565b60006127a16127b2565b90506127ad8282612a7f565b919050565b6000604051905090565b600067ffffffffffffffff8211156127d7576127d6612b86565b5b602082029050919050565b600067ffffffffffffffff8211156127fd576127fc612b86565b5b602082029050919050565b600067ffffffffffffffff82111561282357612822612b86565b5b602082029050919050565b6000819050602082019050919050565b6000819050919050565b6000819050919050565b600081519050919050565b600060059050919050565b600060059050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b60006128e8826129f5565b91506128f3836129f5565b92508261290357612902612b28565b5b828204905092915050565b6000612919826129f5565b9150612924836129f5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561295d5761295c612af9565b5b828202905092915050565b6000612973826129f5565b915061297e836129f5565b92508282101561299157612990612af9565b5b828203905092915050565b60006129a7826129d5565b9050919050565b60008115159050919050565b60008160010b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000612a1e82612a5b565b9050919050565b6000612a3082612a5b565b9050919050565b6000612a4282612a5b565b9050919050565b6000612a5482612a5b565b9050919050565b6000612a6682612a6d565b9050919050565b6000612a78826129d5565b9050919050565b612a8882612bd3565b810181811067ffffffffffffffff82111715612aa757612aa6612b86565b5b80604052505050565b6000612abb826129f5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612aee57612aed612af9565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f302d303036000000000000000000000000000000000000000000000000000000600082015250565b7f302d303035000000000000000000000000000000000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b612c688161299c565b8114612c7357600080fd5b50565b612c7f816129ae565b8114612c8a57600080fd5b50565b612c96816129ba565b8114612ca157600080fd5b50565b612cad816129c7565b8114612cb857600080fd5b50565b612cc4816129f5565b8114612ccf57600080fd5b50565b612cdb816129ff565b8114612ce657600080fd5b5056fea2646970667358221220cc89dcdea461eda34e1eaa67077aa884ed5d5c36072dd927084903140819199164736f6c63430008070033";

type UnicrowClaimConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnicrowClaimConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnicrowClaim__factory extends ContractFactory {
  constructor(...args: UnicrowClaimConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UnicrowClaim";
  }

  deploy(
    unicrow_: string,
    unicrowArbitrator_: string,
    protocolFeeAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnicrowClaim> {
    return super.deploy(
      unicrow_,
      unicrowArbitrator_,
      protocolFeeAddress_,
      overrides || {}
    ) as Promise<UnicrowClaim>;
  }
  getDeployTransaction(
    unicrow_: string,
    unicrowArbitrator_: string,
    protocolFeeAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      unicrow_,
      unicrowArbitrator_,
      protocolFeeAddress_,
      overrides || {}
    );
  }
  attach(address: string): UnicrowClaim {
    return super.attach(address) as UnicrowClaim;
  }
  connect(signer: Signer): UnicrowClaim__factory {
    return super.connect(signer) as UnicrowClaim__factory;
  }
  static readonly contractName: "UnicrowClaim";
  public readonly contractName: "UnicrowClaim";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnicrowClaimInterface {
    return new utils.Interface(_abi) as UnicrowClaimInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnicrowClaim {
    return new Contract(address, _abi, signerOrProvider) as UnicrowClaim;
  }
}
