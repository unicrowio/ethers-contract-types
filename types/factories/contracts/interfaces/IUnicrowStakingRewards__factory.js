"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUnicrowStakingRewards__factory = void 0;
const ethers_1 = require("ethers");
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
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IUnicrowStakingRewards__factory = IUnicrowStakingRewards__factory;
//# sourceMappingURL=IUnicrowStakingRewards__factory.js.map