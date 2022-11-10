import React, { useState, useEffect } from "react";
import api from "./services/api";
import Annotation from "./components/Annotation";
import "./global.css";
import "./App.css";
import "./mediaqueries.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const resApi = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });

    setTitle("");
    setNotes("");
  }

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

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Annotation />
          <Annotation />
          <Annotation />
          <Annotation />
          <Annotation />
        </ul>
      </main>
    </div>
  );
};

export default App;
