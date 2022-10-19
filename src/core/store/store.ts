import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import comicsReducer from '../reducers/comics/comicsReducer'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from '../sagas/rootSaga';

const sageMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sageMiddleware];
const store = configureStore({
  reducer: {
    comics: comicsReducer,
  },
  middleware
})

sageMiddleware.run(rootSaga);

export default store;