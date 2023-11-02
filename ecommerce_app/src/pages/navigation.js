import {Link, Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginReset} from "../Redux/loggedUserActions";
import {resetCart, setCart} from "../Redux/cartActions";

export default function NavigationComp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loggedInCheck = useSelector(state => state.loggedUser.token)
    const loggedInUserID = useSelector(state => state.loggedUser.userID)
    const loggedInRole = useSelector(state => state.loggedUser.role)

    const currentUserCart = useSelector((state) => state.cart.userCart)
    const currentUserCartID = useSelector((state) => state.cart.userID)


    const userDatabase = JSON.parse(localStorage.getItem('userDB'))
    let [matchedUser] = userDatabase.filter(user =>
        user.userID === loggedInUserID
    )


    if(loggedInCheck === true){


        return (
            <>

                <nav style={{margin: 10}}>

                    <Link to="/Home" style={{padding: 5}} onClick={() => {

                    }}>
                        Home
                    </Link>

                    <Link to="/Cart" style={{padding: 5}} onClick={() => {

                    }}>
                        Cart
                    </Link>


                    <button onClick={() => {


                        const cartDatabase = JSON.parse(localStorage.getItem('cartDB'))

                        let [matchedCart] = cartDatabase.filter(cart =>
                            cart.userID === currentUserCartID
                        )

                        matchedCart.cartContents = currentUserCart
                        localStorage.setItem('cartDB', JSON.stringify(cartDatabase))
                        dispatch(resetCart())
                        dispatch(loginReset())


                        navigate('/Login')


                    }}> Log out
                    </button>



                    <>
                    <p>{loggedInRole} : {matchedUser.name}</p>
                    </>

                </nav>

                <Outlet/>

            </>
        )

    }else{

        return (
            <>

                <nav style={{margin: 10}}>

                    <Link to="/SignUp" style={{padding: 5}} onClick={() => {

                    }}>
                        Sign Up
                    </Link>

                    <Link to="/Login" style={{padding: 5}} onClick={() => {

                    }}>
                        Login
                    </Link>

                    <Link to="/Home" style={{padding: 5}} onClick={() => {

                    }}>
                        Home
                    </Link>

                    <Link to="/Cart" style={{padding: 5}} onClick={() => {

                    }}>
                        Cart
                    </Link>



                </nav>

                <Outlet/>

            </>
        )

    }

}