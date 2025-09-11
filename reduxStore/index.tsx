// reduxStore/index.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


// import slices
import productFormReducer from "./slices/productFormSlice";

// import apis
import { optionalQuestionsApi } from "./api/SellingFormQuestions/optionalQuestions";
import { writtenQuestionsApi } from "./api/SellingFormQuestions/writtenQuestions";

const rootReducer = combineReducers({
  productForm: productFormReducer, // add here

    // RTK Query reducers
  [optionalQuestionsApi.reducerPath]: optionalQuestionsApi.reducer,
  [writtenQuestionsApi.reducerPath]: writtenQuestionsApi.reducer,
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
      writtenQuestionsApi.middleware
    ),
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
