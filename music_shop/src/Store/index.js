import {configureStore} from '@reduxjs/toolkit';
import reducers from '../Reducers';
import rootSaga from '../Sagas'
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension';


let sagaMiddleware=createSagaMiddleware()
let store=configureStore({reducer:reducers,middleware:[sagaMiddleware],logger,devTool:composeWithDevTools})

sagaMiddleware.run(rootSaga);
export default store;