/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, Interface } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "collectFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IUnicrowStakingRewards__factory {
    static abi = _abi;
    static createInterface() {
        return new Interface(_abi);
    }
    static connect(address, runner) {
        return new Contract(address, _abi, runner);
    }
}
export { IUnicrowStakingRewards__factory };
//# sourceMappingURL=IUnicrowStakingRewards__factory.js.map