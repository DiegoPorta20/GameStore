import '../styles/Search.css'

const Search= ()=> {
  return (
    <div className="search-component">
        <div className='search search-input'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default Search