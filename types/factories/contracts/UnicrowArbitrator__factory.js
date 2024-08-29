"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicrowArbitrator__factory = void 0;
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
        name: "Arbitrated",
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
                internalType: "address",
                name: "arbitrator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "arbitratorFee",
                type: "uint256",
            },
        ],
        name: "ArbitratorApproved",
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
                internalType: "address",
                name: "arbitrator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "arbitratorFee",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
        ],
        name: "ArbitratorProposed",
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
                internalType: "address",
                name: "validationAddress",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "validation",
                type: "uint16",
            },
        ],
        name: "approveArbitrator",
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
            {
                internalType: "uint16[2]",
                name: "newSplit",
                type: "uint16[2]",
            },
        ],
        name: "arbitrate",
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
                internalType: "uint16[5]",
                name: "currentSplit",
                type: "uint16[5]",
            },
        ],
        name: "arbitrationCalculation",
        outputs: [
            {
                internalType: "uint16[5]",
                name: "",
                type: "uint16[5]",
            },
        ],
        stateMutability: "pure",
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
        name: "escrowArbitrator",
        outputs: [
            {
                internalType: "address",
                name: "arbitrator",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "arbitratorFee",
                type: "uint16",
            },
            {
                internalType: "bool",
                name: "sellerConsensus",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "buyerConsensus",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "arbitrated",
                type: "bool",
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
        ],
        name: "getArbitratorData",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "arbitrator",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "arbitratorFee",
                        type: "uint16",
                    },
                    {
                        internalType: "bool",
                        name: "sellerConsensus",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "buyerConsensus",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "arbitrated",
                        type: "bool",
                    },
                ],
                internalType: "struct Arbitrator",
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
                name: "escrowId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "arbitrator",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "arbitratorFee",
                type: "uint16",
            },
        ],
        name: "proposeArbitrator",
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
            {
                internalType: "address",
                name: "arbitrator",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "arbitratorFee",
                type: "uint16",
            },
        ],
        name: "setArbitrator",
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
const _bytecode = "0x60c06040523480156200001157600080fd5b5060405162001bd938038062001bd9833981016040819052620000349162000075565b60016000556001600160601b0319606092831b8116608052911b1660a052620000ad565b80516001600160a01b03811681146200007057600080fd5b919050565b600080604083850312156200008957600080fd5b620000948362000058565b9150620000a46020840162000058565b90509250929050565b60805160601c60a05160601c611acf6200010a6000396000818161026b015261078b0152600081816101730152818161032f01528181610412015281816106a801528181610afb01528181610e93015261117c0152611acf6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80636e4e2934116100765780638e032c5a1161005b5780638e032c5a146101c0578063e2bc475c146101d3578063e9db7d791461026657600080fd5b80636e4e29341461016e57806379414b3c146101ad57600080fd5b806316e0551b146100a85780632ea8eddd14610119578063496f928b1461012e5780634c403c531461014e575b600080fd5b6100bb6100b636600461161b565b61028d565b6040516101109190600060a0820190506001600160a01b03835116825261ffff602084015116602083015260408301511515604083015260608301511515606083015260808301511515608083015292915050565b60405180910390f35b61012c610127366004611634565b61032c565b005b61014161013c366004611676565b6103db565b6040516101109190611780565b61016161015c36600461141f565b610850565b604051610110919061174b565b6101957f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610110565b61012c6101bb366004611634565b610a94565b61012c6101ce366004611634565b610e24565b6102296101e136600461161b565b6001602052600090815260409020546001600160a01b0381169061ffff600160a01b8204169060ff600160b01b8204811691600160b81b8104821691600160c01b9091041685565b604080516001600160a01b03909616865261ffff90941660208601529115159284019290925290151560608301521515608082015260a001610110565b6101957f000000000000000000000000000000000000000000000000000000000000000081565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915250600090815260016020908152604091829020825160a08101845290546001600160a01b038116825261ffff600160a01b8204169282019290925260ff600160b01b83048116151593820193909352600160b81b8204831615156060820152600160c01b9091049091161515608082015290565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461036157600080fd5b60009283526001602052604090922080547701010000000000000000000000000000000000000000000061ffff60b01b1961ffff909516600160a01b027fffffffffffffffffffff000000000000000000000000000000000000000000009092166001600160a01b03909416939093171792909216179055565b6103e361123d565b60006103ee8461028d565b604051633e8cf2cb60e11b8152600481018690529091506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d19e5969060240160006040518083038186803b15801561045457600080fd5b505afa158015610468573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261049091908101906114c2565b82519091506001600160a01b0316336001600160a01b031614806104bd575081516001600160a01b031632145b61050e5760405162461bcd60e51b815260206004820152600560248201527f322d30303500000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b81606001518015610520575081604001515b61056c5760405162461bcd60e51b815260206004820152600560248201527f322d3030310000000000000000000000000000000000000000000000000000006044820152606401610505565b61057c60408501602086016115f7565b61058960208601866115f7565b6105939190611961565b61ffff16612710146105e75760405162461bcd60e51b815260206004820152600560248201527f312d3030370000000000000000000000000000000000000000000000000000006044820152606401610505565b6101208101516105fe9060005b602002015161113a565b61060990600161191c565b61012082018051600192830b830b905251610623916105f4565b610120820151600191820b90910b602091820152610643908501856115f7565b61014082015161ffff91909116905261066260408501602086016115f7565b6101408201805161ffff92909216602090920191909152516101208201516040517f64166e630000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316926364166e63926106e7928a9291906004016118d1565b600060405180830381600087803b15801561070157600080fd5b505af1158015610715573d6000803e3d6000fd5b50505060008681526001602052604080822080547fffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffffffff16600160c01b179055517f379607f5000000000000000000000000000000000000000000000000000000008152600481018890529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063379607f59060240160a060405180830381600087803b1580156107cf57600080fd5b505af11580156107e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108079190611447565b9050857f8428c2dd12518ffff2eb0f5726e806410e246bf9084426617e4badaa838754c483428460405161083d9392919061178e565b60405180910390a2925050505b92915050565b61085861123d565b61086061123d565b6000808061087460a08701608088016115f7565b61ffff1611156109115761271061088e60208701876115f7565b61ffff166108a260a08801608089016115f7565b61ffff166108b091906119c1565b6108ba919061199f565b90506127106108cf60408701602088016115f7565b61ffff166108e360a08801608089016115f7565b61ffff166108f191906119c1565b6108fb919061199f565b91506109078282611961565b61ffff1660808401525b600061092360808701606088016115f7565b61ffff1611156109765761271061094060408701602088016115f7565b61ffff1661095460808801606089016115f7565b61ffff1661096291906119c1565b61096c919061199f565b61ffff1660608401525b600061098860608701604088016115f7565b61ffff1611156109db576127106109a560408701602088016115f7565b61ffff166109b960608801604089016115f7565b61ffff166109c791906119c1565b6109d1919061199f565b61ffff1660408401525b60006109ea60208701876115f7565b61ffff161115610a1b5761ffff8116610a0660208701876115f7565b61ffff16610a1491906119e0565b61ffff1683525b6000610a2d60408701602088016115f7565b61ffff161115610a8b57604080840151606085015161ffff8581169392811692911690610a5f90890160208a016115f7565b61ffff16610a6d91906119e0565b610a7791906119e0565b610a8191906119e0565b61ffff1660208401525b50909392505050565b8233610aa08282611159565b610ad45760405162461bcd60e51b81526020600482015260056024820152640c8b4c0c0d60da1b6044820152606401610505565b6000858152600160205260408082209051633e8cf2cb60e11b8152600481018890529091907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637d19e5969060240160006040518083038186803b158015610b4557600080fd5b505afa158015610b59573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b8191908101906114c2565b90506001600160a01b038616610bd95760405162461bcd60e51b815260206004820152600560248201527f322d3030390000000000000000000000000000000000000000000000000000006044820152606401610505565b80516001600160a01b03878116911614801590610c0c575080604001516001600160a01b0316866001600160a01b031614155b610c585760405162461bcd60e51b815260206004820152600560248201527f322d3031300000000000000000000000000000000000000000000000000000006044820152606401610505565b8154600160b81b900460ff161580610c7957508154600160b01b900460ff16155b610cc55760405162461bcd60e51b815260206004820152600560248201527f322d3030360000000000000000000000000000000000000000000000000000006044820152606401610505565b6101408101516127109061ffff8716906003602002015161ffff168360a00151610cef9190611987565b610cf99190611987565b10610d2e5760405162461bcd60e51b8152602060048201526005602482015264322d30303760d81b6044820152606401610505565b81546001600160a01b0387167fffffffffffffffffffff0000000000000000000000000000000000000000000090911617600160a01b61ffff871602178255610d85813390516001600160a01b0390811691161490565b15610da157815461ffff60b01b1916600160b81b178255610dc9565b60408101516001600160a01b0316331415610dc957815461ffff60b01b1916600160b01b1782555b604080516001600160a01b038816815261ffff87166020820152339181019190915287907fbf42827f17777ed92b098fa9e5f6823ecb5c116e3b23909cc242530b1784dbbc906060015b60405180910390a250505050505050565b8233610e308282611159565b610e645760405162461bcd60e51b81526020600482015260056024820152640c8b4c0c0d60da1b6044820152606401610505565b6000610e6f8661028d565b604051633e8cf2cb60e11b8152600481018890529091506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d19e5969060240160006040518083038186803b158015610ed557600080fd5b505afa158015610ee9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f1191908101906114c2565b82519091506001600160a01b0316610f535760405162461bcd60e51b81526020600482015260056024820152640645a6060760db1b6044820152606401610505565b81516001600160a01b03878116911614610f975760405162461bcd60e51b81526020600482015260056024820152640645a6060760db1b6044820152606401610505565b816020015161ffff168561ffff1614610fda5760405162461bcd60e51b8152602060048201526005602482015264322d30303760d81b6044820152606401610505565b80516001600160a01b0316331415611061576060820151156110265760405162461bcd60e51b8152602060048201526005602482015264322d30303360d81b6044820152606401610505565b600087815260016020526040902080547fffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffffff16600160b81b1790555b60408101516001600160a01b03163314156110eb576040820151156110b05760405162461bcd60e51b8152602060048201526005602482015264322d30303360d81b6044820152606401610505565b600087815260016020526040902080547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16600160b01b1790555b8151602083015160405189927fd514ca74d69a194b5d9455914d0d20ef96d29b6177b241c9d5f608264055199c92610e13926001600160a01b0392909216825261ffff16602082015260400190565b6000808260010b12156111555761115082611a23565b61084a565b5090565b604051633e8cf2cb60e11b81526004810183905260009081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d19e5969060240160006040518083038186803b1580156111be57600080fd5b505afa1580156111d2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111fa91908101906114c2565b9050826001600160a01b031681600001516001600160a01b031614806112355750826001600160a01b031681604001516001600160a01b0316145b949350505050565b6040518060a001604052806005906020820280368337509192915050565b805161126681611a71565b919050565b600082601f83011261127c57600080fd5b6040516040810181811067ffffffffffffffff8211171561129f5761129f611a5b565b80604052508083856040860111156112b657600080fd5b6000805b60028110156112e85782518060010b81146112d3578283fd5b845260209384019392909201916001016112ba565b50929695505050505050565b600082601f83011261130557600080fd5b6040516080810181811067ffffffffffffffff8211171561132857611328611a5b565b60405280836080810186101561133d57600080fd5b60005b600481101561136957815161135481611a89565b83526020928301929190910190600101611340565b509195945050505050565b600082601f83011261138557600080fd5b815167ffffffffffffffff808211156113a0576113a0611a5b565b604051601f8301601f19908116603f011681019082821181831017156113c8576113c8611a5b565b816040528381528660208588010111156113e157600080fd5b6113f28460208301602089016119f7565b9695505050505050565b805161126681611a89565b805167ffffffffffffffff8116811461126657600080fd5b600060a0828403121561143157600080fd5b8260a08301111561144157600080fd5b50919050565b600060a0828403121561145957600080fd5b82601f83011261146857600080fd5b60405160a0810181811067ffffffffffffffff8211171561148b5761148b611a5b565b604052808360a081018610156114a057600080fd5b60005b60058110156113695781518352602092830192909101906001016114a3565b6000602082840312156114d457600080fd5b815167ffffffffffffffff808211156114ec57600080fd5b90830190610220828603121561150157600080fd5b6115096118f2565b6115128361125b565b815261152060208401611407565b60208201526115316040840161125b565b604082015261154260608401611407565b60608201526115536080840161125b565b608082015260a083015160a082015261156e60c08401611407565b60c082015261157f60e0840161125b565b60e08201526101006115928185016113fc565b908201526101206115a58785830161126b565b908201526101606115b8878583016112f4565b6101408301526101e084015190820152610200830151828111156115db57600080fd5b6115e787828601611374565b6101808301525095945050505050565b60006020828403121561160957600080fd5b813561161481611a89565b9392505050565b60006020828403121561162d57600080fd5b5035919050565b60008060006060848603121561164957600080fd5b83359250602084013561165b81611a71565b9150604084013561166b81611a89565b809150509250925092565b6000806060838503121561168957600080fd5b823591508360608401111561169d57600080fd5b50926020919091019150565b8060005b60028110156116cf578151600190810b855260209485019490920191016116ad565b50505050565b8060005b60048110156116cf57815161ffff168452602093840193909101906001016116d9565b8060005b60058110156116cf578151845260209384019390910190600101611700565b600081518084526117378160208601602086016119f7565b601f01601f19169290920160200192915050565b60a08101818360005b600581101561177757815161ffff16835260209283019290910190600101611754565b50505092915050565b60a0810161084a82846116fc565b60e081526117a860e0820185516001600160a01b03169052565b600060208501516101006117c78185018367ffffffffffffffff169052565b604087015191506101206117e5818601846001600160a01b03169052565b606088015192506101406118048187018567ffffffffffffffff169052565b60808901519350610160611822818801866001600160a01b03169052565b60a08a01516101808881019190915260c08b015167ffffffffffffffff166101a089015260e08b01516001600160a01b03166101c0890152848b015161ffff166101e0890152838b0151955061187c6102008901876116a9565b828b015195506118906102408901876116d5565b908a01516102c08801528901516102206102e088015293506118bb925050610300850190508261171f565b91505083602083015261123560408301846116fc565b83815260e081016118e560208301856116d5565b61123560a08301846116a9565b6040516101a0810167ffffffffffffffff8111828210171561191657611916611a5b565b60405290565b60008160010b8360010b6000821282617fff0382138115161561194157611941611a45565b82617fff1903821281161561195857611958611a45565b50019392505050565b600061ffff80831681851680830382111561197e5761197e611a45565b01949350505050565b6000821982111561199a5761199a611a45565b500190565b6000826119bc57634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156119db576119db611a45565b500290565b6000828210156119f2576119f2611a45565b500390565b60005b83811015611a125781810151838201526020016119fa565b838111156116cf5750506000910152565b60008160010b617fff19811415611a3c57611a3c611a45565b60000392915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611a8657600080fd5b50565b61ffff81168114611a8657600080fdfea2646970667358221220c89284c77c464a81007bbf5b013088c719ccf4105cf47a423ddc2f9fa98b653464736f6c63430008070033";
const isSuperArgs = (xs) => xs.length > 1;
class UnicrowArbitrator__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(unicrow_, unicrowClaim_, overrides) {
        return super.getDeployTransaction(unicrow_, unicrowClaim_, overrides || {});
    }
    deploy(unicrow_, unicrowClaim_, overrides) {
        return super.deploy(unicrow_, unicrowClaim_, overrides || {});
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
exports.UnicrowArbitrator__factory = UnicrowArbitrator__factory;
//# sourceMappingURL=UnicrowArbitrator__factory.js.map