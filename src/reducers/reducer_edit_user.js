export default function (state = [], action) {
    switch (action.type) {
        case 'EDIT_USER':
            console.log('state: ', state, 'user details: ', action.userDetails);
            let newState = [
                ...state
            ];
            console.log('newState', newState);
            return newState;

        default: return state;
    }
}