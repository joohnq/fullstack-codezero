import React from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import "./style.css";
import "../../App.css";

const Annotation = ({ data }) => {
  return (
    <li className="notepad-infos">
      <div>
        <strong>{data.title}</strong>
        <div>
          <AiOutlineCloseCircle size="20" />
        </div>
      </div>

      <textarea defaultValue={data.notes}></textarea>

      <span>
        <AiOutlineExclamationCircle size="20" />
      </span>
    </li>
  );
};

export default Annotation;
