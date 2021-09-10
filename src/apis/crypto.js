const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

export const tester = async () => {
  var coins = await CoinGeckoClient.coins.all();
  coins = coins.data;
  return coins;
};
