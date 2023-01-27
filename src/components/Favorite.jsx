import Products from "./Products"
import "../styles/Favorites.css"

const Favorite = ({favorites})=>{
    console.log(favorites)
    return(
        <div className="favorites container">
            <h1>Favorites</h1>
            <Products products={favorites} />
        </div>
    )
}
export default Favorite