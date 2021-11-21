import "./App.css";
import { useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { ImBin2 } from "react-icons/im";

function App() {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    if (!name) {
      setAlert({
        show: true,
        msg: `can't submit empty values`,
        type: "danger",
      });
    } else if (name && isEditing) {
      setList(
        list.map((i) => {
          if (i.id === editId) {
            return { ...i, title: name };
          }
          return i;
        })
      );
      setName("");
      setIsEditing(false);
      setEditId(null);
      setAlert({ show: true, msg: "value changed", type: "success" });
    } else {
      //show alert
      //new item
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      setAlert({ show: true, msg: "new item added to list", type: "success" });
    }
  }

  function removeItem(id) {
    setAlert({ show: true, msg: "item deleted", type: "danger" });
    setList(
      list.filter((i) => {
        return i.id !== id;
      })
    );
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function deleteAll() {
    setList([]);
    setAlert({ show: true, msg: "all item deleted", type: "danger" });
  }

  function editItem(id) {
    const editingItem = list.find((i) => i.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(editingItem.title);
  }

  return (
    <section className="section-center">
      <form className="list-form" onSubmit={handleSubmit}>
        {alert.show && <Alert alert={alert} />}
        <h3>TodoInput</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="new todo"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : " Add new Task"}
          </button>
        </div>
      </form>

      <div className="list-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <div className="buttons">
          <button className="clear-btn" onClick={deleteAll}>
            Delete all task
          </button>
          <button className="done-btn">Done all task</button>
        </div>
      </div>
    </section>
  );
}

export default App;
