import {createStore,combineReducers,applyMiddleware} from'redux';
import appReducer from './reducers/appReducer';
import thunk from 'redux-thunk';
import userInfoReducer from './reducers/userInfoReducer';


const rootReducer=combineReducers({
   
    users:appReducer,
    infos:userInfoReducer,

})
const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;