import { useRef,  useEffect, useState} from "react";
import {List,Alert  } from "./index";
import Search from "./Search";

const Input = () => {
const [isValue,setValue]=useState('')
const [isSearch,setSearch]=useState('')
const [isDisplay,setDisplay]=useState(JSON.parse(localStorage.getItem('list'))||[])
const [isSearchItem,setSearchItem]=useState(JSON.parse(localStorage.getItem('list-1'))||[])
const [isError,setError]=useState({type:'',show:false,msg:''})
const [isEdit,setEdit]=useState(false)
const [isEditID,setEditId]=useState(null)
const refContainer=useRef(null)

useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(isDisplay))
    localStorage.setItem('list-1',JSON.stringify(isSearchItem))
},[isDisplay,isSearchItem])

useEffect(()=>{
 const timer= setTimeout(() => {
    setError({type:'',show:false,msg:''})
  }, 2000);
  return ()=>clearTimeout(timer)
})

useEffect(()=>{
  refContainer.current.focus()
},[isDisplay])



const handleSubmit=(e)=>{
  e.preventDefault()
 
  if(!isValue.trim()){
   return  showAlert('empty task',true,'empty input')
  }else if(isEdit&&isValue){
    console.log("hello");
   const listUpdated=isDisplay.map((dis)=>{
        if(dis.id===isEditID){
          console.log(dis.id," ",isEditID);
          return {...dis,name:isValue}
        }
        return dis
      
     })
     setDisplay(listUpdated)
     setSearchItem(listUpdated)
      
     setEdit(false)
     showAlert('edit',true,'item edited')
     setValue('')
  }else{
    let fakeId=Date.now()
    let updateValue=[...isDisplay,{ id:fakeId,name:isValue}]
    setDisplay(updateValue)
  setSearchItem(updateValue)
    console.log(updateValue);
    showAlert('add',true,'item added')
  
  console.log(isDisplay);
  }


  setValue('')
}

const handleRemove=(id)=>{
  const updateList=isDisplay.filter((display)=>display.id !==id)
  setDisplay(updateList)
  setSearchItem(updateList)

  showAlert('remove',true,'item removed')
}

const handleEdit=(id)=>{
   setEdit(true)
   const getName=isDisplay.find(dis=>dis.id==id)
   setValue(getName.name)
   setEditId(getName.id)

}


const showAlert=(type='',show=false,msg='')=>{
  console.log(isError);
  setError({type:type,show:show,msg:msg})
}
const handleClearAll=()=>{
  setDisplay([])
  setSearchItem([])
}
const searchHandle=()=>{
  
  const searchItem=isDisplay.filter((dis)=>dis.name.includes(isSearch))
  if(!isSearch)return setSearchItem(isDisplay)
  console.log(searchItem);
  setSearch('')
  setSearchItem(searchItem)


}
  return (
   <div className="flex flex-col">
   <div className="mb-12">
   <Alert {...isError}/>

   </div>
   <div className="m-12">

<Search setSearch={setSearch} isSearch={isSearch} searchHandle={searchHandle}/>

   </div>
<div className="flex flex-col">
  
<div className="bg-white p-8 rounded shadow-md w-96">
    <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
    <div className="flex mb-6">
       <form >

<input ref={refContainer}
            type="text" value={isValue} onChange={(e) => setValue(e.target.value)}
            className="border-gray-300 bg-slate-100 flex-1 px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 transition duration-300 rounded"
            placeholder="Add a task"
        />
     
        <button type="submit" onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {isEdit?'Edit':'Add'}
        </button>
       </form>
    </div>
</div>

    
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




</div>

<div className="clearBtn m-auto mt-4">
  {isDisplay.length > 0 && (
    <button 
      onClick={handleClearAll}
      className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
    >
      Clear All
    </button>
  )}
</div>
   </div>
  )
}
export default Input