import {createStore, applyMiddleware} from 'redux';

import { persistStore } from 'redux-persist';

import {logger} from 'redux-logger';

import rootReducer from './root.reduser';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)
