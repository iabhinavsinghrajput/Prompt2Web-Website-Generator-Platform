// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from "./userSlice"


// export const store = configureStore({
//   reducer: {
//     user:userSlice
//   },
// })

// export default store

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

import userSlice from "./userSlice"

// 1. Combine your reducers
const rootReducer = combineReducers({
  user:userSlice,
});

// 2. Set up persistence configuration
const persistConfig = {
  key: 'Prompt2Web',
  storage:storage.default,
  // whitelist: ['auth'] // Optional: only persist these slices
  // blacklist: ['ui']   // Optional: do not persist these slices
};

// 3. Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore internal redux-persist actions to avoid console errors
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Create the persistor
export const persistor = persistStore(store);
