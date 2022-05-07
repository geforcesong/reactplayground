import globalModalActionTypes from "./globalModalActionTypes";

export const openGlobalModal = () => {
  return {
    type: globalModalActionTypes.OPEN_GLOBAL_MODAL,
    payload: {
      isOpen: true,
    },
  };
};

export const closeGlobalModal = () => {
  return {
    type: globalModalActionTypes.CLOSE_GLOBAL_MODAL,
    payload: false
  };
};

export const setGlobalModalRef = (ref) => {
  return {
    type: globalModalActionTypes.SET_GLOBAL_MODAL_REF,
    payload: ref
  };
};

export const setGlobalModalData = (data) => {
    return {
      type: globalModalActionTypes.SET_MODAL_DATA,
      payload: data
    };
  };
  
