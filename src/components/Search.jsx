const Search = ({setSearch,isSearch,searchHandle}) => {
  return (
    <div>

<input
    type="text"
    className="border-gray-300 bg-slate-100 flex-1 px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 transition duration-300 rounded"
    value={isSearch}
    onChange={(e) =>setSearch(e.target.value)}
/>
<button type='button' onClick={searchHandle}  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">search</button>
    </div>
  )
}
export default Search