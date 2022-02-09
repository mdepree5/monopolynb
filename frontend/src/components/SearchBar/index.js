const SearchBar = ({placeholderText, onChange}) => (
  <>
    <div className='search-bar'>
      <label htmlFor='searchBar' />
      <input
        name='searchBar'
        type="text"
        placeholder={placeholderText}
        onChange={onChange}
      />
    </div>
    <div className='search-results'>
    </div>
  </>  
)

export default SearchBar;