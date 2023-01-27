const Product =({product})=>{
    return(
        <div className="product">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p className="especial">${product.price}</p>
            <div className="addCar" onClick={()=>console.log('Add carrito')}>
                <input type="submit" value='+' />  
                Add to Cart
                {
                    !product.heart ? 
                        <i className="fa-regular fa-heart"></i>
                    : <i className="fa-solid fa-heart"></i>
                    }
            </div>
        </div>
    )
}
export default Product