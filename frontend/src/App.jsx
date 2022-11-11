import React, { useState, useEffect } from "react";
import api from "./services/api";
import Annotation from "./components/Annotation";
import RadioButton from "./components/RadioButton";
import "./global.css";
import "./App.css";
import "./mediaqueries.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });

    setTitle("");
    setNotes("");
    setAllNotes([...allNotes, res.data]);
  }

  useEffect(() => {
    async function getAllNotes() {
      const res = await api.get("/annotations");
      setAllNotes(res.data);
    }

    getAllNotes();
  }, []);

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById("btn_submit");
      btn.style.backgroundColor = "#ffd3ca";
      if (title && notes) {
        btn.style.backgroundColor = "#eb8f7a";
      }
    }

    enableSubmitButton();
  }, [title, notes]);

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Título da Anotação</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            ></textarea>
          </div>

          <button id="btn_submit" type="submit">
            Salvar
          </button>
        </form>
        <RadioButton />
      </aside>
      <main>
        <ul>
          {allNotes.map((data) => (
            <Annotation data={data} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
