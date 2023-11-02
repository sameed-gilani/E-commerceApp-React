
import {combineReducers, createStore} from 'redux';
import {loggedUserReducer} from "./loggedUserReducer";
import {cartReducer} from "./cartReducer";


const rootReducer = combineReducers({
    loggedUser: loggedUserReducer,
    cart: cartReducer,
    counter: counterReducer,
});


const store = createStore(rootReducer);


export default store;