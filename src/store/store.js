import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSageMiddleware from 'redux-saga';
import {saga as headerSagas} from '../common/header/store';
import {saga as homeSagas} from '../pages/home/store';
const saga = createSageMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(saga)
));

saga.run(headerSagas);
saga.run(homeSagas);

export default store;
