"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicrowDispute__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
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
                name: "unicrowClaim_",
                type: "address",
            },
            {
                internalType: "address",
                name: "unicrowArbitrator_",
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
                internalType: "uint256",
                name: "escrowId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        internalType: "uint64",
                        name: "challengeExtension",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address",
                    },
                    {
                        internalType: "uint64",
                        name: "challengePeriodStart",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "marketplace",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "marketplaceFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint64",
                        name: "challengePeriodEnd",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "claimed",
                        type: "uint16",
                    },
                    {
                        internalType: "int16[2]",
                        name: "consensus",
                        type: "int16[2]",
                    },
                    {
                        internalType: "uint16[4]",
                        name: "split",
                        type: "uint16[4]",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct Escrow",
                name: "escrow",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint16[2]",
                name: "latestSettlementOffer",
                type: "uint16[2]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "blockTime",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256[5]",
                name: "amounts",
                type: "uint256[5]",
            },
        ],
        name: "ApproveOffer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "escrowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "blockTime",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        internalType: "uint64",
                        name: "challengeExtension",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address",
                    },
                    {
                        internalType: "uint64",
                        name: "challengePeriodStart",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "marketplace",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "marketplaceFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint64",
                        name: "challengePeriodEnd",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "claimed",
                        type: "uint16",
                    },
                    {
                        internalType: "int16[2]",
                        name: "consensus",
                        type: "int16[2]",
                    },
                    {
                        internalType: "uint16[4]",
                        name: "split",
                        type: "uint16[4]",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct Escrow",
                name: "escrow",
                type: "tuple",
            },
        ],
        name: "Challenge",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "escrowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "blockTime",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint16[2]",
                name: "latestSettlementOffer",
                type: "uint16[2]",
            },
            {
                indexed: false,
                internalType: "address",
                name: "latestSettlementOfferBy",
                type: "address",
            },
        ],
        name: "SettlementOffer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "escrowId",
                type: "uint256",
            },
            {
                internalType: "uint16[2]",
                name: "validation",
                type: "uint16[2]",
            },
        ],
        name: "approveSettlement",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "escrowId",
                type: "uint256",
            },
        ],
        name: "challenge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "escrowId",
                type: "uint256",
            },
        ],
        name: "getSettlementDetails",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "latestSettlementOfferBy",
                        type: "address",
                    },
                    {
                        internalType: "uint16[2]",
                        name: "latestSettlementOffer",
                        type: "uint16[2]",
                    },
                ],
                internalType: "struct Settlement",
                name: "",
                type: "tuple",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "latestSettlementOffer",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
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
        name: "latestSettlementOfferBy",
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
                name: "escrowId",
                type: "uint256",
            },
            {
                internalType: "uint16[2]",
                name: "newSplit",
                type: "uint16[2]",
            },
        ],
        name: "offerSettlement",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "contract IUnicrowArbitrator",
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
                internalType: "contract IUnicrowClaim",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60e06040523480156200001157600080fd5b5060405162002f0338038062002f03833981810160405281019062000037919062000104565b60016000819055508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505050620001b3565b600081519050620000fe8162000199565b92915050565b60008060006060848603121562000120576200011f62000194565b5b60006200013086828701620000ed565b93505060206200014386828701620000ed565b92505060406200015686828701620000ed565b9150509250925092565b60006200016d8262000174565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001a48162000160565b8114620001b057600080fd5b50565b60805160601c60a05160601c60c05160601c612ced62000216600039600061021501526000818161085101526115290152600081816102390152818161029e015281816107bb015281816109a20152818161105501526111d70152612ced6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639f8621b8116100665780639f8621b814610134578063ab82d9a014610150578063c57086451461016c578063e9db7d7914610188578063fe5e2969146101a657610093565b8063325369f61461009857806349c4920f146100c85780636e4e2934146100e65780637e684d0514610104575b600080fd5b6100b260048036038101906100ad9190611bf9565b6101d6565b6040516100bf91906124cb565b60405180910390f35b6100d0610213565b6040516100dd91906122b6565b60405180910390f35b6100ee610237565b6040516100fb91906122ec565b60405180910390f35b61011e60048036038101906101199190611b8c565b61025b565b60405161012b919061229b565b60405180910390f35b61014e60048036038101906101499190611bb9565b61028e565b005b61016a60048036038101906101659190611b8c565b610944565b005b61018660048036038101906101819190611bb9565b611179565b005b610190611527565b60405161019d91906122d1565b60405180910390f35b6101c060048036038101906101bb9190611b8c565b61154b565b6040516101cd91906124b0565b60405180910390f35b600260205281600052604060002081600281106101f257600080fd5b60109182820401919006600202915091509054906101000a900461ffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610298611634565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596856040518263ffffffff1660e01b81526004016102f591906124e6565b6102006040518083038186803b15801561030e57600080fd5b505afa158015610322573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103469190611b31565b905060006001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806103ed5750816040015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b61042c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042390612347565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561049c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610493906123c7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561050b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050290612387565b60405180910390fd5b60006002600087815260200190815260200160002060028060200260405190810160405280929190826002801561057f576020028201916000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116105465790505b5050505050905080600060ff166002811061059d5761059c6129fe565b5b602002015161ffff1685600060ff16600281106105bd576105bc6129fe565b5b6020020160208101906105d09190611b5f565b61ffff1614801561062c575080600160ff16600281106105f3576105f26129fe565b5b602002015161ffff1685600160ff1660028110610613576106126129fe565b5b6020020160208101906106269190611b5f565b61ffff16145b61066b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610662906123e7565b60405180910390fd5b6000836101400151905081600060ff166002811061068c5761068b6129fe565b5b602002015181600060ff16600481106106a8576106a76129fe565b5b602002019061ffff16908161ffff168152505081600160ff16600281106106d2576106d16129fe565b5b602002015181600160ff16600481106106ee576106ed6129fe565b5b602002019061ffff16908161ffff1681525050600161072c856101200151600060ff1660028110610722576107216129fe565b5b602002015161163c565b61073691906127a4565b846101200151600060ff1660028110610752576107516129fe565b5b602002019060010b908160010b8152505061078c846101200151600160ff1660028110610782576107816129fe565b5b602002015161163c565b846101200151600160ff16600281106107a8576107a76129fe565b5b602002019060010b908160010b815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166364166e6388838761012001516040518463ffffffff1660e01b815260040161081b93929190612538565b600060405180830381600087803b15801561083557600080fd5b505af1158015610849573d6000803e3d6000fd5b5050505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663379607f5896040518263ffffffff1660e01b81526004016108a891906124e6565b60a060405180830381600087803b1580156108c257600080fd5b505af11580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa9190611b04565b9050877f8746324d5672b242169429b77e7b4504a32504d259a5db1f170fdc4babbe1ce1868542856040516109329493929190612467565b60405180910390a25050505050505050565b6002600054141561098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190612407565b60405180910390fd5b6002600081905550600061099c611634565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596846040518263ffffffff1660e01b81526004016109f991906124e6565b6102006040518083038186803b158015610a1257600080fd5b505afa158015610a26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4a9190611b31565b9050806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480610ab95750806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b610af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aef90612347565b60405180910390fd5b6000816101200151600160ff1660028110610b1657610b156129fe565b5b602002015160010b131580610b4f57506000816101200151600060ff1660028110610b4457610b436129fe565b5b602002015160010b13155b610b8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8590612367565b60405180910390fd5b8060c0015167ffffffffffffffff16421115610bdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd6906123a7565b60405180910390fd5b806060015167ffffffffffffffff164211610c2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2690612327565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580610c9257506000816101200151600060ff1660028110610c8757610c866129fe565b5b602002015160010b13155b610cd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc890612427565b60405180910390fd5b806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580610d3457506000816101200151600160ff1660028110610d2957610d286129fe565b5b602002015160010b13155b610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a90612447565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ed457612710816101400151600060ff1660048110610dca57610dc96129fe565b5b602002019061ffff16908161ffff16815250506000816101400151600160ff1660048110610dfb57610dfa6129fe565b5b602002019061ffff16908161ffff16815250506001610e39826101200151600060ff1660028110610e2f57610e2e6129fe565b5b602002015161163c565b610e4391906127a4565b816101200151600060ff1660028110610e5f57610e5e6129fe565b5b602002019060010b908160010b81525050610e99816101200151600160ff1660028110610e8f57610e8e6129fe565b5b602002015161163c565b610ea290612986565b816101200151600160ff1660028110610ebe57610ebd6129fe565b5b602002019060010b908160010b81525050611032565b806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561103157612710816101400151600160ff1660048110610f2b57610f2a6129fe565b5b602002019061ffff16908161ffff16815250506000816101400151600060ff1660048110610f5c57610f5b6129fe565b5b602002019061ffff16908161ffff1681525050610f98816101200151600060ff1660028110610f8e57610f8d6129fe565b5b602002015161163c565b610fa190612986565b816101200151600060ff1660028110610fbd57610fbc6129fe565b5b602002019060010b908160010b815250506001610ff9826101200151600160ff1660028110610fef57610fee6129fe565b5b602002015161163c565b61100391906127a4565b816101200151600160ff166002811061101f5761101e6129fe565b5b602002019060010b908160010b815250505b5b60008160c001519050600082602001518360c001516110519190612852565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630a6b25f28685610140015186610120015186866040518663ffffffff1660e01b81526004016110be95949392919061256f565b600060405180830381600087803b1580156110d857600080fd5b505af11580156110ec573d6000803e3d6000fd5b5050505081836060019067ffffffffffffffff16908167ffffffffffffffff1681525050808360c0019067ffffffffffffffff16908167ffffffffffffffff1681525050847f1bf91df05bbf296f1592f5d8d9f79322ee89b9a7d806d8819f62baa78ba60a2642856040516111629291906125c4565b60405180910390a250505050600160008190555050565b600260005414156111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b690612407565b60405180910390fd5b600260008190555060006111d1611634565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596856040518263ffffffff1660e01b815260040161122e91906124e6565b6102006040518083038186803b15801561124757600080fd5b505afa15801561125b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127f9190611b31565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806112ee5750806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b61132d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132490612347565b60405180910390fd5b6000816101200151600160ff166002811061134b5761134a6129fe565b5b602002015160010b13158061138457506000816101200151600060ff1660028110611379576113786129fe565b5b602002015160010b13155b6113c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ba90612367565b60405180910390fd5b61271083600160ff16600281106113dd576113dc6129fe565b5b6020020160208101906113f09190611b5f565b84600060ff1660028110611407576114066129fe565b5b60200201602081019061141a9190611b5f565b611424919061281a565b61ffff1614611468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145f90612307565b60405180910390fd5b816001600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260008681526020019081526020016000209060026114dc929190611661565b50837fad77a7f72aee179b5a343e49e8b5cdf52d31d42bb43df14f33d26ccb08d0a66e42853360405161151193929190612501565b60405180910390a2505060016000819055505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b611553611702565b600060405180604001604052806001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160026000868152602001908152602001600020600280602002604051908101604052809291908260028015611621576020028201916000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116115e85790505b5050505050815250905080915050919050565b600033905090565b6000808260010b1215611658578161165390612986565b61165a565b815b9050919050565b826002600f016010900481019282156116f15791602002820160005b838211156116c157833561ffff1683826101000a81548161ffff021916908361ffff160217905550926020019260020160208160010104928301926001030261167d565b80156116ef5782816101000a81549061ffff02191690556002016020816001010492830192600103026116c1565b505b5090506116fe9190611738565b5090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611732611755565b81525090565b5b80821115611751576000816000905550600101611739565b5090565b6040518060400160405280600290602082028036833780820191505090505090565b600061178a61178584612613565b6125ee565b905080828560208602820111156117a4576117a3612a66565b5b60005b858110156117d457816117ba8882611964565b8452602084019350602083019250506001810190506117a7565b5050509392505050565b60006117f16117ec84612639565b6125ee565b9050808285602086028201111561180b5761180a612a66565b5b60005b8581101561183b57816118218882611ab0565b84526020840193506020830192505060018101905061180e565b5050509392505050565b60006118586118538461265f565b6125ee565b9050808285602086028201111561187257611871612a66565b5b60005b858110156118a257816118888882611ada565b845260208401935060208301925050600181019050611875565b5050509392505050565b6000815190506118bb81612c44565b92915050565b600082601f8301126118d6576118d5612a5c565b5b60026118e3848285611777565b91505092915050565b60008190508260206002028201111561190857611907612a66565b5b92915050565b600082601f83011261192357611922612a5c565b5b60046119308482856117de565b91505092915050565b600082601f83011261194e5761194d612a5c565b5b600561195b848285611845565b91505092915050565b60008151905061197381612c5b565b92915050565b600061020082840312156119905761198f612a61565b5b61199b6101806125ee565b905060006119ab848285016118ac565b60008301525060206119bf84828501611aef565b60208301525060406119d3848285016118ac565b60408301525060606119e784828501611aef565b60608301525060806119fb848285016118ac565b60808301525060a0611a0f84828501611ada565b60a08301525060c0611a2384828501611aef565b60c08301525060e0611a37848285016118ac565b60e083015250610100611a4c84828501611ab0565b61010083015250610120611a62848285016118c1565b61012083015250610160611a788482850161190e565b610140830152506101e0611a8e84828501611ada565b6101608301525092915050565b600081359050611aaa81612c72565b92915050565b600081519050611abf81612c72565b92915050565b600081359050611ad481612c89565b92915050565b600081519050611ae981612c89565b92915050565b600081519050611afe81612ca0565b92915050565b600060a08284031215611b1a57611b19612a6b565b5b6000611b2884828501611939565b91505092915050565b60006102008284031215611b4857611b47612a6b565b5b6000611b5684828501611979565b91505092915050565b600060208284031215611b7557611b74612a6b565b5b6000611b8384828501611a9b565b91505092915050565b600060208284031215611ba257611ba1612a6b565b5b6000611bb084828501611ac5565b91505092915050565b60008060608385031215611bd057611bcf612a6b565b5b6000611bde85828601611ac5565b9250506020611bef858286016118ec565b9150509250929050565b60008060408385031215611c1057611c0f612a6b565b5b6000611c1e85828601611ac5565b9250506020611c2f85828601611ac5565b9150509250929050565b6000611c458383611f8c565b60208301905092915050565b6000611c5d8383612241565b60208301905092915050565b6000611c75838361225f565b60208301905092915050565b611c8a81612890565b82525050565b611c9981612890565b82525050565b611ca8816126b7565b611cb2818461272f565b9250611cbd82612685565b8060005b83811015611cee578151611cd58782611c39565b9650611ce0836126ee565b925050600181019050611cc1565b505050505050565b611cff816126b7565b611d09818461273a565b9250611d1482612685565b8060005b83811015611d45578151611d2c8782611c39565b9650611d37836126ee565b925050600181019050611d18565b505050505050565b611d56816126c2565b611d608184612750565b9250611d6b8261268f565b8060005b83811015611da457611d81828461278d565b611d8b8782611c51565b9650611d96836126fb565b925050600181019050611d6f565b505050505050565b611db5816126cd565b611dbf8184612745565b9250611dca82612699565b8060005b83811015611dfb578151611de28782611c51565b9650611ded83612708565b925050600181019050611dce565b505050505050565b611e0c816126cd565b611e168184612750565b9250611e2182612699565b8060005b83811015611e52578151611e398782611c51565b9650611e4483612708565b925050600181019050611e25565b505050505050565b611e63816126d8565b611e6d818461275b565b9250611e78826126a3565b8060005b83811015611ea9578151611e908782611c51565b9650611e9b83612715565b925050600181019050611e7c565b505050505050565b611eba816126d8565b611ec48184612766565b9250611ecf826126a3565b8060005b83811015611f00578151611ee78782611c51565b9650611ef283612715565b925050600181019050611ed3565b505050505050565b611f11816126e3565b611f1b8184612771565b9250611f26826126ad565b8060005b83811015611f57578151611f3e8782611c69565b9650611f4983612722565b925050600181019050611f2a565b505050505050565b611f68816128fb565b82525050565b611f778161290d565b82525050565b611f868161291f565b82525050565b611f95816128a2565b82525050565b6000611fa860058361277c565b9150611fb382612a81565b602082019050919050565b6000611fcb60058361277c565b9150611fd682612aaa565b602082019050919050565b6000611fee60058361277c565b9150611ff982612ad3565b602082019050919050565b600061201160058361277c565b915061201c82612afc565b602082019050919050565b600061203460058361277c565b915061203f82612b25565b602082019050919050565b600061205760058361277c565b915061206282612b4e565b602082019050919050565b600061207a60058361277c565b915061208582612b77565b602082019050919050565b600061209d60058361277c565b91506120a882612ba0565b602082019050919050565b60006120c0601f8361277c565b91506120cb82612bc9565b602082019050919050565b60006120e360058361277c565b91506120ee82612bf2565b602082019050919050565b600061210660058361277c565b915061211182612c1b565b602082019050919050565b610200820160008201516121336000850182611c81565b506020820151612146602085018261227d565b5060408201516121596040850182611c81565b50606082015161216c606085018261227d565b50608082015161217f6080850182611c81565b5060a082015161219260a085018261225f565b5060c08201516121a560c085018261227d565b5060e08201516121b860e0850182611c81565b506101008201516121cd610100850182612241565b506101208201516121e2610120850182611c9f565b506101408201516121f7610160850182611e5a565b5061016082015161220c6101e085018261225f565b50505050565b6060820160008201516122286000850182611c81565b50602082015161223b6020850182611dac565b50505050565b61224a816128af565b82525050565b612259816128af565b82525050565b612268816128dd565b82525050565b612277816128dd565b82525050565b612286816128e7565b82525050565b612295816128e7565b82525050565b60006020820190506122b06000830184611c90565b92915050565b60006020820190506122cb6000830184611f5f565b92915050565b60006020820190506122e66000830184611f6e565b92915050565b60006020820190506123016000830184611f7d565b92915050565b6000602082019050818103600083015261232081611f9b565b9050919050565b6000602082019050818103600083015261234081611fbe565b9050919050565b6000602082019050818103600083015261236081611fe1565b9050919050565b6000602082019050818103600083015261238081612004565b9050919050565b600060208201905081810360008301526123a081612027565b9050919050565b600060208201905081810360008301526123c08161204a565b9050919050565b600060208201905081810360008301526123e08161206d565b9050919050565b6000602082019050818103600083015261240081612090565b9050919050565b60006020820190508181036000830152612420816120b3565b9050919050565b60006020820190508181036000830152612440816120d6565b9050919050565b60006020820190508181036000830152612460816120f9565b9050919050565b60006103008201905061247d600083018761211c565b61248b610200830186611e03565b61249961024083018561226e565b6124a7610260830184611f08565b95945050505050565b60006060820190506124c56000830184612212565b92915050565b60006020820190506124e06000830184612250565b92915050565b60006020820190506124fb600083018461226e565b92915050565b6000608082019050612516600083018661226e565b6125236020830185611d4d565b6125306060830184611c90565b949350505050565b600060e08201905061254d600083018661226e565b61255a6020830185611eb1565b61256760a0830184611cf6565b949350505050565b600061012082019050612585600083018861226e565b6125926020830187611eb1565b61259f60a0830186611cf6565b6125ac60e083018561228c565b6125ba61010083018461228c565b9695505050505050565b6000610220820190506125da600083018561226e565b6125e7602083018461211c565b9392505050565b60006125f8612609565b90506126048282612955565b919050565b6000604051905090565b600067ffffffffffffffff82111561262e5761262d612a2d565b5b602082029050919050565b600067ffffffffffffffff82111561265457612653612a2d565b5b602082029050919050565b600067ffffffffffffffff82111561267a57612679612a2d565b5b602082029050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b600060029050919050565b600060029050919050565b600060029050919050565b600060049050919050565b600060059050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600061279c6020840184611a9b565b905092915050565b60006127af826128a2565b91506127ba836128a2565b925081617fff038313600083121516156127d7576127d66129cf565b5b817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800003831260008312161561280f5761280e6129cf565b5b828201905092915050565b6000612825826128af565b9150612830836128af565b92508261ffff03821115612847576128466129cf565b5b828201905092915050565b600061285d826128e7565b9150612868836128e7565b92508267ffffffffffffffff03821115612885576128846129cf565b5b828201905092915050565b600061289b826128bd565b9050919050565b60008160010b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600061290682612931565b9050919050565b600061291882612931565b9050919050565b600061292a82612931565b9050919050565b600061293c82612943565b9050919050565b600061294e826128bd565b9050919050565b61295e82612a70565b810181811067ffffffffffffffff8211171561297d5761297c612a2d565b5b80604052505050565b6000612991826128a2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80008214156129c4576129c36129cf565b5b816000039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f312d303037000000000000000000000000000000000000000000000000000000600082015250565b7f312d303139000000000000000000000000000000000000000000000000000000600082015250565b7f312d303039000000000000000000000000000000000000000000000000000000600082015250565b7f312d303035000000000000000000000000000000000000000000000000000000600082015250565b7f312d303230000000000000000000000000000000000000000000000000000000600082015250565b7f312d303136000000000000000000000000000000000000000000000000000000600082015250565b7f312d303137000000000000000000000000000000000000000000000000000000600082015250565b7f312d303138000000000000000000000000000000000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f312d303134000000000000000000000000000000000000000000000000000000600082015250565b7f312d303135000000000000000000000000000000000000000000000000000000600082015250565b612c4d81612890565b8114612c5857600080fd5b50565b612c64816128a2565b8114612c6f57600080fd5b50565b612c7b816128af565b8114612c8657600080fd5b50565b612c92816128dd565b8114612c9d57600080fd5b50565b612ca9816128e7565b8114612cb457600080fd5b5056fea2646970667358221220c657e16cb60a802fa8b554b5da4171f2ac8ee5fd461d9fa522747fbbb09730fa64736f6c63430008070033";
const isSuperArgs = (xs) => xs.length > 1;
class UnicrowDispute__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "UnicrowDispute";
    }
    deploy(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides) {
        return super.deploy(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides || {});
    }
    getDeployTransaction(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides) {
        return super.getDeployTransaction(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides || {});
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
exports.UnicrowDispute__factory = UnicrowDispute__factory;
UnicrowDispute__factory.bytecode = _bytecode;
UnicrowDispute__factory.abi = _abi;
