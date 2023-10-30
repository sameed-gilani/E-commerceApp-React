import './App.css';
import {Route, Routes} from "react-router-dom";

import NavigationComp from "./pages/navigation";
import HomePage from "./pages/home_page";
import SignupPage from "./pages/signup_page";
import LoginPage from "./pages/login_page";
import CartPage from "./pages/cart";

function App() {



  return (
      <Routes>

          <Route element={<NavigationComp />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/SignUp' element={<SignupPage />} />
              <Route path='/Login' element={<LoginPage />} />
              <Route path='/Cart' element={<CartPage />} />


          </Route>


      </Routes>
  );
}

export default App;
