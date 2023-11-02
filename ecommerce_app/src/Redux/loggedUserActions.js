

export const loginUser = (payload) => ({
    payload:payload,
    type: 'LOGIN_USER',
});

export const loginAdmin = (payload) => ({
    payload:payload,
    type: 'LOGIN_ADMIN',
});

export const loginReset = () => ({
    type: 'RESET'
});