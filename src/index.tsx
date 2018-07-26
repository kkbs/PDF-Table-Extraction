import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import { mainReducer } from './MainReducer/mainReducer';
import App from './App/Container/app';
import fileRootSaga from './HelloWorld/Saga/fileRootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fileRootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
