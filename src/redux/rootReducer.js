import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import articleReducer from "./article/articleReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  article: articleReducer,
  user: userReducer,
});

export default rootReducer;
