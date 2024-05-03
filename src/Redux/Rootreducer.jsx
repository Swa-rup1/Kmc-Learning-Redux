//rootreducer.js

// reducer is the mediator btn slices and storage
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./Slices/metaReducer";
import Addtocart from "./Slices/Addtocart";
// import {auth} from "../Services/LoginAction";
import { authSlice } from "../Redux/Slices/LoginSlices";
import allProductData from "./Slices/Allproduct";
import carousalData from "./Slices/CarousalSlice";
import userData from "./Slices/UserlistSlice";
import searchProduct from "./Slices/searchProduct";
import sort from "./Slices/sort";

const resetSlices = [
  "addtocard",
  "authinfo",
  "allproduct",
  "carousalslice",
  "alluser",
  "auth",
  "searchProduct",
  "sort",
]; //name from addtocard

const rootreducer = createResetMetaReducer(
  "Global RESET",
  resetSlices
)(
  combineReducers({
    addtocard: Addtocart, //back ma function ko name
    authinfo: authSlice,
    allproduct: allProductData,
    carousalslice: carousalData,
    alluser: userData,
    searchProduct: searchProduct,
    sort: sort,
  })
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: resetSlices,
};
export default persistReducer(persistConfig, rootreducer);
