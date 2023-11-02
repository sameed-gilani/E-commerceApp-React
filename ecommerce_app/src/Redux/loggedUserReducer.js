

const initialState = {
    token: false,
    userID: 0,
    role: ''
};

export const loggedUserReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'RESET':
            return{
                ...state,
                token: false,
                userID: 0,
                role: '',
            }

        case 'LOGIN_USER':
            return{
                ...state,
                token: true,
                userID: action.payload,
                role: 'User',
            }

        case 'LOGIN_ADMIN':
            return{
                ...state,
                token: true,
                userID: action.payload,
                role: 'Admin',
            }
        default:
            return state;
    }
};
