import articleActionTypes from "./articleActionTypes.js";

export const addArticle = (post) => {
  return {
    type: articleActionTypes.ADD_ARTICLE,
    article: post,
  };
};

export const deleteArticle = (id) => {
  return {
    type: articleActionTypes.DELETE_ARTICLE,
    id: id,
  };
};
