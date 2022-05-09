import globalModalActionTypes from "./globalModalActionTypes";

const initialState = {
  isOpen: null,
  globalModalRef: null,
  title: "",
  description: "",
  component: null
};

const globalModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalModalActionTypes.OPEN_GLOBAL_MODAL:
      return {
        ...state,
        isOpen: true,
        ...action.payload
      };
    case globalModalActionTypes.CLOSE_GLOBAL_MODAL:
      return {
        ...state,
        isOpen: false,
      };


    default:
      return state;
  }
};

export default globalModalReducer;
