import globalModalActionTypes from "./globalModalActionTypes";

export const openGlobalModal = (data) => {
  return {
    type: globalModalActionTypes.OPEN_GLOBAL_MODAL,
    payload: {
      isOpen: true,
      ...data,
    },
  };
};

export const closeGlobalModal = () => {
  return {
    type: globalModalActionTypes.CLOSE_GLOBAL_MODAL,
    payload: false,
  };
};
