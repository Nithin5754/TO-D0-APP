const InputBox = ({refContainer,isValue,setValue}) => {
  return (
    <>
<input ref={refContainer}
            type="text" value={isValue} onChange={(e) => setValue(e.target.value)}
            className="border-gray-300 bg-slate-100 flex-1 px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 transition duration-300 rounded"
            placeholder="Add a task"
        />
     
    </>
  )
}
export default InputBox