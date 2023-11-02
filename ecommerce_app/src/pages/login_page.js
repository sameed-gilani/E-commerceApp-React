import {Formik} from 'formik';
import * as Yup from 'yup';
import {string} from 'yup';

import manageLogin from "../helpers/manageLogin";
import createInput from "../helpers/createFormInputs";
import {useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
import {loginAdmin, loginUser,} from "../Redux/loggedUserActions"
import {setCart} from "../Redux/cartActions";


export default function LoginPage() {

    const dispatch = useDispatch()



    const userDatabase = JSON.parse(localStorage.getItem('userDB'))
    const navigate = useNavigate()

    const getInitialValues = () => {

        return {
            email: '', password: ''
        }


    }

    const getValidationSchema = () => {

        return {
            email: string().required().email(), password: string().required(),

        };

    }

    const handleFormSubmit = (values) => {


        const loginCheck = manageLogin(values, userDatabase);

        if (loginCheck === true) {

            let [matchedUser] = userDatabase.filter(findUser => findUser.email === values.email)


            if (matchedUser.role === 'Admin') {

                dispatch(loginAdmin(matchedUser.userID))
                alert("Logged In as Admin")
                navigate('/Admin')

            } else {

                dispatch(loginUser(matchedUser.userID))

                const userCart = JSON.parse(localStorage.getItem('cartDB'))

                let [matchedCart] = userCart.filter(cart =>
                    cart.userID === matchedUser.userID
                )

                dispatch(setCart({userID:matchedCart.userID, cartContents:matchedCart.cartContents}))

                alert("Logged In")
                navigate('/Home')

            }
        } else {
            alert("Login Failed")
        }

    }

    return (<>

            <Formik initialValues={getInitialValues()}
                    onSubmit={handleFormSubmit}
                    validationSchema={Yup.object().shape(getValidationSchema())}
                    validateOnChange={false}
            >


                {(formik) => {


                    return (<>
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                formik.handleSubmit()
                            }}>

                                {createInput(formik.initialValues, formik)}


                                <br/>
                                <button type='submit'> Login</button>
                            </form>
                        </>);
                }}


            </Formik>

        </>);


}