import {ChainId} from '@layerzerolabs/lz-sdk';
import {ChainStage} from '@layerzerolabs/lz-sdk';
import {AptosBridgeConfig} from '@layerzerolabs/ui-bridge-aptos';
import {getNativeCurrency, Token} from '@layerzerolabs/ui-core';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const QBIT_ADDRESS = {
  [ChainId.AVALANCHE]: '0x74A96f3113A0046Df3956f77d7A753025331f9Bd',
  [ChainId.POLYGON]: '0x8bF087Be99983A4FF928A94Ac302fD5f139e4D7d',
  [ChainId.BASE]: '0xC05492B059571A185B2a90d377F3EA56E0D71B15',
  [ChainId.ARBITRUM]: '0x529E43f03C426ba50dEc652496a9C84e617507Ca',
  [ChainId.OPTIMISM]: '0xfEC6F0cDB905a0708a224B4e286377B16eFFFd69',
} as const;

const USDC_ADDRESS = {
  [ChainId.ETHEREUM]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [ChainId.AVALANCHE]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  [ChainId.POLYGON]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [ChainId.ARBITRUM]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  [ChainId.OPTIMISM]: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
} as const;

const USDT_ADDRESS = {
  [ChainId.ETHEREUM]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  [ChainId.BSC]: '0x55d398326f99059fF775485246999027B3197955',
  [ChainId.AVALANCHE]: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
  [ChainId.POLYGON]: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
} as const;

const WETH_ADDRESS = {
  [ChainId.ETHEREUM]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  [ChainId.ARBITRUM]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  [ChainId.OPTIMISM]: '0x4200000000000000000000000000000000000006',
} as const;

const USDD_ADDRESS = {
  [ChainId.ETHEREUM]: '0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6',
  [ChainId.BSC]: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
} as const;

export const BRIDGE: AptosBridgeConfig = {
  tokens: [
    // ETH
    getNativeCurrency(ChainId.ETHEREUM),
    getNativeCurrency(ChainId.OPTIMISM),
    getNativeCurrency(ChainId.ARBITRUM),

    // WETH
    new Token(ChainId.ETHEREUM, WETH_ADDRESS[ChainId.ETHEREUM], 18, 'WETH', 'Wrapped Ether'),
    new Token(ChainId.ARBITRUM, WETH_ADDRESS[ChainId.ARBITRUM], 18, 'WETH', 'Wrapped Ether'),
    new Token(ChainId.OPTIMISM, WETH_ADDRESS[ChainId.OPTIMISM], 18, 'WETH', 'Wrapped Ether'),

    // USDC
    new Token(ChainId.ETHEREUM, USDC_ADDRESS[ChainId.ETHEREUM], 6, 'USDC', 'USD Coin'),
    new Token(ChainId.AVALANCHE, USDC_ADDRESS[ChainId.AVALANCHE], 6, 'USDC', 'USD Coin'),
    new Token(ChainId.POLYGON, USDC_ADDRESS[ChainId.POLYGON], 6, 'USDC', 'USD Coin'),
    new Token(ChainId.ARBITRUM, USDC_ADDRESS[ChainId.ARBITRUM], 6, 'USDC', 'USD Coin'),
    new Token(ChainId.OPTIMISM, USDC_ADDRESS[ChainId.OPTIMISM], 6, 'USDC', 'USD Coin'),

    // qBit Tokens
    new Token(ChainId.AVALANCHE, QBIT_ADDRESS[ChainId.AVALANCHE], 18, 'qBit', 'Quantum Bit'),
    new Token(ChainId.POLYGON, QBIT_ADDRESS[ChainId.POLYGON], 18, 'qBit', 'Quantum Bit'),
    new Token(ChainId.BASE, QBIT_ADDRESS[ChainId.BASE], 18, 'Test', 'Quantum Bit'),
    new Token(ChainId.ARBITRUM, QBIT_ADDRESS[ChainId.ARBITRUM], 18, 'qBit', 'Quantum Bit'),
    new Token(ChainId.OPTIMISM, QBIT_ADDRESS[ChainId.OPTIMISM], 18, 'Test', 'Quantum Bit'),

    // USDT
    new Token(ChainId.ETHEREUM, USDT_ADDRESS[ChainId.ETHEREUM], 6, 'USDT', 'USD Tether'),
    new Token(ChainId.BSC, USDT_ADDRESS[ChainId.BSC], 18, 'USDT', 'USD Tether'),
    new Token(ChainId.AVALANCHE, USDT_ADDRESS[ChainId.AVALANCHE], 6, 'USDT', 'USD Tether'),
    new Token(ChainId.POLYGON, USDT_ADDRESS[ChainId.POLYGON], 6, 'USDT', 'USD Tether'),

    // USDD
    new Token(ChainId.ETHEREUM, USDD_ADDRESS[ChainId.ETHEREUM], 18, 'USDD', 'Decentralized USD'),
    new Token(ChainId.BSC, USDD_ADDRESS[ChainId.BSC], 18, 'USDD', 'Decentralized USD'),
  ],
};
