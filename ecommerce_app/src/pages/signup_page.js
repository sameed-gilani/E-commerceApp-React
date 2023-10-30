import {Formik} from 'formik';
import * as Yup from 'yup';
import {number, string} from "yup";

import manageSignUp from "../helpers/manageSignUp";


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
                    function createInput(formFields) {

                        const fields = []
                        for (let field in formFields) {
                            fields.push(field)
                        }


                        //[name,email,password]

                        let listId = 0
                        const listFields = []

                        fields.map((field) =>
                            listFields.push(
                                <div key={++listId}>

                                    <label>{field}:</label>
                                    <input value={formik.values[field]} name={field} onChange={(event) => {
                                        formik.setFieldValue(field.toString(), event.target.value)
                                    }}/>
                                    <label style={{color: 'red'}}>{formik.errors[field]}</label>

                                </div>
                            )
                        );
                        // console.log(listFields)
                        return (
                            <> {listFields} </>
                        );
                    }


                    return (
                        <>
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                formik.handleSubmit()
                            }}>

                                {createInput(formik.initialValues)}


                                <button type='submit'> Sign Up!</button>
                            </form>
                        </>
                    );
                }}


            </Formik>

        </>
    );


}