const axios = require('axios');

axios.get('https://api.binance.com/api/v3/time')
  .then(res => {
    console.log('Binance API erreichbar:', res.data);
  })
  .catch(err => {
    console.error('Fehler:', err.message);
  });
