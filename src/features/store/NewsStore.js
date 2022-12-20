import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { newsReducer } from "../reducer/newsReducer";
import userReducer from "../reducer/userReducer";
import { commentsReducer } from "../reducer/commentsReducer";
import { newsCategoriesFindByid } from "../reducer/categoriesReducer";

const store = createStore(
  combineReducers({
    newsReducer,
    userReducer,
    commentsReducer,
    newsCategoriesFindByid,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
