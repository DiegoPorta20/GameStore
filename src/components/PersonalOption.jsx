import { Link } from 'react-router-dom'
import '../styles/PersonalOption.css'
const PersonalOption = ()=>{
    return(
        <div className='personalOption'>
            <i className="fa-sharp fa-solid fa-bell"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to='/profile'>
                <img className='photo' src="https://www.mundopsicologos.com/site/article/49504/52397/las-personas-vitamina-0_ai1.jpg" alt="" />
            </Link>
        </div>
    )
}

export default PersonalOption