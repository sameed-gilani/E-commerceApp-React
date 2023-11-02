import {Navigate} from "react-router-dom";
import CartPage from "./cart";
import {useSelector} from "react-redux";

export default function ProtectedRouteToCart() {


    const currentUserToken = useSelector((state) => state.loggedUser.token)
    const currentUserRole = useSelector((state) => state.loggedUser.role)

    console.log(currentUserToken)
    console.log(currentUserRole)


    if (currentUserToken === true) {

        if (currentUserRole === 'Admin') {
            alert("Login as user to access cart")
            return (
                <Navigate to={'/Admin'} replace={true}/>
            );
        } else {
            return (
                <CartPage/>
            );
        }

    } else {
        alert("Please login to access cart")
        return (
            <Navigate to={'/Login'} replace={true}/>
        );
    }

}

