export default function clearCartAndAddToStock(cart) {

    const productDatabase = JSON.parse(localStorage.getItem('productDB'))



    cart.forEach(product => {
            let [prodFind] = productDatabase.filter(prodFromDb =>
                prodFromDb.productID === product.productID
            )
            prodFind.stock += product.amount

        }
    )

    localStorage.setItem('productDB', JSON.stringify(productDatabase))


}