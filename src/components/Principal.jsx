import Nav from './Nav'
import Home from './Home'
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../styles/Principal.css'
import Profile from './Profile'
import Search from './Search'
import Favorite from './Favorite'

const Principal = ()=>{
  const [favorites, setFavorites] = useState([])
  const [products, setproducts] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/favorites/")
      .then((response)=> response.json())
      .then((data)=>setFavorites(data))
    fetch("http://localhost:5000/products/")
      .then((response)=> response.json())
      .then((data)=>setproducts(data))
  }, [])
  const [ user, setUser ] = useState({
      name: 'Diego',
      lastName: 'Porta Ñaña',
      year: 19,
      img: 'https://www.mundopsicologos.com/site/article/49504/52397/las-personas-vitamina-0_ai1.jpg',
      email: 'diego@hotmail.com'
  })
    return(
        <div className='principal'>
            <Nav />
            <div className='route'>  
              <Routes>
                  <Route path='home' element={<Home products={products} />} />
                  <Route path='profile' element={<Profile user={user} />} />
                  <Route path='search' element={<Search />} />
                  <Route path='favorite' element={<Favorite favorites={favorites} />} />
              </Routes>    
            </div>    
        </div>
    )
}
export default Principal