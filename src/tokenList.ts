import {TokenListItem} from '@layerzerolabs/ui-core';

import {TLOS_SYMBOL} from './config';

export const tokenList = createTokenList([
  // TLOS

  // qBit test
  ['qBit', 'qBit', '0x74A96f3113A0046Df3956f77d7A753025331f9Bd', 18, 'avalanche', null, 'qBit'],
  ['qBit', 'qBit', '0x8bF087Be99983A4FF928A94Ac302fD5f139e4D7d', 18, 'polygon', null, 'qBit'],
  ['qBit', 'qBit', '0xC05492B059571A185B2a90d377F3EA56E0D71B15', 18, 'base', null, 'qBit'],
  ['qBit', 'qBit', '0x529E43f03C426ba50dEc652496a9C84e617507Ca', 18, 'arbitrum', null, 'qBit'],
  ['qBit', 'qBit', '0xE967821f76D96d4d29f2c8e86E423C9D56B995f8', 18, 'optimism', null, 'qBit'],

  // WBNB
  // ['WBNB', 'WBNB', '0x26Ed0F16e777C94A6FE798F9E20298034930Bae8', 18, 'telos', 1, 'wbnb'],
  //['WBNB', 'WBNB', '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'bsc', 1, 'wbnb'],
]);

type TokenListItemTuple = [
  symbol: string,
  name: string,
  address: string | null,
  decimals: number,
  chainKey: string,
  coinMarketCapId: number | null,
  coinGeckoId?: string,
];

function createTokenList<T extends TokenListItemTuple>(
  items: T[],
): (TokenListItem & {coinMarketCapId?: number | string; coinGeckoId?: string})[] {
  return items.map(([symbol, name, address, decimals, chainKey, coinMarketCapId, coinGeckoId]) => ({
    symbol,
    chainKey,
    decimals,
    address,
    name,
    //
    price: {},
    coinMarketCapId: coinMarketCapId ?? undefined,
    coinGeckoId: coinGeckoId ?? undefined,
  }));
}
