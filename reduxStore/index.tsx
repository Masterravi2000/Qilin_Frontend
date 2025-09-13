// reduxStore/index.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import slices
import productFormReducer from "./slices/productFormSlice";
// import apis
import { productsApi } from "./api/product/productsApi";
import { categoryApi } from "./api/filters/categoryApi";
import { optionalQuestionsApi } from "./api/SellingFormQuestions/optionalQuestions";
import { writtenQuestionsApi } from "./api/SellingFormQuestions/writtenQuestions";
import { sellingFormApi } from "./api/SellingFormQuestions/sellingFormAutoFill";


const rootReducer = combineReducers({
  productForm: productFormReducer, // add here
  [categoryApi.reducerPath]: categoryApi.reducer,
  [optionalQuestionsApi.reducerPath]: optionalQuestionsApi.reducer,
  [writtenQuestionsApi.reducerPath]: writtenQuestionsApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [sellingFormApi.reducerPath]: sellingFormApi.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["productForm"], // add slices you want persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }).concat(
      optionalQuestionsApi.middleware,
      writtenQuestionsApi.middleware,
      productsApi.middleware,
      categoryApi.middleware,
      sellingFormApi.middleware
    ),
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
