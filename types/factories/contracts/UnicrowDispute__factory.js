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
                    {
                        internalType: "string",
                        name: "paymentReference",
                        type: "string",
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
                    {
                        internalType: "string",
                        name: "paymentReference",
                        type: "string",
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
const _bytecode = "0x60e06040523480156200001157600080fd5b5060405162001b2638038062001b2683398101604081905262000034916200007e565b60016000556001600160601b0319606093841b811660805291831b821660a05290911b1660c052620000c8565b80516001600160a01b03811681146200007957600080fd5b919050565b6000806000606084860312156200009457600080fd5b6200009f8462000061565b9250620000af6020850162000061565b9150620000bf6040850162000061565b90509250925092565b60805160601c60a05160601c60c05160601c6119fc6200012a600039600060d80152600081816101a20152610639015260008181610117015281816102480152818161059e0152818161078701528181610bdd0152610d2701526119fc6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80639f8621b811610076578063c57086451161005b578063c57086451461018a578063e9db7d791461019d578063fe5e2969146101c457600080fd5b80639f8621b814610162578063ab82d9a01461017757600080fd5b8063325369f6146100a857806349c4920f146100d35780636e4e2934146101125780637e684d0514610139575b600080fd5b6100bb6100b636600461152c565b6101e4565b60405161ffff90911681526020015b60405180910390f35b6100fa7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ca565b6100fa7f000000000000000000000000000000000000000000000000000000000000000081565b6100fa6101473660046114e0565b6001602052600090815260409020546001600160a01b031681565b6101756101703660046114f9565b610221565b005b6101756101853660046114e0565b610708565b6101756101983660046114f9565b610ca8565b6100fa7f000000000000000000000000000000000000000000000000000000000000000081565b6101d76101d23660046114e0565b610f8e565b6040516100ca9190611778565b6002602052816000526040600020816002811061020057600080fd5b60109182820401919006600202915091509054906101000a900461ffff1681565b600033604051633e8cf2cb60e11b8152600481018590529091506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d19e5969060240160006040518083038186803b15801561028a57600080fd5b505afa15801561029e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102c69190810190611387565b60008581526001602052604090205481519192506001600160a01b03908116918482169116148061030c575081604001516001600160a01b0316836001600160a01b0316145b6103455760405162461bcd60e51b8152602060048201526005602482015264312d30303960d81b60448201526064015b60405180910390fd5b6001600160a01b03811661039b5760405162461bcd60e51b815260206004820152600560248201527f312d303137000000000000000000000000000000000000000000000000000000604482015260640161033c565b806001600160a01b0316836001600160a01b031614156103fd5760405162461bcd60e51b815260206004820152600560248201527f312d303230000000000000000000000000000000000000000000000000000000604482015260640161033c565b60008581526002602081905260408083208151808301928390529290918285855b82829054906101000a900461ffff1661ffff168152602001906002019060208260010104928301926001038202915080841161041e57509495508594506000935061046892505050565b6020908102919091015161ffff1690610483908701876114bc565b61ffff161480156104b0575060208082015161ffff16906104aa90604088019088016114bc565b61ffff16145b6104fc5760405162461bcd60e51b815260206004820152600560248201527f312d303138000000000000000000000000000000000000000000000000000000604482015260640161033c565b610140830151815161ffff9081168252602080840151909116908201526101208401516105309060005b6020020151611024565b61053b9060016118ab565b61012085018051600192830b830b90525161055591610526565b61012085018051600192830b90920b602090920191909152516040517f64166e630000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916364166e63916105d6918b918691906004016117f8565b600060405180830381600087803b1580156105f057600080fd5b505af1158015610604573d6000803e3d6000fd5b50506040517f379607f5000000000000000000000000000000000000000000000000000000008152600481018a9052600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316915063379607f59060240160a060405180830381600087803b15801561068657600080fd5b505af115801561069a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106be919061130c565b9050877fed011389cb4cfa123cd3830046c5049dd63f7a5844d377d7dfa16390eea03ec2868542856040516106f6949392919061171b565b60405180910390a25050505050505050565b6002600054141561075b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161033c565b6002600090815533604051633e8cf2cb60e11b8152600481018490529091506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d19e5969060240160006040518083038186803b1580156107c957600080fd5b505afa1580156107dd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108059190810190611387565b905080604001516001600160a01b0316826001600160a01b03161480610837575080516001600160a01b038381169116145b61086b5760405162461bcd60e51b8152602060048201526005602482015264312d30303960d81b604482015260640161033c565b6101208101516000906001602002015160010b131580610898575061012081015151600060019190910b13155b6108cc5760405162461bcd60e51b8152602060048201526005602482015264312d30303560d81b604482015260640161033c565b8060c0015167ffffffffffffffff1642111561092a5760405162461bcd60e51b815260206004820152600560248201527f312d303136000000000000000000000000000000000000000000000000000000604482015260640161033c565b806060015167ffffffffffffffff1642116109875760405162461bcd60e51b815260206004820152600560248201527f312d303139000000000000000000000000000000000000000000000000000000604482015260640161033c565b80516001600160a01b0383811691161415806109b0575061012081015151600060019190910b13155b6109fc5760405162461bcd60e51b815260206004820152600560248201527f312d303134000000000000000000000000000000000000000000000000000000604482015260640161033c565b80604001516001600160a01b0316826001600160a01b0316141580610a3257506101208101516000906001602002015160010b13155b610a7e5760405162461bcd60e51b815260206004820152600560248201527f312d303135000000000000000000000000000000000000000000000000000000604482015260640161033c565b80516001600160a01b0383811691161415610b00576101408101805161271090525160006020909101819052610120820151610ab991610526565b610ac49060016118ab565b61012082018051600192830b830b905251610ade91610526565b610ae790611965565b610120820151600191820b90910b602090910152610b87565b80604001516001600160a01b0316826001600160a01b03161415610b87576101408101805161271060209091015251600090819052610120820151610b4491610526565b610b4d90611965565b61012082018051600192830b830b905251610b6791610526565b610b729060016118ab565b610120820151600191820b90910b6020909101525b60c08101516020820151600090610b9e9083611916565b6101408401516101208501516040517f0a6b25f20000000000000000000000000000000000000000000000000000000081529293506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692630a6b25f292610c16928a9288908890600401611821565b600060405180830381600087803b158015610c3057600080fd5b505af1158015610c44573d6000803e3d6000fd5b50505067ffffffffffffffff8084166060860152821660c08501525060405185907fe6805f4a09f40fe948bb4b24cc12090c9e4fa755b8329042ba916717f98a9d8f90610c949042908790611868565b60405180910390a250506001600055505050565b60026000541415610cfb5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161033c565b6002600090815533604051633e8cf2cb60e11b8152600481018590529091506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d19e5969060240160006040518083038186803b158015610d6957600080fd5b505afa158015610d7d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610da59190810190611387565b905080600001516001600160a01b0316826001600160a01b03161480610de0575080604001516001600160a01b0316826001600160a01b0316145b610e145760405162461bcd60e51b8152602060048201526005602482015264312d30303960d81b604482015260640161033c565b6101208101516000906001602002015160010b131580610e41575061012081015151600060019190910b13155b610e755760405162461bcd60e51b8152602060048201526005602482015264312d30303560d81b604482015260640161033c565b610e8560408401602085016114bc565b610e9260208501856114bc565b610e9c91906118f0565b61ffff1661271014610ef05760405162461bcd60e51b815260206004820152600560248201527f312d303037000000000000000000000000000000000000000000000000000000604482015260640161033c565b600084815260016020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038716179055600291829052909120610f46918590611047565b50837fad77a7f72aee179b5a343e49e8b5cdf52d31d42bb43df14f33d26ccb08d0a66e428533604051610f7b939291906117a3565b60405180910390a2505060016000555050565b610f966110e1565b604080518082018252600084815260016020908152838220546001600160a01b031683528582526002808252848320855180870196879052939592850193929091908287855b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610fdc5750505092909352509195945050505050565b6000808260010b121561103f5761103a82611965565b611041565b815b92915050565b6001830191839082156110d15791602002820160005b838211156110a157833561ffff1683826101000a81548161ffff021916908361ffff160217905550926020019260020160208160010104928301926001030261105d565b80156110cf5782816101000a81549061ffff02191690556002016020816001010492830192600103026110a1565b505b506110dd929150611109565b5090565b604051806040016040528060006001600160a01b0316815260200161110461111e565b905290565b5b808211156110dd576000815560010161110a565b60405180604001604052806002906020820280368337509192915050565b80516001600160a01b038116811461115357600080fd5b919050565b600082601f83011261116957600080fd5b6040516040810181811067ffffffffffffffff8211171561118c5761118c61199d565b80604052508083856040860111156111a357600080fd5b6000805b60028110156111d55782518060010b81146111c0578283fd5b845260209384019392909201916001016111a7565b50929695505050505050565b600082601f8301126111f257600080fd5b6040516080810181811067ffffffffffffffff821117156112155761121561199d565b60405280836080810186101561122a57600080fd5b60005b6004811015611256578151611241816119b3565b8352602092830192919091019060010161122d565b509195945050505050565b600082601f83011261127257600080fd5b815167ffffffffffffffff8082111561128d5761128d61199d565b604051601f8301601f19908116603f011681019082821181831017156112b5576112b561199d565b816040528381528660208588010111156112ce57600080fd5b6112df846020830160208901611939565b9695505050505050565b8051611153816119b3565b805167ffffffffffffffff8116811461115357600080fd5b600060a0828403121561131e57600080fd5b82601f83011261132d57600080fd5b60405160a0810181811067ffffffffffffffff821117156113505761135061199d565b604052808360a0810186101561136557600080fd5b60005b6005811015611256578151835260209283019290910190600101611368565b60006020828403121561139957600080fd5b815167ffffffffffffffff808211156113b157600080fd5b9083019061022082860312156113c657600080fd5b6113ce611881565b6113d78361113c565b81526113e5602084016112f4565b60208201526113f66040840161113c565b6040820152611407606084016112f4565b60608201526114186080840161113c565b608082015260a083015160a082015261143360c084016112f4565b60c082015261144460e0840161113c565b60e08201526101006114578185016112e9565b9082015261012061146a87858301611158565b9082015261016061147d878583016111e1565b6101408301526101e084015190820152610200830151828111156114a057600080fd5b6114ac87828601611261565b6101808301525095945050505050565b6000602082840312156114ce57600080fd5b81356114d9816119b3565b9392505050565b6000602082840312156114f257600080fd5b5035919050565b6000806060838503121561150c57600080fd5b823591508360608401111561152057600080fd5b50926020919091019150565b6000806040838503121561153f57600080fd5b50508035926020909101359150565b8060005b6002811015611574578151600190810b85526020948501949092019101611552565b50505050565b8060005b600281101561157457815161ffff1684526020938401939091019060010161157e565b8060005b600481101561157457815161ffff168452602093840193909101906001016115a5565b600081518084526115e0816020860160208601611939565b601f01601f19169290920160200192915050565b80516001600160a01b0316825260006102206020830151611621602086018267ffffffffffffffff169052565b50604083015161163c60408601826001600160a01b03169052565b506060830151611658606086018267ffffffffffffffff169052565b50608083015161167360808601826001600160a01b03169052565b5060a083015160a085015260c083015161169960c086018267ffffffffffffffff169052565b5060e08301516116b460e08601826001600160a01b03169052565b506101008381015161ffff1690850152610120808401516116d78287018261154e565b50506101408301516101606116ee818701836115a1565b8401516101e0860152506101808301516102008501829052611712828601826115c8565b95945050505050565b600061012080835261172f818401886115f4565b91505060206117408184018761157a565b846060840152608083018460005b600581101561176b5781518352918301919083019060010161174e565b5050505095945050505050565b81516001600160a01b03168152602080830151606083019161179c9084018261157a565b5092915050565b8381526080810160208083018560005b60028110156117dd5781356117c7816119b3565b61ffff16835291830191908301906001016117b3565b505050506001600160a01b0383166060830152949350505050565b83815260e0810161180c60208301856115a1565b61181960a083018461154e565b949350505050565b858152610120810161183660208301876115a1565b61184360a083018661154e565b67ffffffffffffffff80851660e0840152808416610100840152509695505050505050565b82815260406020820152600061181960408301846115f4565b6040516101a0810167ffffffffffffffff811182821017156118a5576118a561199d565b60405290565b60008160010b8360010b6000821282617fff038213811516156118d0576118d0611987565b82617fff190382128116156118e7576118e7611987565b50019392505050565b600061ffff80831681851680830382111561190d5761190d611987565b01949350505050565b600067ffffffffffffffff80831681851680830382111561190d5761190d611987565b60005b8381101561195457818101518382015260200161193c565b838111156115745750506000910152565b60008160010b617fff1981141561197e5761197e611987565b60000392915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61ffff811681146119c357600080fd5b5056fea2646970667358221220afeaafbc9dabe1b8397212dfef5f17ed59d555b2fb0accb19b1b680a5bce899b64736f6c63430008070033";
const isSuperArgs = (xs) => xs.length > 1;
class UnicrowDispute__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides) {
        return super.getDeployTransaction(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides || {});
    }
    deploy(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides) {
        return super.deploy(unicrow_, unicrowClaim_, unicrowArbitrator_, overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.UnicrowDispute__factory = UnicrowDispute__factory;
//# sourceMappingURL=UnicrowDispute__factory.js.map