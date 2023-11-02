export default function addNewProduct(submittedData) {

    const productDatabase = JSON.parse(localStorage.getItem('productDB'))

    let flag = true


    let matchedProduct = productDatabase.filter(obj => obj.name === submittedData.name);

    if (matchedProduct.length === 1) {
        flag = false
    }

    let newId = productDatabase[productDatabase.length - 1].productID
    // If everything is valid, user gets an alert and the Redux page loads
    if (flag === true) {

        const newProduct = {
            productID: ++newId,
            name: submittedData.name,
            description: submittedData.description,
            price: submittedData.price,
            imgURL: submittedData.imgURL,
            stock: submittedData.stock

        }

        productDatabase.push(newProduct);
        localStorage.setItem('productDB', JSON.stringify(productDatabase))
    } else {
        return flag;
    }

}