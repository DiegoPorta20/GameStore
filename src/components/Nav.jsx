import { useEffect, useState } from "react"
import '../styles/Nav.css'
import NavBar from "./NavBar"

const Nav = ()=>{
    const [width, setwidth] = useState(window.innerWidth)
    const [transicion, setTransicion] = useState("")
    const changeSize = ()=>{
      setwidth(window.innerWidth)
    }
    useEffect(()=>{
      window.addEventListener('resize', changeSize)
      return()=>{
        window.removeEventListener('resize', changeSize)
      }
    }, [transicion])
    const insertClass = (e)=>{
      e.preventDefault()
      if(!transicion)
        setTransicion("clase")
      else
        setTransicion("")
    }
    //console.log(setTransicion)
    return(
        <div className="navigation">
          { width > 670 ? <NavBar setTransicion={setTransicion} />:
            <div>
              <button className='hamburger' onClick={insertClass}>
                  <i className="fa-solid fa-bars"></i> 
              </button>
              <div className={`transition ${transicion}`}>
                <NavBar setTransicion={setTransicion} />
              </div>
            </div>
          }
        </div>
    )
}
export default Nav