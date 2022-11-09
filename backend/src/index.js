const express = require("express");
const app = express();
const port = 3000;
require("./database/config/dbConfig");
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => res.json({ msg: "Bem vindo a nossa aplicação" }));

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
