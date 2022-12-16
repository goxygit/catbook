let initialState = {
  
    textValue: "kurwa",
  
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-HEADER-INPUT-TEXT":
      state.textValue = action.text;
      return state;
    default:
      return state;
  }
};
export const updateHeaderInputText = (text) => {
  return { type: "UPDATE-HEADER-INPUT-TEXT", text: text };
};
export default headerReducer;
