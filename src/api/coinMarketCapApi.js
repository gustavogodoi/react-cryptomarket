const getCoinListApi = () => {
  const urlApi = `https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=18`;
  return fetch(urlApi, {
    mode: "cors"
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {});
};

export { getCoinListApi };
