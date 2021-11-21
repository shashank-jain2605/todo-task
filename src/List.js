import React from "react";
import { ImBin2 } from "react-icons/im";
import { ImPencil2 } from "react-icons/im";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="list">
      {items.map((i) => {
        const { id, title } = i;
        return (
          <div className="list-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="delete-btn">
                <ImBin2 onClick={() => removeItem(id)} />
              </button>
              <button className="edit-btn">
                <ImPencil2 onClick={() => editItem(id)} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
