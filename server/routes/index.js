const express = require('express');
const router = express.Router();
const axios = require('axios');
let referenceList = null;

const generateReferenceList = () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (referenceList) {
        resolve(referenceList);
      }
      const response = await axios.get(
        `https://min-api.cryptocompare.com/data/all/coinlist`
      );
      const { data } = response;
      referenceList = data;
      resolve(data);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

router.get('/list', async (req, res, next) => {
  const response = await axios.get(
    `https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=30`
  );
  const { data } = response;
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

router.get('/coin/:symbol', async (req, res, next) => {
  const symbol = req.params.symbol;

  try {
    const reference = await generateReferenceList();
    const responsePartOne = await axios.get(
      `https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${symbol}&tsym=USD`
    );
    const dataPartOne = responsePartOne.data;
    const id = reference.Data[symbol].Id;
    if (!id) {
      console.error(
        'Issue with finding id in reference list. Missing or List is null'
      );
    }

    const responsePartTwo = await axios.get(
      `https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${id}`
    );
    const dataPartTwo = responsePartTwo.data;
    const fullResponse = {
      Data: {
        ...dataPartOne.Data,
        ...dataPartTwo.Data,
        symbol
      }
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(fullResponse);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
