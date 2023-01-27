import Products from './Products'
import Filter from './Filter'
import '../styles/Container.css'

const Container = ({products})=>{
    return(
        <div className='content'>
            <h1>Products</h1>
            <Filter />
            <Products products={products} />
        </div>
    )
}
export default Container