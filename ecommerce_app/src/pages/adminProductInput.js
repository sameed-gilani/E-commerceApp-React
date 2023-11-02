import {number, string} from "yup";
import {Formik} from "formik";
import * as Yup from "yup";
import createInput from "../helpers/createFormInputs";
import addNewProduct from "../helpers/addNewProduct";


const getInitialValues = () => {

    return {
        name: '',
        description: '',
        price: '',
        imgURL: 'https://picsum.photos/200/300',
        stock: ''
    }

}


const getValidationSchema = () => {

    return {
        name: string().required(),
        description: string(),
        price: number().required(),
        imgURL: string(),
        stock: number().required()

    };

}

const handleFormSubmit = (values) => {
    console.log(values)

    let productAddedCheck = addNewProduct(values)

    if (productAddedCheck !== false) {
        alert("Product added")
    } else {
        alert("This product already exists. Please edit existing product")
    }

}


export default function AdminProductPage() {

    return (
        <>
            <h1>Add new product</h1>
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
                                <button type='submit'> Add product</button>
                            </form>
                        </>
                    );
                }}


            </Formik>

            <br/>


        </>
    );
}