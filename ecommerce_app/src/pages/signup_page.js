import {Formik} from 'formik';
import * as Yup from 'yup';
import {number, string} from "yup";

import manageSignUp from "../helpers/manageSignUp";
import createInput from "../helpers/createFormInputs";


const userDatabase = JSON.parse(localStorage.getItem('localDB'))

const getInitialValues = () => {

    return {
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
        address:'',
        phoneNumber:92,
    }

}

const getValidationSchema = () => {

    return {
        name:string().required(),
        email:string().required().email(),
        password:string().required(),
        confirmPassword: string().oneOf([Yup.ref('password')], "Password Does Not Match"),
        address:string().required(),
        phoneNumber:number().required()

    };

}

const handleFormSubmit = (values) => {
    console.log(values)

    const signupCheck = manageSignUp(values,userDatabase);

    if(signupCheck !== false){
        alert("Signed Up. Loading Login Page");
    }else{
        alert("Email already exists!")
    }


}



export default function SignupPage(){

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


                                <button type='submit'> Sign Up!</button>
                            </form>
                        </>
                    );
                }}


            </Formik>

        </>
    );


}