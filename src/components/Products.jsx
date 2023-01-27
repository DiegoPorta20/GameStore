import Product from './Product'
import '../styles/Products.css'

const Products = ({products})=>{
    //const pathName = window.location.pathname
    return(
        <div className='products'>
            {products.map(product=>
                <Product key={product.id} product={product} />    
            )}
        </div>
    )
}
export default Products