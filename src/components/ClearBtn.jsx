const ClearBtn = ({isDisplay,handleClearAll}) => {
  return (
<div >
  {isDisplay.length > 0 && (
    <button 
      onClick={handleClearAll}
      className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
    >
      Clear All
    </button>
  )}
</div>
  )
}
export default ClearBtn