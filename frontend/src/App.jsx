import React from "react";
import Form from "./components/Form";
import ListAnnotations from "./components/ListAnnotations";
import "./global.css";
import "./App.css";

const App = () => {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <Form />
      </aside>
      <main>
        <ListAnnotations />
        <ListAnnotations />
        <ListAnnotations />
        <ListAnnotations />
        <ListAnnotations />
      </main>
    </div>
  );
};

export default App;
