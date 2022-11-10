import React from "react";
import "../../App.css";
import "./style.css";

const Form = () => {
  return (
    <form>
      <div className="input-block">
        <label htmlFor="title">Título da Anotação</label>
        <input type="text" name="title" id="title" />
      </div>

      <div className="input-block">
        <label htmlFor="nota">Anotações</label>
        <textarea></textarea>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default Form;
