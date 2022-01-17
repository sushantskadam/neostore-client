const initialState = { count: 0, index: null };

function reducer(state = initialState, actions) {
  switch (actions.type) {
    case "count":
      return { count: actions.payload };

    default:
      return state;
  }
}
export default reducer;
