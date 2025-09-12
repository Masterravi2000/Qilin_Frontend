// reduxStore/index.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { productsApi } from "./api/product/productsApi";
import { categoryApi } from "./api/filters/categoryApi";


// import slices
import productFormReducer from "./slices/productFormSlice";

// import apis
import { optionalQuestionsApi } from "./api/SellingFormQuestions/optionalQuestions";
import { writtenQuestionsApi } from "./api/SellingFormQuestions/writtenQuestions";

const rootReducer = combineReducers({
  productForm: productFormReducer, // add here
  [categoryApi.reducerPath]: categoryApi.reducer,

    // RTK Query reducers
  [optionalQuestionsApi.reducerPath]: optionalQuestionsApi.reducer,
  [writtenQuestionsApi.reducerPath]: writtenQuestionsApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
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
      // RTK Query middleware
      optionalQuestionsApi.middleware,
      writtenQuestionsApi.middleware,
      productsApi.middleware,
      categoryApi.middleware
    ),
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
