const getCoinListApi = () => {
  //const crossorigin = ""; //"https://cors-anywhere.herokuapp.com/";
  const urlApi = `https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10`;
  return fetch(urlApi, {
    mode: "cors"
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {});
};

export { getCoinListApi };
