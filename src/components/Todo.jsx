import { useRef, useEffect, useState } from "react";
import {Search, Lists, Alert, ClearBtn, AddEditBtn, InputBox } from "./index";


const Input = () => {
  const [isValue, setValue] = useState("");
  const [isSearch, setSearch] = useState("");
  const [isDisplay, setDisplay] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [isSearchItem, setSearchItem] = useState(
    JSON.parse(localStorage.getItem("list-1")) || []
  );
  const [isError, setError] = useState({ type: "", show: false, msg: "" });
  const [isEdit, setEdit] = useState(false);
  const [isEditID, setEditId] = useState(null);
  const refContainer = useRef(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(isDisplay));
    localStorage.setItem("list-1", JSON.stringify(isSearchItem));
  }, [isDisplay, isSearchItem]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError({ type: "", show: false, msg: "" });
    }, 2000);
    return () => clearTimeout(timer);
  },[isValue]);

  useEffect(() => {
    refContainer.current.focus();
  }, [isDisplay,isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValue.trim()) {
      return showAlert("empty task", true, "empty input");
    } else if (isEdit && isValue) {
      console.log("hello");
      const listUpdated = isDisplay.map((dis) => {
        if (dis.id === isEditID) {
          console.log(dis.id, " ", isEditID);
          return { ...dis, name: isValue };
        }
        return dis;
      });
      setDisplay(listUpdated);
      setSearchItem(listUpdated);

      setEdit(false);
      showAlert("edit", true, "item edited");
      setValue("");
    } else {
      let fakeId = Date.now();
      let updateValue = [...isDisplay, { id: fakeId, name: isValue }];
      setDisplay(updateValue);
      setSearchItem(updateValue);
      console.log(updateValue);
      showAlert("add", true, "item added");

      console.log(isDisplay);
    }

    setValue("");
  };

  const handleRemove = (id) => {
    const updateList = isDisplay.filter((display) => display.id !== id);
    setDisplay(updateList);
    setSearchItem(updateList);

    showAlert("remove", true, "item removed");
  };

  const handleEdit = (id) => {
    setEdit(true);
    const getName = isDisplay.find((dis) => dis.id == id);
    setValue(getName.name);
    setEditId(getName.id);
  };

  const showAlert = (type = "", show = false, msg = "") => {
    console.log(isError);
    setError({ type: type, show: show, msg: msg });
  };
  const handleClearAll = () => {
    setDisplay([]);
    setSearchItem([]);
  };
  const searchHandle = () => {
    const searchItem = isDisplay.filter((dis) => dis.name.includes(isSearch));
    if (!isSearch) return setSearchItem(isDisplay);
    console.log(searchItem);
    setSearch("");
    setSearchItem(searchItem);
  };
  return (
    <div className="flex flex-col">
      <div className="m-4">
        <Alert {...isError} />
      </div>
      <div className="m-12">
        <Search
          setSearch={setSearch}
          isSearch={isSearch}
          searchHandle={searchHandle}
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
          <div className="flex mb-6">
            <form className="flex">
              <InputBox
                refContainer={refContainer}
                isValue={isValue}
                setValue={setValue}
              />
              <AddEditBtn isEdit={isEdit} handleSubmit={handleSubmit} />
            </form>
          </div>
        </div>

        <div className="mt-8">
          <Lists
            isSearchItem={isSearchItem}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        </div>
      </div>

      <div className="clearBtn m-auto mt-4">
        <ClearBtn isDisplay={isDisplay} handleClearAll={handleClearAll} />
      </div>
    </div>
  );
};
export default Input;
