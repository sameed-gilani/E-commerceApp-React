import {Link, Outlet} from "react-router-dom";


export default function NavigationComp() {
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

                <Link to="/" style={{padding: 5}} onClick={() => {

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