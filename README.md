# Uniswap V3 Smart Contracts Monorepo

This repository contains the core smart contracts and periphery tools for Uniswap V3, including staking and swap router functionalities.

## Table of Contents

1\. [Overview](#overview)

2\. [Packages](#packages)

3\. [Installation](#installation)

4\. [Usage](#usage)

5\. [Testing](#testing)

6\. [Deployment](#deployment)

7\. [License](#license)

8\. [Contributing](#contributing)

9\. [Security](#security)

10\. [Additional Resources](#additional-resources)

## Overview

Uniswap V3 is an advanced decentralized exchange protocol that introduces concentrated liquidity and multiple fee tiers. This monorepo contains all the necessary components to interact with and build on top of Uniswap V3.

## Packages

### @uniswap/v3-core

The core smart contracts for Uniswap V3. These contracts define the fundamental logic for pools, swaps, and liquidity management.

Key features:

- Concentrated liquidity

- Multiple fee tiers

- Improved price oracle

For more details, see the [v3-core README](v3-core/README.md).

### @uniswap/v3-periphery

Periphery smart contracts for interacting with Uniswap V3. These contracts provide convenient ways to interact with the core contracts, including routing and position management.

Key features:

- Swap router

- NFT position manager

- Tick lens

For more details, see the [v3-periphery README](v3-periphery/README.md).

### @uniswap/v3-staker

The canonical staking contract for Uniswap V3. This package allows liquidity providers to stake their positions and earn rewards.

Key features:

- Stake Uniswap V3 positions

- Distribute rewards

- Incentivize liquidity provision

For more details, see the [v3-staker README](v3-staker/README.md).

### @uniswap/swap-router-contracts

Smart contracts for swapping on both Uniswap V2 and V3 protocols. This package provides a unified interface for executing swaps across both versions of Uniswap.

Key features:

- Multi-hop swaps

- V2 and V3 compatibility

- Gas optimization

For more details, see the [swap-router-contracts README](swap-router-contracts/README.md).

## Installation

To install all dependencies for the entire monorepo:

```bash

yarn install

```

## Usage

Each package can be used independently. Refer to the individual package READMEs for specific usage instructions.

For example, to use the v3-core contracts in your project:

```javascript

import { UniswapV3Factory } from '@uniswap/v3-core/contracts/UniswapV3Factory.sol';

```

## Testing

To run tests for all packages:

```bash

yarn test

```

To run tests for a specific package:

```bash

cd packages/<package-name>

yarn test

```

## Deployment

Deployment addresses for the main contracts can be found in the [v3-periphery/deploys.md](v3-periphery/deploys.md) file.

To deploy the contracts to a local testnet, you can use the provided scripts in each package. For example:

```bash

cd packages/v3-core

yarn compile

yarn deploy:local

```

## License

The licensing for this project is mixed:

- @uniswap/v3-core: BUSL-1.1 License

- @uniswap/v3-periphery: GPL-2.0 License

- @uniswap/v3-staker: GPL-3.0 License

- @uniswap/swap-router-contracts: GPL-2.0 License

Please see the individual LICENSE files in each package for more details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## Security

For information about the bug bounty program and security policy, please refer to:

```1:30:v3-periphery/bug-bounty.md

# Uniswap V3 Bug Bounty

## Overview

Starting on April 26th, 2021, the [uniswap-v3-periphery](https://github.com/Uniswap/uniswap-v3-periphery) repository is

subject to the Uniswap V3 Bug Bounty (the "Program") to incentivize responsible bug disclosure.

We are limiting the scope of the Program to critical and high severity bugs, and are offering a reward of up to $500,000. Happy hunting!

## Scope

The scope of the Program is limited to bugs that result in the loss of user funds.

The following are not within the scope of the Program:

- Any contract located under [contracts/test](./contracts/test) or [contracts/lens](./contracts/lens).

- Bugs in any third party contract or platform that interacts with Uniswap V3.

- Vulnerabilities already reported and/or discovered in contracts built by third parties on Uniswap V3.

- Any already-reported bugs.

Vulnerabilities contingent upon the occurrence of any of the following also are outside the scope of this Program:

- Frontend bugs

- DDOS attacks

- Spamming

- Phishing

- Automated tools (Github Actions, AWS, etc.)

- Compromise or misuse of third party systems or services

## Assumptions

```

## Additional Resources

- [Uniswap V3 Whitepaper](https://uniswap.org/whitepaper-v3.pdf)

- [Uniswap Documentation](https://docs.uniswap.org/)

- [Uniswap V3 Development Book](https://uniswapv3book.com/)

For any questions or support, please join the [Uniswap Discord](https://discord.gg/FCfyBSbCU5) or create an issue in this repository.
