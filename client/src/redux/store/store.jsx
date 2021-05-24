import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from '../reducers/userReducer'


const middlewares = [thunk];
const reducer = combineReducers({
  userLogin: userReducer,
});

const userAuthFromStorage = localStorage.getItem('userData')
  ? JSON.stringify(localStorage.getItem('userData')) : null;

const initialState = {
  userDetails: { userInfo: userAuthFromStorage },
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;