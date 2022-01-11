import articleActionTypes from "./articleActionTypes.js";

const initState = {
  articles: [
    { id: 1, title: "aaa" },
    { id: 2, title: "bbb" },
    { id: 3, title: "ccc" },
    { id: 4, title: "ddd" },
  ],
};

const articleReducer = (state = initState, action) => {
  if (action.type === articleActionTypes.DELETE_ARTICLE) {
    return {
      ...state,
      articles: state.articles.filter((c) => c.id != action.id),
    };
  }
  if (action.type === articleActionTypes.ADD_ARTICLE) {
    return {
      ...state,
      articles: [...state.articles, action.article],
    };
  }
  return state;
};

export default articleReducer;
