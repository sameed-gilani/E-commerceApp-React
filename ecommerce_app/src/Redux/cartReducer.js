
const initialState = {
    userID: 0,
    UserCart: []
}


export const cartReducer = (state = initialState, action) => {

    switch (action.type){
        case 'ADD_TO_CART':
            const productDatabase = JSON.parse(localStorage.getItem('productDB'))
            const productID = action.payload.productID
            const amount = action.payload.amount
            const currentUserCart = state.UserCart


            let [matchedProduct] = productDatabase.filter(product =>
                product.productID === productID
            );
            currentUserCart.push({productID: matchedProduct.productID, amount: amount, name: matchedProduct.name, price:matchedProduct.price})

            matchedProduct.stock -= amount
            localStorage.setItem('productDB', JSON.stringify(productDatabase))

            alert("Item added to cart!")

            return{
                ...state,
                userCart: currentUserCart

            }

        case 'RESET':
            return{
                ...state,
                userID: 0,
                userCart: []
            }

        case 'CLEAR_CART':
            return{
                ...state,
                userCart: []

            }

        case 'SET_CART':
            return{
                ...state,
                userID: action.payload.userID,
                userCart: action.payload.cartContents
            }

        default:
            return state;

    }




}