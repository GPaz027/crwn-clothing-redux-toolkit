import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";

import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

/*
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';




const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
*/

// Si en middleware se pasa un array, se reemplazan los middlewares default por eso.
// Si se pasa una función, entonces los default se mantienen, pero también se agregan los personalizados.

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Apaga el middleware default de serializable
    }).concat(middleWares), // Obtiene los default activados y los une a los personalizados
});

//export const persistor = persistStore(store);
