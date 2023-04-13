### TypeScript typings for Unicrow's smart contracts

The types are generated using [Type Chain](https://github.com/dethcrypto/TypeChain).

After every change in the smart contracts, the types are generated again and updated here.

## How to use

Install:

with yarn:
```
yarn add @unicrowio/ethers-types
```

with npm:
```
npm install @unicrowio/ethers-types
```

Import in your code:

```
import { ERC20__factory, Unicrow__factory } from '@unicrowio/ethers-types'

const provider = await getWeb3Provider()

const providerSigner = provider.getSigner()

const smartContract = Unicrow__factory.connect(
  UNICROW_ADDRESS,
  providerSigner
);

const token = ERC20__factory.connect(tokenAddress, providerSigner);
```
