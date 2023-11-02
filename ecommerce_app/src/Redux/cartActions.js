
export const clearCart = (payload) => ({
    payload:payload,
    type: 'CLEAR_CART',
});


export const addToCart = (payload) => ({
    payload:payload,
    type: 'ADD_TO_CART',
});

export const resetCart = (payload) => ({
    payload:payload,
    type: 'RESET'
});

export const setCart = (payload) => ({
    payload:payload,
    type: 'SET_CART'
});