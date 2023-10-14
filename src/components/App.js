import { useState } from "react";
import "./App.css"; 

function App() {
  const [inputItem, setInputItem] = useState("");
  const [addItem, setAddItem] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  function handleChange(e) {
    setInputItem(e.target.value);
  }

  function handleClick() {
    if (!inputItem) {
      return "invalid";
    } else {
      setAddItem([...addItem, inputItem]);
      setInputItem("");
    }
  }

  function handleRemove() {
    setAddItem([]);
  }

  function handleDelete(ind) {
    const deleteItem = addItem.filter((elem, index) => {
      return ind !== index;
    });
    setAddItem(deleteItem);
  }

  return (
    <div id="app-container">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={inputItem}
          placeholder="Enter your Tasks"
          className="input-text"
        />
        <button onClick={handleClick} className="add-button">
          Add
        </button>
        <input
          type="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search your Tasks"
          className="search-input"
        />
      </div>

      <div id="task-list">
        {addItem
          .filter((elem) => {
            return searchItem === ""
              ? elem
              : elem.toLowerCase().includes(searchItem);
          })
          .map((elem, index) => {
            return (
              <div key={index} className="task-item">
                <h3>{elem}</h3>
                <button
                  onClick={() => handleDelete(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>

      <button onClick={handleRemove} id="remove-all-button">
        Remove All
      </button>
    </div>
  );
}

export default App;
