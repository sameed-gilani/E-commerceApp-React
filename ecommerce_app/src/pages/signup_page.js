import {Formik} from 'formik';
import * as Yup from 'yup';
import {number, string} from 'yup';

import manageSignUp from "../helpers/manageSignUp";
import createInput from "../helpers/createFormInputs";
import {useNavigate} from "react-router-dom";


export default function SignupPage() {


    const navigate = useNavigate()

    const getInitialValues = () => {

        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            phoneNumber: 92,
        }

    }

    const getValidationSchema = () => {

        return {
            name: string().required(),
            email: string().required().email(),
            password: string().required(),
            confirmPassword: string().oneOf([Yup.ref('password')], "Password Does Not Match"),
            address: string().required(),
            phoneNumber: number().required()

        };

    }

    const handleFormSubmit = (values) => {
        console.log(values)

        const signupCheck = manageSignUp(values);

        if (signupCheck !== false) {
            alert("Signed Up. Loading Login Page");
            navigate('/Login')
        } else {
            alert("Email already exists!")
        }


    }

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