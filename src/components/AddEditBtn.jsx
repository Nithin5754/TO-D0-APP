const AddEditBtn = ({isEdit,handleSubmit}) => {
  return (
    <div>     
       <button type="submit" onClick={handleSubmit}
    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
>
  {isEdit?'Edit':'Add'}
</button>
</div>
  )
}
export default AddEditBtn