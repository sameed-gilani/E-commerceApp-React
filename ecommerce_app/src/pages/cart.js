import {addToCart, clearCart} from "../Redux/cartActions";
import {useDispatch, useSelector} from "react-redux";
import clearCartAndAddToStock from "../helpers/emptyCart";


export default function CartPage() {

    let currentUserCart = useSelector((state)=> state.cart.userCart)
    const dispatch = useDispatch()


    let totalBill = 0


    currentUserCart.forEach(product =>
        totalBill += product.amount * product.price
    )


    const cartViews = []

    currentUserCart.map((product) =>
        cartViews.push(

            <div key={product.name}>

                <div>

                    Name: {product.name}
                    <br/>
                    Quantity: {product.amount}
                    <br/>
                    Bill: {Number(product.amount) * Number(product.price)}
                    <br/>
                    <button onClick={()=>{

                    }}>+</button>

                    <button onClick={()=>{

                    }}>-</button>
                </div>

                <br/>
            </div>
        )
    );


    return (
        <>
            <h1>Cart Page</h1>
            {cartViews}

            <br/>

            <p> Total Bill: {totalBill} </p>

            <button onClick={() => {
                clearCartAndAddToStock(currentUserCart)
                dispatch(clearCart())
            }}> Clear Cart
            </button>


            <button onClick={() => {
                dispatch(clearCart())

                alert("Order Placed. Checkout!")
            }}>
                checkout
            </button>


        </>
    );
}