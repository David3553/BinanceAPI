const axios = require('axios');

const symbol = 'BTCUSDT'; // kannst du ändern zu z. B. ETHUSDT

axios.get(`https://fapi.binance.com/fapi/v1/premiumIndex?symbol=${symbol}`)
  .then(res => {
    const data = res.data;
    const rate = parseFloat(data.lastFundingRate) * 100;
    console.log(`Funding Rate für ${symbol}: ${rate.toFixed(4)} %`);
  })
  .catch(err => {
    console.error('Fehler beim Abruf:', err.message);
  });
