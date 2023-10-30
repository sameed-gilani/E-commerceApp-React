import {Formik} from 'formik';
import * as Yup from 'yup';
import {string} from "yup";

import manageLogin from "../helpers/manageLogin";
import createInput from "../helpers/createFormInputs";


const userDatabase = JSON.parse(localStorage.getItem('localDB'))


const getInitialValues = () => {

    return {
        email: '',
        password: '',
        isAdmin:false,
    }


}

const getValidationSchema = () => {

    return {
        email: string().required().email(),
        password: string().required(),

    };

}

const handleFormSubmit = (values) => {
    console.log(values)

    const loginCheck = manageLogin(values,userDatabase);

    if(loginCheck === true){
        alert("Logged In")
    }else{
        alert("Login Failed")
    }

}


export default function LoginPage() {

    return (
        <>

            <Formik initialValues={getInitialValues()}
                    onSubmit={handleFormSubmit}
                    validationSchema={Yup.object().shape(getValidationSchema())}
                    validateOnChange={false}
            >


                {(formik) => {


                    return (
                        <>
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                formik.handleSubmit()
                            }}>

                                {createInput(formik.initialValues, formik)}



                                <br/>
                                <button type='submit'> Login</button>
                            </form>
                        </>
                    );
                }}


            </Formik>

        </>
    );


}