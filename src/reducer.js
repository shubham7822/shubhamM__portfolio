export const initialState = {
  toggle: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "MODE-CHANGE":
      return (initialState.toggle = action.item);
    default:
      return state;
  }
}

export default reducer;
