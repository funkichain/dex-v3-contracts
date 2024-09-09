import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-contract-sizer'
import { SolcUserConfig } from 'hardhat/types'
import 'solidity-coverage'

import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/types";

dotenv.config();

const DEFAULT_COMPILER_SETTINGS: SolcUserConfig = {
  version: '0.7.6',
  settings: {
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

if (process.env.RUN_COVERAGE == '1') {
  /**
   * Updates the default compiler settings when running coverage.
   *
   * See https://github.com/sc-forks/solidity-coverage/issues/417#issuecomment-730526466
   */
  console.info('Using coverage compiler settings')
  DEFAULT_COMPILER_SETTINGS.settings.details = {
    yul: true,
    yulDetails: {
      stackAllocation: true,
    },
  }
}

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    funkiSepolia: {
      url: `https://funki-testnet.alt.technology`,
    },
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: true,
    runOnCompile: false,
  },
}

if (process.env.ETHERSCAN_API_KEY) {
  config.etherscan = {
      customChains: [
        {
          network: "optimismSepolia",
          chainId: 11155420,
          urls: {
            apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
            browserURL: "https://sepolia-optimism.etherscan.io/",
          },
        },
        {
          network: "funkiSepolia",
          chainId: 3397901,
          urls: {
            apiURL: "https://sepolia-sandbox.funkichain.com/api",
            browserURL: "https://sepolia-sandbox.funkichain.com/",
          },
        },
      ],
      apiKey: {
        mainnet: process.env.ETHERSCAN_API_KEY as string,
        funkiSepolia: process.env.ETHERSCAN_API_KEY as string,
        sepolia: process.env.ETHERSCAN_API_KEY as string,
        polygonMumbai: process.env.POLYGONSCAN_API_KEY as string,
        polygon: process.env.POLYGONSCAN_API_KEY as string,
        optimismSepolia: process.env.OPTSCAN_API_KEY as string,
      },
  }
}

export default config
