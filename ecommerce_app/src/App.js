import './App.css';
import {Route, Routes} from "react-router-dom";

import NavigationComp from "./pages/navigation";
import HomePage from "./pages/home_page";
import SignupPage from "./pages/signup_page";
import LoginPage from "./pages/login_page";
import ProtectedRouteToCart from "./pages/protected_route_login";
import ProductPage from "./pages/product_page";
import AdminProductPage from "./pages/adminProductInput";

function App() {


    // Database to store user details
    const databaseUsers = [
        {
            userID: 1,
            name: "sameed",
            email: "sameed@email.com",
            password: "1234",
            address: 'ABC',
            phoneNumber: 123,
            role: 'Admin'
        },
        {
            userID: 2,
            name: "abc",
            email: "abc@email.com",
            password: "1234",
            address: 'ABC',
            phoneNumber: 123,
            role: 'User'
        },
        {
            userID: 3,
            name: "def",
            email: "def@email.com",
            password: "1234",
            address: 'ABC',
            phoneNumber: 123,
            role : 'User'
        },
    ];

    const databaseProducts = [
        {productID: 1, name: 'Chair', description: '', price: 100, imgURL: 'https://picsum.photos/200/300', stock: 10},
        {productID: 2, name: 'Table', description: '', price: 200, imgURL: 'https://picsum.photos/200/300', stock: 15},
        {productID: 3, name: 'Laptop', description: '', price: 300, imgURL: 'https://picsum.photos/200/300', stock: 20},
    ];

    const databaseCart = [
        {userID: 1, cartContents: []},
        {userID: 2, cartContents: []},
        {userID: 3, cartContents: []},

    ]


    //
    // localStorage.setItem('userDB', JSON.stringify(databaseUsers));
    // localStorage.setItem('productDB', JSON.stringify(databaseProducts));
    // localStorage.setItem('cartDB', JSON.stringify(databaseCart))


    if (localStorage.getItem('userDB') === '[]') {
        localStorage.setItem('userDB', JSON.stringify(databaseUsers));
    }

    if (localStorage.getItem('productDB') === '[]') {
        localStorage.setItem('productDB', JSON.stringify(databaseProducts));
    }

    if (localStorage.getItem('cartDB') === '[]') {
        localStorage.setItem('cartDB', JSON.stringify(databaseCart));
    }

    return (
        <>
            <button onClick={()=>{
                localStorage.setItem('userDB', JSON.stringify(databaseUsers));
                localStorage.setItem('productDB', JSON.stringify(databaseProducts));
                localStorage.setItem('cartDB', JSON.stringify(databaseCart))

            }}>Reset data</button>
            <Routes>

                <Route element={<NavigationComp/>}>
                    <Route path='/Home' element={<HomePage/>}/>
                    <Route path={'/Product/:id'} element={<ProductPage/>}/>

                    <Route path='/SignUp' element={<SignupPage/>}/>
                    <Route path='/Login' element={<LoginPage/>}/>
                    <Route path='/Cart' element={<ProtectedRouteToCart/>}/>
                    <Route path='/Admin' element={<AdminProductPage/>}/>


                </Route>


            </Routes>



        </>

    );
}

export default App;
