import './App.css';
import {Route, Routes} from "react-router-dom";

import NavigationComp from "./pages/navigation";
import HomePage from "./pages/home_page";
import SignupPage from "./pages/signup_page";
import LoginPage from "./pages/login_page";
import CartPage from "./pages/cart";
import ProductPage from "./pages/product_page";

function App() {


    // Database to store user details
    const databaseUsers = [
        {userID:1, name:"sameed", email:"sameed@email.com", password:"1234", address:'ABC', phoneNumber:123},
        {userID:2, name:"abc", email:"abc@email.com", password:"1234",address:'ABC', phoneNumber:123},
        {userID:3, name:"def", email:"def@email.com", password:"1234",address:'ABC', phoneNumber:123},
    ];


    if(localStorage.getItem('localDB') === '[]'){
        localStorage.setItem('localDB', JSON.stringify(databaseUsers));
    }

    localStorage.setItem('loginToken',JSON.stringify(false))


    return (
      <Routes>

          <Route element={<NavigationComp />}>
              <Route path='/' element={<HomePage />} />
              <Route path={'/Product/:id'} element={<ProductPage />} />

              <Route path='/SignUp' element={<SignupPage />} />
              <Route path='/Login' element={<LoginPage />} />
              <Route path='/Cart' element={<CartPage />} />

          </Route>


      </Routes>
  );
}

export default App;
