const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => res.json({ msg: "Bem vindo a nossa aplicação" }));
app.listen(port, () => console.log(`Rodando na porta ${port}!`));
