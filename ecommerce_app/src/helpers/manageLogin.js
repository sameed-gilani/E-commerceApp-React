export default function manageLogin(submittedData, database) {

    let flag = false;


    // Checks the validity of the email and password with each object in the database
    let matchedObj = database.filter(obj =>
        obj.email === submittedData.email &&
        obj.password === submittedData.password
        && obj.isAdmin === submittedData.isAdmin);

    if (matchedObj.length === 1) {
        flag = true
    }

    return flag

}
