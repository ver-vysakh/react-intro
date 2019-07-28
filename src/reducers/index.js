import { combineReducers } from 'redux';

import userReducer from './user';
import editReducer from './reducer_edit_user';


const rootReducer = combineReducers({
    users: userReducer,
    // ListOfAllUsers: editReducer
});

export default rootReducer;