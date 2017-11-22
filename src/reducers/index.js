import * as actions from "../actions";

const initialState = {
  list: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_LIST_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.LOAD_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        list: action.result
      });
    default:
      return state;
  }
};

export default reducer;
