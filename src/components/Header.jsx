import PersonalOption from './PersonalOption'
import '../styles/Header.css'
const Header = ()=> {
  return (
    <header>
        <div className='search'>
          <i className="fa-solid fa-magnifying-glass"></i> 
          <input type="text" placeholder="Search" />
        </div>
        <PersonalOption />
    </header>
  )
}

export default Header