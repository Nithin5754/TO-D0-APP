import { FaTrashAlt,FaEdit  } from "react-icons/fa";


const List = ({name,id,handleRemove,handleEdit}) => {
  return (
    <div className="bg-white mb-2 p-4 rounded shadow flex items-center justify-between">
            <span className="text-gray-700">{name}</span>
           <button onClick={()=>handleRemove(id)}> <FaTrashAlt/></button>
          <button onClick={()=>handleEdit(id)}><FaEdit/></button>
        </div>
  )
}
export default List