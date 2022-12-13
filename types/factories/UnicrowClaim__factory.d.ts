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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620032213803806200322183398181016040528101906200003791906200010e565b60016000819055508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620001bd565b6000815190506200010881620001a3565b92915050565b6000806000606084860312156200012a57620001296200019e565b5b60006200013a86828701620000f7565b93505060206200014d86828701620000f7565b92505060406200016086828701620000f7565b9150509250925092565b600062000177826200017e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001ae816200016a565b8114620001ba57600080fd5b50565b60805160601c60a05160601c612feb620002366000396000818161047101528181610af601528181610e0401526117500152600081816103c301528181610b1a01528181610c6001528181610d3d0152818161147b015281816115c1015281816118ce01528181611c970152611d4e0152612feb6000f3fe6080604052600436106100955760003560e01c80639051cce9116100595780639051cce9146101fc57806394417bce14610225578063a76b8fb714610250578063cce516b714610279578063eeca9a31146102a457610110565b8063379607f51461011557806349c4920f146101525780634cb6995a1461017d57806364b87a70146101a65780636e4e2934146101d157610110565b36610110577fbf5c06da20813a4fd033efc0a24d1e3cedfc4450115a27e133c433ad436e567b6040516100c790612966565b60405180910390a161010e6040518060400160405280600981526020017f6761736c6566743a2000000000000000000000000000000000000000000000008152505a6102cd565b005b600080fd5b34801561012157600080fd5b5061013c6004803603810190610137919061241f565b610369565b604051610149919061288f565b60405180910390f35b34801561015e57600080fd5b50610167610af4565b60405161017491906128e0565b60405180910390f35b34801561018957600080fd5b506101a4600480360381019061019f91906122f0565b610b18565b005b3480156101b257600080fd5b506101bb610c38565b6040516101c891906128c5565b60405180910390f35b3480156101dd57600080fd5b506101e6610c5e565b6040516101f391906128fb565b60405180910390f35b34801561020857600080fd5b50610223600480360381019061021e9190612377565b610c82565b005b34801561023157600080fd5b5061023a611453565b60405161024791906128aa565b60405180910390f35b34801561025c57600080fd5b50610277600480360381019061027291906122f0565b611479565b005b34801561028557600080fd5b5061028e611599565b60405161029b9190612792565b60405180910390f35b3480156102b057600080fd5b506102cb60048036038101906102c691906122f0565b6115bf565b005b61036582826040516024016102e3929190612916565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506116df565b5050565b610371611e2a565b600260005414156103b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ae906129a6565b60405180910390fd5b600260008190555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596846040518263ffffffff1660e01b815260040161041a91906129e1565b6102006040518083038186803b15801561043357600080fd5b505afa158015610447573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046b91906123f1565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166316e0551b856040518263ffffffff1660e01b81526004016104c891906129e1565b60a06040518083038186803b1580156104e057600080fd5b505afa1580156104f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051891906123c4565b9050600082610100015161ffff1614610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055d90612986565b60405180910390fd5b6001826101200151600160ff166002811061058457610583612dfa565b5b602002015160010b121580156105be57506001826101200151600060ff16600281106105b3576105b2612dfa565b5b602002015160010b12155b806105d657508160c0015167ffffffffffffffff1642115b610615576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060c90612946565b60405180910390fd5b60006106218284611708565b9050600061063484610160015183611a52565b905060006040518060a00160405280866000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001856000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250905061077f8783838860e00151611c95565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156107f95750600082600360ff16600581106107f2576107f1612dfa565b5b6020020151115b156108b957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376770a9c8660e001518760000151886040015186600360ff166005811061086257610861612dfa565b5b60200201516040518563ffffffff1660e01b815260040161088694939291906127ad565b600060405180830381600087803b1580156108a057600080fd5b505af11580156108b4573d6000803e3d6000fd5b505050505b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156109335750600082600360ff166005811061092c5761092b612dfa565b5b6020020151115b156109e757600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632ec0ff6c8660e0015184600360ff166005811061099257610991612dfa565b5b60200201516040518363ffffffff1660e01b81526004016109b49291906127f2565b600060405180830381600087803b1580156109ce57600080fd5b505af11580156109e2573d6000803e3d6000fd5b505050505b7f4dcc1cbd3586ce0ab63396e3e3601351a6fd799aec0cd7bd6576111033533560604051806040016040528089815260200184815250604051610a2a91906129c6565b60405180910390a16040518060a0016040528083600060ff1660058110610a5457610a53612dfa565b5b6020020151815260200183600160ff1660058110610a7557610a74612dfa565b5b6020020151815260200183600260ff1660058110610a9657610a95612dfa565b5b6020020151815260200183600360ff1660058110610ab757610ab6612dfa565b5b6020020151815260200183600460ff1660058110610ad857610ad7612dfa565b5b6020020151815250955050505050506001600081905550919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b158015610b7e57600080fd5b505afa158015610b92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb6919061231d565b73ffffffffffffffffffffffffffffffffffffffff16610bd4611e22565b73ffffffffffffffffffffffffffffffffffffffff1614610bf457600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60026000541415610cc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbf906129a6565b60405180910390fd5b600260008190555060008282905067ffffffffffffffff811115610cef57610cee612e29565b5b604051908082528060200260200182016040528015610d2857816020015b610d15611e4c565b815260200190600190039081610d0d5790505b50905060005b8383905081101561140e5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596868685818110610d8a57610d89612dfa565b5b905060200201356040518263ffffffff1660e01b8152600401610dad91906129e1565b6102006040518083038186803b158015610dc657600080fd5b505afa158015610dda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfe91906123f1565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166316e0551b878786818110610e5157610e50612dfa565b5b905060200201356040518263ffffffff1660e01b8152600401610e7491906129e1565b60a06040518083038186803b158015610e8c57600080fd5b505afa158015610ea0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec491906123c4565b9050600082610100015161ffff1614610f12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0990612986565b60405180910390fd5b6001826101200151600160ff1660028110610f3057610f2f612dfa565b5b602002015160010b12158015610f6a57506001826101200151600060ff1660028110610f5f57610f5e612dfa565b5b602002015160010b12155b80610f8257508160c0015167ffffffffffffffff1642115b610fc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb890612946565b60405180910390fd5b6000610fcd8284611708565b90506000610fe084610160015183611a52565b905060006040518060a00160405280866000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001856000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250905061114489898881811061113157611130612dfa565b5b9050602002013583838860e00151611c95565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156111be5750600082600360ff16600581106111b7576111b6612dfa565b5b6020020151115b1561127e57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376770a9c8660e001518760000151886040015186600360ff166005811061122757611226612dfa565b5b60200201516040518563ffffffff1660e01b815260040161124b94939291906127ad565b600060405180830381600087803b15801561126557600080fd5b505af1158015611279573d6000803e3d6000fd5b505050505b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156112f85750600082600360ff16600581106112f1576112f0612dfa565b5b6020020151115b156113ac57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632ec0ff6c8660e0015184600360ff166005811061135757611356612dfa565b5b60200201516040518363ffffffff1660e01b81526004016113799291906127f2565b600060405180830381600087803b15801561139357600080fd5b505af11580156113a7573d6000803e3d6000fd5b505050505b60405180604001604052808a8a898181106113ca576113c9612dfa565b5b905060200201358152602001838152508787815181106113ed576113ec612dfa565b5b602002602001018190525050505050508061140790612d53565b9050610d2e565b507f05270dc3f040b6099aa59b4dc25043ad9d14706a809c4dd4ad6356935332b8518160405161143e9190612852565b60405180910390a15060016000819055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b1580156114df57600080fd5b505afa1580156114f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611517919061231d565b73ffffffffffffffffffffffffffffffffffffffff16611535611e22565b73ffffffffffffffffffffffffffffffffffffffff161461155557600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663795053d36040518163ffffffff1660e01b815260040160206040518083038186803b15801561162557600080fd5b505afa158015611639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165d919061231d565b73ffffffffffffffffffffffffffffffffffffffff1661167b611e22565b73ffffffffffffffffffffffffffffffffffffffff161461169b57600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b611710611e6c565b611718611e6c565b60008460600151801561172c575084604001515b905060008161173c576000611742565b85602001515b90508560800151156118cc577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634c403c536040518060a00160405280886101400151600060ff16600481106117b1576117b0612dfa565b5b602002015161ffff1661ffff168152602001886101400151600160ff16600481106117df576117de612dfa565b5b602002015161ffff1661ffff168152602001886101400151600260ff166004811061180d5761180c612dfa565b5b602002015161ffff1661ffff168152602001886101400151600360ff166004811061183b5761183a612dfa565b5b602002015161ffff1661ffff1681526020018461ffff1661ffff168152506040518263ffffffff1660e01b81526004016118759190612874565b60a06040518083038186803b15801561188d57600080fd5b505afa1580156118a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c5919061234a565b9250611a46565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d02f411e6040518060a00160405280886101400151600060ff166004811061192f5761192e612dfa565b5b602002015161ffff1661ffff168152602001886101400151600160ff166004811061195d5761195c612dfa565b5b602002015161ffff1661ffff168152602001886101400151600260ff166004811061198b5761198a612dfa565b5b602002015161ffff1661ffff168152602001886101400151600360ff16600481106119b9576119b8612dfa565b5b602002015161ffff1661ffff1681526020018461ffff1661ffff168152506040518263ffffffff1660e01b81526004016119f39190612874565b60a06040518083038186803b158015611a0b57600080fd5b505afa158015611a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a43919061234a565b92505b82935050505092915050565b611a5a611e2a565b611a62611e2a565b61271061ffff168484600060ff1660058110611a8157611a80612dfa565b5b602002015161ffff16611a949190612b7e565b611a9e9190612b4d565b81600060ff1660058110611ab557611ab4612dfa565b5b60200201818152505061271061ffff168484600160ff1660058110611add57611adc612dfa565b5b602002015161ffff16611af09190612b7e565b611afa9190612b4d565b81600160ff1660058110611b1157611b10612dfa565b5b60200201818152505061271061ffff168484600260ff1660058110611b3957611b38612dfa565b5b602002015161ffff16611b4c9190612b7e565b611b569190612b4d565b81600260ff1660058110611b6d57611b6c612dfa565b5b60200201818152505061271061ffff168484600460ff1660058110611b9557611b94612dfa565b5b602002015161ffff16611ba89190612b7e565b611bb29190612b4d565b81600460ff1660058110611bc957611bc8612dfa565b5b60200201818152505080600460ff1660058110611be957611be8612dfa565b5b602002015181600260ff1660058110611c0557611c04612dfa565b5b602002015182600160ff1660058110611c2157611c20612dfa565b5b602002015183600060ff1660058110611c3d57611c3c612dfa565b5b602002015187611c4d9190612bd8565b611c579190612bd8565b611c619190612bd8565b611c6b9190612bd8565b81600360ff1660058110611c8257611c81612dfa565b5b6020020181815250508091505092915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e7aa0bd7856040518263ffffffff1660e01b8152600401611cee91906129e1565b600060405180830381600087803b158015611d0857600080fd5b505af1158015611d1c573d6000803e3d6000fd5b5050505060005b6005811015611e1b576000848260058110611d4157611d40612dfa565b5b60200201511115611e0a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638ede1f05848360058110611d9b57611d9a612dfa565b5b6020020151868460058110611db357611db2612dfa565b5b6020020151856040518463ffffffff1660e01b8152600401611dd79392919061281b565b600060405180830381600087803b158015611df157600080fd5b505af1158015611e05573d6000803e3d6000fd5b505050505b80611e1490612d53565b9050611d23565b5050505050565b600033905090565b6040518060a00160405280600590602082028036833780820191505090505090565b604051806040016040528060008152602001611e66611e2a565b81525090565b6040518060a00160405280600590602082028036833780820191505090505090565b6000611ea1611e9c84612a21565b6129fc565b90508082856020860282011115611ebb57611eba612e67565b5b60005b85811015611eeb5781611ed188826120d9565b845260208401935060208301925050600181019050611ebe565b5050509392505050565b6000611f08611f0384612a47565b6129fc565b90508082856020860282011115611f2257611f21612e67565b5b60005b85811015611f525781611f38888261229c565b845260208401935060208301925050600181019050611f25565b5050509392505050565b6000611f6f611f6a84612a6d565b6129fc565b90508082856020860282011115611f8957611f88612e67565b5b60005b85811015611fb95781611f9f888261229c565b845260208401935060208301925050600181019050611f8c565b5050509392505050565b600081359050611fd281612f2b565b92915050565b600081519050611fe781612f2b565b92915050565b600082601f83011261200257612001612e5d565b5b600261200f848285611e8e565b91505092915050565b600082601f83011261202d5761202c612e5d565b5b600461203a848285611ef5565b91505092915050565b600082601f83011261205857612057612e5d565b5b6005612065848285611f5c565b91505092915050565b60008083601f84011261208457612083612e5d565b5b8235905067ffffffffffffffff8111156120a1576120a0612e58565b5b6020830191508360208202830111156120bd576120bc612e67565b5b9250929050565b6000815190506120d381612f42565b92915050565b6000815190506120e881612f59565b92915050565b600060a0828403121561210457612103612e62565b5b61210e60a06129fc565b9050600061211e84828501611fd8565b60008301525060206121328482850161229c565b6020830152506040612146848285016120c4565b604083015250606061215a848285016120c4565b606083015250608061216e848285016120c4565b60808301525092915050565b6000610200828403121561219157612190612e62565b5b61219c6101806129fc565b905060006121ac84828501611fd8565b60008301525060206121c0848285016122db565b60208301525060406121d484828501611fd8565b60408301525060606121e8848285016122db565b60608301525060806121fc84828501611fd8565b60808301525060a0612210848285016122c6565b60a08301525060c0612224848285016122db565b60c08301525060e061223884828501611fd8565b60e08301525061010061224d8482850161229c565b6101008301525061012061226384828501611fed565b6101208301525061016061227984828501612018565b610140830152506101e061228f848285016122c6565b6101608301525092915050565b6000815190506122ab81612f70565b92915050565b6000813590506122c081612f87565b92915050565b6000815190506122d581612f87565b92915050565b6000815190506122ea81612f9e565b92915050565b60006020828403121561230657612305612e71565b5b600061231484828501611fc3565b91505092915050565b60006020828403121561233357612332612e71565b5b600061234184828501611fd8565b91505092915050565b600060a082840312156123605761235f612e71565b5b600061236e84828501612043565b91505092915050565b6000806020838503121561238e5761238d612e71565b5b600083013567ffffffffffffffff8111156123ac576123ab612e6c565b5b6123b88582860161206e565b92509250509250929050565b600060a082840312156123da576123d9612e71565b5b60006123e8848285016120ee565b91505092915050565b6000610200828403121561240857612407612e71565b5b60006124168482850161217a565b91505092915050565b60006020828403121561243557612434612e71565b5b6000612443848285016122b1565b91505092915050565b60006124588383612707565b60c08301905092915050565b60006124708383612765565b60208301905092915050565b60006124888383612774565b60208301905092915050565b61249d81612c0c565b82525050565b60006124ae82612ab7565b6124b88185612b0a565b93506124c383612a93565b8060005b838110156124f45781516124db888261244c565b97506124e683612ae3565b9250506001810190506124c7565b5085935050505092915050565b61250a81612ac2565b6125148184612b1b565b925061251f82612aa3565b8060005b838110156125505781516125378782612464565b965061254283612af0565b925050600181019050612523565b505050505050565b61256181612acd565b61256b8184612b26565b925061257682612aad565b8060005b838110156125a757815161258e878261247c565b965061259983612afd565b92505060018101905061257a565b505050505050565b6125b881612acd565b6125c28184612b31565b92506125cd82612aad565b8060005b838110156125fe5781516125e5878261247c565b96506125f083612afd565b9250506001810190506125d1565b505050505050565b61260f81612c83565b82525050565b61261e81612c95565b82525050565b61262d81612ca7565b82525050565b61263c81612cb9565b82525050565b600061264d82612ad8565b6126578185612b3c565b9350612667818560208601612cef565b61267081612e76565b840191505092915050565b6000612688600583612b3c565b915061269382612e87565b602082019050919050565b60006126ab600383612b3c565b91506126b682612eb0565b602082019050919050565b60006126ce600583612b3c565b91506126d982612ed9565b602082019050919050565b60006126f1601f83612b3c565b91506126fc82612f02565b602082019050919050565b60c08201600082015161271d6000850182612774565b5060208201516127306020850182612558565b50505050565b60c08201600082015161274c6000850182612774565b50602082015161275f6020850182612558565b50505050565b61276e81612c37565b82525050565b61277d81612c65565b82525050565b61278c81612c65565b82525050565b60006020820190506127a76000830184612494565b92915050565b60006080820190506127c26000830187612494565b6127cf6020830186612494565b6127dc6040830185612494565b6127e96060830184612783565b95945050505050565b60006040820190506128076000830185612494565b6128146020830184612783565b9392505050565b60006060820190506128306000830186612494565b61283d6020830185612783565b61284a6040830184612494565b949350505050565b6000602082019050818103600083015261286c81846124a3565b905092915050565b600060a0820190506128896000830184612501565b92915050565b600060a0820190506128a460008301846125af565b92915050565b60006020820190506128bf6000830184612606565b92915050565b60006020820190506128da6000830184612615565b92915050565b60006020820190506128f56000830184612624565b92915050565b60006020820190506129106000830184612633565b92915050565b600060408201905081810360008301526129308185612642565b905061293f6020830184612783565b9392505050565b6000602082019050818103600083015261295f8161267b565b9050919050565b6000602082019050818103600083015261297f8161269e565b9050919050565b6000602082019050818103600083015261299f816126c1565b9050919050565b600060208201905081810360008301526129bf816126e4565b9050919050565b600060c0820190506129db6000830184612736565b92915050565b60006020820190506129f66000830184612783565b92915050565b6000612a06612a17565b9050612a128282612d22565b919050565b6000604051905090565b600067ffffffffffffffff821115612a3c57612a3b612e29565b5b602082029050919050565b600067ffffffffffffffff821115612a6257612a61612e29565b5b602082029050919050565b600067ffffffffffffffff821115612a8857612a87612e29565b5b602082029050919050565b6000819050602082019050919050565b6000819050919050565b6000819050919050565b600081519050919050565b600060059050919050565b600060059050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b6000612b5882612c65565b9150612b6383612c65565b925082612b7357612b72612dcb565b5b828204905092915050565b6000612b8982612c65565b9150612b9483612c65565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612bcd57612bcc612d9c565b5b828202905092915050565b6000612be382612c65565b9150612bee83612c65565b925082821015612c0157612c00612d9c565b5b828203905092915050565b6000612c1782612c45565b9050919050565b60008115159050919050565b60008160010b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000612c8e82612ccb565b9050919050565b6000612ca082612ccb565b9050919050565b6000612cb282612ccb565b9050919050565b6000612cc482612ccb565b9050919050565b6000612cd682612cdd565b9050919050565b6000612ce882612c45565b9050919050565b60005b83811015612d0d578082015181840152602081019050612cf2565b83811115612d1c576000848401525b50505050565b612d2b82612e76565b810181811067ffffffffffffffff82111715612d4a57612d49612e29565b5b80604052505050565b6000612d5e82612c65565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d9157612d90612d9c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f302d303036000000000000000000000000000000000000000000000000000000600082015250565b7f78797a0000000000000000000000000000000000000000000000000000000000600082015250565b7f302d303035000000000000000000000000000000000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b612f3481612c0c565b8114612f3f57600080fd5b50565b612f4b81612c1e565b8114612f5657600080fd5b50565b612f6281612c2a565b8114612f6d57600080fd5b50565b612f7981612c37565b8114612f8457600080fd5b50565b612f9081612c65565b8114612f9b57600080fd5b50565b612fa781612c6f565b8114612fb257600080fd5b5056fea26469706673582212209df32300077b99e388d99765500fccbb3a064afa5f784cb67223d4a7c51b998264736f6c63430008070033";
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): UnicrowClaimInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnicrowClaim;
}
export {};