const HN_URL = "https://hn.algolia.com/api/v1/";

const getListApi = (lastest = false) => {
  const urlApi = lastest
    ? `${HN_URL}search_by_date?tags=story`
    : `${HN_URL}search?tags=story`;
  return fetch(urlApi)
    .then(response => response.json())
    .catch(error => {});
};

export { getListApi };
