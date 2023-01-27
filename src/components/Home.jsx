import Header from './Header'
import Container from './Container'
import '../styles/Home.css'
const Home = ({products}) => {
  return (
    <div className='home'>
        <div className='container'>
          <Header />
          <Container products={products} />
        </div>
    </div>
  )
}

export default Home