import { FaTrashAlt,FaEdit  } from "react-icons/fa";


const List = ({name,id,handleRemove,handleEdit,index}) => {
  return (
    <div className="bg-white mb-2 p-4 rounded shadow flex items-center justify-between">
     <div className="list-container flex flex-row gap-4">
     <span>{index+1}</span>
            <span className="text-gray-700">{name}</span>
     </div>
          <div className="button-container flex flex-row gap-4">
          <button onClick={()=>handleRemove(id)}> <FaTrashAlt/></button>
          <button onClick={()=>handleEdit(id)}><FaEdit/></button>
          </div>
        </div>
  )
}
export default List