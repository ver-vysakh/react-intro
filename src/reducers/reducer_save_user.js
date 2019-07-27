export default function (state = [], action) {
    switch (action.type) {
        case 'SAVE_USER':
            console.log('state: ', state, 'user details: ', action.userDetails);
            let newState = [
                ...state,
                Object.assign({}, action.userDetails)
            ];
            console.log('newState', newState);
            return newState;
    }
    return state;
}