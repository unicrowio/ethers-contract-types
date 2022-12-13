"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleEndedQueue__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "Empty",
        type: "error",
    },
    {
        inputs: [],
        name: "OutOfBounds",
        type: "error",
    },
];
const _bytecode = "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c6b3f83fd917f6a6b8e39920469ca789afb9a7c5ad83dd6638622afe8965700264736f6c63430008070033";
const isSuperArgs = (xs) => xs.length > 1;
class DoubleEndedQueue__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "DoubleEndedQueue";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.DoubleEndedQueue__factory = DoubleEndedQueue__factory;
DoubleEndedQueue__factory.bytecode = _bytecode;
DoubleEndedQueue__factory.abi = _abi;