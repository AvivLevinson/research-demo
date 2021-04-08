const TYPES = {
  SET_INFO: "SET_INFO",
};


const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_RESULT:
      return [ ...state, action.payload];

    default:
      console.log('defualt value');
      return state;
  }
};
export default reducer;
