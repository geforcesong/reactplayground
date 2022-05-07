import globalModalActionTypes from "./globalModalActionTypes";

const initialState = {
  isOpen: false,
  globalModalRef: null,
  title: "",
  description: "",
};

const globalModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalModalActionTypes.OPEN_GLOBAL_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case globalModalActionTypes.CLOSE_GLOBAL_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    case globalModalActionTypes.SET_GLOBAL_MODAL_REF:
      return {
        ...state,
        globalModalRef: action.payload,
      };

    case globalModalActionTypes.SET_MODAL_DATA:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
      };

    default:
      return state;
  }
};

export default globalModalReducer;
