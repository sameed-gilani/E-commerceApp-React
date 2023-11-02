export default function createInput(formFields, formik) {


    const fields = []
    for (let field in formFields) {
            fields.push(field)
    }


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

        return (
            <>
                {listFields}

            </>
        );



}