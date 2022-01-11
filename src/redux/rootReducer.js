import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import articleReducer from "./article/articleReducer";

const rootReducer =  combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    article: articleReducer
})

export default rootReducer;