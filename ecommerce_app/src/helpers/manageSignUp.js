


export default function manageSignUp (submittedData,database){

    let flag = true

    // Searches the database to see if the same email already exists
    let matchedObj = database.filter(obj => obj.email === submittedData.email);
    if(matchedObj.length === 1){
        flag = false
    }

    let newId = database[database.length-1].userID
    // If everything is valid, user gets an alert and the login page loads
    if(flag === true){

        const newUser = {
            userID: ++newId,
            name: submittedData.name,
            email: submittedData.email,
            password: submittedData.password,
            address:submittedData.address,
            phoneNumber: submittedData.phoneNumber
        }

        database.push(newUser);
        localStorage.setItem('localDB',JSON.stringify(database))

    }
    else{
        return flag;
    }
}
