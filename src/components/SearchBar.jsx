function SearchBar({ setSearch }) {

  return (
    <div>

      <input
        type='text'
        placeholder='Search Anime...'
        className='search'
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  )
}

export default SearchBar