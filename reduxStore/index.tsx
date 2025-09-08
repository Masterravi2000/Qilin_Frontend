// reduxStore/index.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import your slices
// import firstTimeUseReducer from "./slices/firstTimeUseSlice";

const dummyReducer = (state = {}, action: any) => state;

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [], // add slices you want persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    })
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
