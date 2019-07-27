import { combineReducers } from 'redux';

import SaveReducer from './reducer_save_user';
import editReducer from './reducer_edit_user';


const rootReducer = combineReducers({
    ListOfAllUsers: SaveReducer,
    ListOfAllUsers: editReducer
});

export default rootReducer;