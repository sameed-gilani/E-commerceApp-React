export default function manageLogin(submittedData, database) {

    let flag = false;


    let matchedObj = database.filter(obj =>
        obj.email === submittedData.email &&
        obj.password === submittedData.password);

    if (matchedObj.length === 1) {
        flag = true
    }

    return flag

}
