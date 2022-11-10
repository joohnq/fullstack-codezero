import React from "react";
import "./style.css";
import "../../App.css";

const Annotation = () => {
  return (
    <li className="notepad-infos">
      <div>
        <strong>Fazer Compras</strong>
        <div>X</div>
      </div>

      <textarea defaultValue="Lorem ipsum dolor, sit amet consectetur"></textarea>

      <span>!</span>
    </li>
  );
};

export default Annotation;
