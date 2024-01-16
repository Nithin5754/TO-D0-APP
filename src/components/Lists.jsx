import { List } from "./index"

const Lists = ({isSearchItem,handleRemove,handleEdit}) => {
  return (
    <div className="mt-8">
    {
       isSearchItem.length>0?(isSearchItem.map((display,index) => (
            <List key={display.id} {...display} handleRemove={handleRemove} index={index}  handleEdit={handleEdit}  />
        ))):(<h1 className="text-xl md:text-2xl font-semibold text-gray-600 text-center my-4">
        No list available
      </h1>
      )
    }
</div>
  )
}
export default Lists