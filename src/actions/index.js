export const LOAD_LIST_REQUEST = "LOAD_LIST_REQUEST";
export const LOAD_LIST_SUCCESS = "LOAD_LIST_SUCCESS";

export const loadListRequest = param => ({
  type: LOAD_LIST_REQUEST,
  param
});

export const loadListSuccess = result => ({
  type: LOAD_LIST_SUCCESS,
  result
});
