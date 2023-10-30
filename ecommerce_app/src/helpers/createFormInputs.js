
export default function createInput(formFields,formik) {

    let isAdminCheck = false

    const fields = []
    for (let field in formFields) {
        if(field !== 'isAdmin'){
            fields.push(field)
        }else{
            isAdminCheck = true
        }
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


    if(isAdminCheck === true){
        return (
            <>
                {listFields}

                <label>Admin</label>
                <input type={"checkbox"} checked={formik.values.isAdmin} value={formik.values.isAdmin} name={'isAdmin'} onChange={(event)=>{
                    formik.setFieldValue('isAdmin', event.target.checked)
                }} />

            </>
        );
    }else{
        return (
            <>
                {listFields}

            </>
        );
    }



}