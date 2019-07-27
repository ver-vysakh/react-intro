export function saveToStore(user) {
    return {
        type: 'SAVE_USER',
        userDetails: user
    }
}

export function editTheStore(user) {
    return {
        type: 'EDIT_USER',
        userDetails: user
    }
}