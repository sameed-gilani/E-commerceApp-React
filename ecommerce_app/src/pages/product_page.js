import {useParams} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../Redux/cartActions";


export default function ProductPage() {
    const productDatabase = JSON.parse(localStorage.getItem('productDB'))

    const currentUserToken = useSelector((state) => state.loggedUser.token)
    const currentUserRole = useSelector((state) => state.loggedUser.role)

    let currentUserCart = useSelector((state) => state.cart.userCart )
    const dispatch = useDispatch()


    const {id} = useParams()
    let [cartCounter, setCartCounter] = useState(0)


    let [product] = productDatabase.filter(product =>
        Number(id) === product.productID
    );

    let [currentStock, setCurrentStock] = useState(product.stock)




    return (
        <>
            <div>
                <h1>{product.name}</h1>

                <img src={product.imgURL} alt={product.name}/>

                <p>Available Stock: {currentStock}</p>

                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
            </div>

            <button onClick={() => {
                if (cartCounter < product.stock) {
                    setCartCounter(cartCounter += 1)
                    setCurrentStock( currentStock -= 1)
                }

            }}> +
            </button>

            <p>{cartCounter}</p>

            <button onClick={() => {
                if (cartCounter > 0) {
                    setCartCounter(cartCounter -= 1)
                    setCurrentStock( currentStock += 1)

                }
            }}> -
            </button>
            <br/>
            <br/>

            <button onClick={() => {
                if (cartCounter === 0) {
                    alert("Please select more then 0")

                } else if (currentUserToken !== false && currentUserRole === 'User') {
                    dispatch(addToCart({productID: product.productID, amount:cartCounter}))
                    setCartCounter(0)

                } else {
                    alert("Please Login as a user to add to cart")
                }


            }}> Add to cart
            </button>


        </>
    );
}