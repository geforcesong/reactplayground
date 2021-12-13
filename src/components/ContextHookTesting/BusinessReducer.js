const BusinessReducer = (state, action) => {
  if (action.type === "ADD") {
    return state + action.payload;
  } else if (action.type === "SUB") {
    return state - action.payload;
  }
  return state;
};

export { BusinessReducer };
