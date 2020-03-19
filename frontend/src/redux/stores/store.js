import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import fastStartReducer from '../reducers';
import { promiseMiddleware } from '../middleware/simple_promise';
import sagas from '../sagas';

const appEnv = process.env.REACT_APP_FASTSTART_ENV;

const sagaMiddleware = createSagaMiddleware();
const middleware     = [sagaMiddleware, thunk, promiseMiddleware()];

let store;

if (appEnv === 'development' || appEnv === 'test') {
    const logger = createLogger();
    middleware.push(logger);
    store = createStore(fastStartReducer, composeWithDevTools(applyMiddleware(...middleware)));
} else {
    store = createStore(fastStartReducer, applyMiddleware(...middleware));
}

sagaMiddleware.run(sagas);

export default store;
