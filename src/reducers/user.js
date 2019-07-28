// import cloneDeep from 'lodash/cloneDeep';

// const initialState = {
//     listofUsers : [],
//     toEdit: {},
// };

export default function (state = [], action) {
    switch (action.type) {
        case 'SAVE_USER': {

            console.log('state: ', state, 'user details: ', action.userDetails);
            let newState = [
                ...state,
                Object.assign({}, action.userDetails)
            ];
            console.log('newState', newState);
            return newState;
        }
        case 'EDIT_USER': {

            console.log('state: ', state, 'user details: ', action.userDetails);
            let newState = [
                ...state
            ];
            console.log('newState', newState);
            return newState;
        }

        // case 'RESET_USER': {
        //     return cloneDeep(initialState);
        // }
        default: return state;
    }
}