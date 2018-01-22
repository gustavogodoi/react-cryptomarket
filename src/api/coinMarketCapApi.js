const getCoinListApi = () => {
  return fetch('/api/list', {
    mode: 'cors'
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {});
};

const getCoinOverviewApi = symbol => {
  console.log(symbol);
  return fetch(`/api/coin/${symbol}`, {
    mode: 'cors'
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('getCoinOverviewApi', error);
    });
};

export { getCoinListApi, getCoinOverviewApi };
