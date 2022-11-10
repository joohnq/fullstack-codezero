import React from "react";
import "./style.css";
import "../../App.css";

const ListAnnotations = () => {
  return (
    <ul>
      <li className="notepad-infos">
        <div>
          <strong>Fazer Compras</strong>
          <div>X</div>
        </div>

        <textarea>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat aut
          pariatur corporis natus eos provident in quas, hic dicta deserunt
          voluptate corrupti asperiores minima eveniet saepe laboriosam id
          doloribus. Sunt.
        </textarea>

        <span>!</span>
      </li>
    </ul>
  );
};

export default ListAnnotations;
