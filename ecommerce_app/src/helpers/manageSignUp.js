export default function manageSignUp(submittedData) {
    const cartDatabase = JSON.parse(localStorage.getItem('cartDB'))
    const userDatabase = JSON.parse(localStorage.getItem('userDB'))


    let flag = true

    // Searches the database to see if the same email already exists
    let matchedObj = userDatabase.filter(obj => obj.email === submittedData.email);
    if (matchedObj.length === 1) {
        flag = false
    }

    let newId = userDatabase[userDatabase.length - 1].userID
    // If everything is valid, user gets an alert and the Redux page loads
    if (flag === true) {

        const newUser = {
            userID: ++newId,
            name: submittedData.name,
            email: submittedData.email,
            password: submittedData.password,
            address: submittedData.address,
            phoneNumber: submittedData.phoneNumber,
            role: 'User',
        }

        userDatabase.push(newUser);
        localStorage.setItem('userDB', JSON.stringify(userDatabase))

        cartDatabase.push({userID: newUser.userID, cartContents: []})
        localStorage.setItem('cartDB', JSON.stringify(cartDatabase))


    } else {
        return flag;
    }
}
