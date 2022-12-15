import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnicrowClaim, UnicrowClaimInterface } from "../UnicrowClaim";
type UnicrowClaimConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UnicrowClaim__factory extends ContractFactory {
    constructor(...args: UnicrowClaimConstructorParams);
    deploy(unicrow_: string, unicrowArbitrator_: string, protocolFeeAddress_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UnicrowClaim>;
    getDeployTransaction(unicrow_: string, unicrowArbitrator_: string, protocolFeeAddress_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UnicrowClaim;
    connect(signer: Signer): UnicrowClaim__factory;
    static readonly contractName: "UnicrowClaim";
    readonly contractName: "UnicrowClaim";
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001b9638038062001b96833981016040819052620000349162000097565b6001600055606092831b6001600160601b03199081166080529190921b1660a052600380546001600160a01b0319166001600160a01b03909216919091179055620000e1565b80516001600160a01b03811681146200009257600080fd5b919050565b600080600060608486031215620000ad57600080fd5b620000b8846200007a565b9250620000c8602085016200007a565b9150620000d8604085016200007a565b90509250925092565b60805160601c60a05160601c611a3d620001596000396000818160f10152818161032f015281816109000152610ed80152600081816101580152818161026f015281816106ac0152818161084501528181610cd801528181610db5015281816110070152818161125301526112e40152611a3d6000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80639051cce911610076578063a76b8fb71161005b578063a76b8fb7146101a0578063cce516b7146101b3578063eeca9a31146101c657600080fd5b80639051cce91461017a57806394417bce1461018d57600080fd5b80634cb6995a116100a75780634cb6995a1461012b57806364b87a70146101405780636e4e29341461015357600080fd5b8063379607f5146100c357806349c4920f146100ec575b600080fd5b6100d66100d1366004611814565b6101d9565b6040516100e391906118f4565b60405180910390f35b6101137f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100e3565b61013e610139366004611566565b6106aa565b005b600254610113906001600160a01b031681565b6101137f000000000000000000000000000000000000000000000000000000000000000081565b61013e61018836600461162a565b610787565b600154610113906001600160a01b031681565b61013e6101ae366004611566565b610cd6565b600354610113906001600160a01b031681565b61013e6101d4366004611566565b610db3565b6101e16113d8565b600260005414156102395760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556040517f7d19e596000000000000000000000000000000000000000000000000000000008152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637d19e596906024016102006040518083038186803b1580156102ba57600080fd5b505afa1580156102ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f2919061172f565b6040517f16e0551b000000000000000000000000000000000000000000000000000000008152600481018590529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906316e0551b9060240160a06040518083038186803b15801561037157600080fd5b505afa158015610385573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a9919061169f565b905081610100015161ffff166000146103ec5760405162461bcd60e51b8152602060048201526005602482015264302d30303560d81b6044820152606401610230565b61012082015160200151600190810b12801590610413575061012082015151600190810b12155b8061042b57508160c0015167ffffffffffffffff1642115b61045f5760405162461bcd60e51b8152602060048201526005602482015264181698181b60d91b6044820152606401610230565b600061046b8284610e90565b9050600061047e8461016001518361113c565b6040805160a08101825286516001600160a01b0390811682528783015181166020830152608080890151821693830193909352600354811660608301528651169181019190915260e0860151919250906104dd90889084908490611224565b6001546001600160a01b0316158015906104fa5750606082015115155b156105835760015460e0860151865160408089015160608701519151631d9dc2a760e21b81526001600160a01b03948516600482015292841660248401528316604483015260648201529116906376770a9c90608401600060405180830381600087803b15801561056a57600080fd5b505af115801561057e573d6000803e3d6000fd5b505050505b6002546001600160a01b0316158015906105a05750606082015115155b156106165760025460e08601516060840151604051630bb03fdb60e21b81526001600160a01b0392831660048201526024810191909152911690632ec0ff6c90604401600060405180830381600087803b1580156105fd57600080fd5b505af1158015610611573d6000803e3d6000fd5b505050505b7f1cb4a08ebb7666285e2651c86215fd774d44b0e6835bd40e86e90e7e19bca57a6040518060400160405280898152602001848152506040516106599190611902565b60405180910390a1506040805160a081018252825181526020808401519082015282820151918101919091526060808301519082015260809182015191810191909152600160005595945050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b15801561070357600080fd5b505afa158015610717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073b919061158a565b6001600160a01b0316336001600160a01b03161461075857600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600260005414156107da5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610230565b600260009081558167ffffffffffffffff8111156107fa576107fa6119d9565b60405190808252806020026020018201604052801561083357816020015b6108206113f6565b8152602001906001900390816108185790505b50905060005b82811015610c945760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316637d19e596868685818110610884576108846119c3565b905060200201356040518263ffffffff1660e01b81526004016108a991815260200190565b6102006040518083038186803b1580156108c257600080fd5b505afa1580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa919061172f565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166316e0551b87878681811061093f5761093f6119c3565b905060200201356040518263ffffffff1660e01b815260040161096491815260200190565b60a06040518083038186803b15801561097c57600080fd5b505afa158015610990573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b4919061169f565b905081610100015161ffff166000146109f75760405162461bcd60e51b8152602060048201526005602482015264302d30303560d81b6044820152606401610230565b61012082015160200151600190810b12801590610a1e575061012082015151600190810b12155b80610a3657508160c0015167ffffffffffffffff1642115b610a6a5760405162461bcd60e51b8152602060048201526005602482015264181698181b60d91b6044820152606401610230565b6000610a768284610e90565b90506000610a898461016001518361113c565b6040805160a08101825286516001600160a01b03908116825287830151811660208301526080808901518216938301939093526003548116606083015286511691810191909152909150610afb898988818110610ae857610ae86119c3565b9050602002013583838860e00151611224565b6001546001600160a01b031615801590610b185750606082015115155b15610ba15760015460e0860151865160408089015160608701519151631d9dc2a760e21b81526001600160a01b03948516600482015292841660248401528316604483015260648201529116906376770a9c90608401600060405180830381600087803b158015610b8857600080fd5b505af1158015610b9c573d6000803e3d6000fd5b505050505b6002546001600160a01b031615801590610bbe5750606082015115155b15610c345760025460e08601516060840151604051630bb03fdb60e21b81526001600160a01b0392831660048201526024810191909152911690632ec0ff6c90604401600060405180830381600087803b158015610c1b57600080fd5b505af1158015610c2f573d6000803e3d6000fd5b505050505b60405180604001604052808a8a89818110610c5157610c516119c3565b90506020020135815260200183815250878781518110610c7357610c736119c3565b6020026020010181905250505050505080610c8d90611992565b9050610839565b507f78440173bde658099ce0189e1e59632aab52a09bc1fdb14091b82b40873f5ad581604051610cc49190611871565b60405180910390a15050600160005550565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b158015610d2f57600080fd5b505afa158015610d43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d67919061158a565b6001600160a01b0316336001600160a01b031614610d8457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b158015610e0c57600080fd5b505afa158015610e20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e44919061158a565b6001600160a01b0316336001600160a01b031614610e6157600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b610e986113d8565b610ea06113d8565b600084606001518015610eb4575084604001515b9050600081610ec4576000610eca565b85602001515b9050856080015115611005577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634c403c536040518060a00160405280886101400151600060ff1660048110610f2b57610f2b6119c3565b6020908102919091015161ffff90811683526101408b018051830151821692840192909252815160409081015182168185015291516060908101518216908401528616608090920191909152517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b168152610fae91906004016118bf565b60a06040518083038186803b158015610fc657600080fd5b505afa158015610fda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffe91906115a7565b9250611130565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d02f411e6040518060a00160405280886101400151600060ff166004811061105a5761105a6119c3565b6020908102919091015161ffff90811683526101408b018051830151821692840192909252815160409081015182168185015291516060908101518216908401528616608090920191909152517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526110dd91906004016118bf565b60a06040518083038186803b1580156110f557600080fd5b505afa158015611109573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112d91906115a7565b92505b50909150505b92915050565b6111446113d8565b61114c6113d8565b82516127109061116190869061ffff1661195c565b61116b919061193a565b815260208301516127109061118590869061ffff1661195c565b61118f919061193a565b60208201526040830151612710906111ac90869061ffff1661195c565b6111b6919061193a565b60408201526080830151612710906111d390869061ffff1661195c565b6111dd919061193a565b608082018190526040820151602083015183516111fa908861197b565b611204919061197b565b61120e919061197b565b611218919061197b565b60608201529392505050565b6040517fe7aa0bd7000000000000000000000000000000000000000000000000000000008152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e7aa0bd790602401600060405180830381600087803b15801561129f57600080fd5b505af11580156112b3573d6000803e3d6000fd5b5050505060005b60058110156113d15760008482600581106112d7576112d76119c3565b602002015111156113c1577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638ede1f05848360058110611323576113236119c3565b602002015186846005811061133a5761133a6119c3565b60200201516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03928316600482015260248101919091529085166044820152606401600060405180830381600087803b1580156113a857600080fd5b505af11580156113bc573d6000803e3d6000fd5b505050505b6113ca81611992565b90506112ba565b5050505050565b6040518060a001604052806005906020820280368337509192915050565b6040518060400160405280600081526020016114106113d8565b905290565b8051611420816119ef565b919050565b600082601f83011261143657600080fd5b6040516040810181811067ffffffffffffffff82111715611459576114596119d9565b806040525080838560408601111561147057600080fd5b6000805b60028110156114a25782518060010b811461148d578283fd5b84526020938401939290920191600101611474565b50929695505050505050565b600082601f8301126114bf57600080fd5b6040516080810181811067ffffffffffffffff821117156114e2576114e26119d9565b6040528083608081018610156114f757600080fd5b60005b60048110156115215761150c8261153c565b835260209283019291909101906001016114fa565b509195945050505050565b8051801515811461142057600080fd5b805161ffff8116811461142057600080fd5b805167ffffffffffffffff8116811461142057600080fd5b60006020828403121561157857600080fd5b8135611583816119ef565b9392505050565b60006020828403121561159c57600080fd5b8151611583816119ef565b600060a082840312156115b957600080fd5b82601f8301126115c857600080fd5b60405160a0810181811067ffffffffffffffff821117156115eb576115eb6119d9565b604052808360a0810186101561160057600080fd5b60005b6005811015611521576116158261153c565b83526020928301929190910190600101611603565b6000806020838503121561163d57600080fd5b823567ffffffffffffffff8082111561165557600080fd5b818501915085601f83011261166957600080fd5b81358181111561167857600080fd5b8660208260051b850101111561168d57600080fd5b60209290920196919550909350505050565b600060a082840312156116b157600080fd5b60405160a0810181811067ffffffffffffffff821117156116d4576116d46119d9565b60405282516116e2816119ef565b81526116f06020840161153c565b60208201526117016040840161152c565b60408201526117126060840161152c565b60608201526117236080840161152c565b60808201529392505050565b6000610200828403121561174257600080fd5b61174a611910565b61175383611415565b81526117616020840161154e565b602082015261177260408401611415565b60408201526117836060840161154e565b606082015261179460808401611415565b608082015260a083015160a08201526117af60c0840161154e565b60c08201526117c060e08401611415565b60e08201526101006117d381850161153c565b908201526101206117e685858301611425565b908201526101606117f9858583016114ae565b6101408301526101e084015181830152508091505092915050565b60006020828403121561182657600080fd5b5035919050565b8060005b6005811015611850578151845260209384019390910190600101611831565b50505050565b80518252602081015161186c602084018261182d565b505050565b6020808252825182820181905260009190848201906040850190845b818110156118b3576118a0838551611856565b9284019260c0929092019160010161188d565b50909695505050505050565b60a08101818360005b60058110156118eb57815161ffff168352602092830192909101906001016118c8565b50505092915050565b60a08101611136828461182d565b60c081016111368284611856565b604051610180810167ffffffffffffffff81118282101715611934576119346119d9565b60405290565b60008261195757634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611976576119766119ad565b500290565b60008282101561198d5761198d6119ad565b500390565b60006000198214156119a6576119a66119ad565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611a0457600080fd5b5056fea264697066735822122013d2e4462caa63ab29e306fa0e479052351d6e95a8d1d23c138f23db346ba27c64736f6c63430008070033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): UnicrowClaimInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnicrowClaim;
}
export {};