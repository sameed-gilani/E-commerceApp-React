import '../css/homePage.css'
import {Link} from "react-router-dom";


export default function HomePage() {
    const productDatabase = JSON.parse(localStorage.getItem('productDB'))


    const productViews = []


    productDatabase.map((product) => productViews.push(<div className="card" key={product.name}>
        <Link to={`/Product/${product.productID}`}>

            <img src={product.imgURL} alt={product.name}/>

        </Link>

        <h1>{product.name}</h1>
        <p className="price">Price: {product.price}</p>
        <p>Stock: {product.stock}</p>
    </div>));


    return (<>
            <h1>Home Page</h1>


            {productViews}

        </>

    );
}