/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUnicrowStakingRewards,
  IUnicrowStakingRewardsInterface,
} from "../../../contracts/interfaces/IUnicrowStakingRewards";

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
] as const;

export class IUnicrowStakingRewards__factory {
  static readonly abi = _abi;
  static createInterface(): IUnicrowStakingRewardsInterface {
    return new Interface(_abi) as IUnicrowStakingRewardsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUnicrowStakingRewards {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IUnicrowStakingRewards;
  }
}
