import {Link} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const NavBar = ({setTransicion})=>{
    return(
        <div>
            <Link to='/home' onClick={()=>{setTransicion("clase"); {<Navigate to='/home' />}}}>
                <img className="logo" src="https://i.pinimg.com/originals/7e/92/b2/7e92b2049f4c5b19512fe42af8e743c7.png" alt="logo" />
            </Link>
            <div className="button">
                <button onClick={()=>console.log('catalog')}>Catalog</button>
            </div>
            <ul>
                <Link className="links" to='/profile' onClick={()=>{setTransicion("clase"); {<Navigate to='/profile' />}}}>
                    <li>
                        <i className="fa-regular fa-user"></i>
                        Profile
                    </li>
                </Link>
                <Link className="links" to='/search' onClick={()=>{setTransicion("clase"); {<Navigate to='/search' />}}}>
                    <li>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                    </li>
                </Link>
                <Link className="links" to='/favorite' onClick={()=>{setTransicion("clase"); {<Navigate to='/favorite' />}}}>
                    <li>
                        <i className="fa-regular fa-heart"></i>
                        Favorite
                    </li>
                </Link>
                <Link className="links" to='/balance' onClick={()=>{setTransicion("clase"); {<Navigate to='/balance' />}}}>
                    <li>
                        <i className="fa-solid fa-wallet"></i>
                        Balance
                    </li>
                </Link>
            </ul>
            <select name="select">
                <option value="">Selection</option>
                <option value="computer">Computer</option>
                <option value="gamaheadphone">Game Headphone</option>
                <option value="keyboard">Keyboard</option>
                <option value="mousegaming">Mouse Gaming</option>
            </select>
        </div>
    )
}
export default NavBar