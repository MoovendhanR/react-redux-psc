import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import ProductReducer from "./products/reducer"
import { authReducer } from './auth/reducer';
const rootReducer = combineReducers({
    ecommerceData:ProductReducer,
  authReducer
});
 
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ ||compose;

export const store =legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);