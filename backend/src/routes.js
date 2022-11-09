const express = require("express");
const routes = express.Router();

const AnnotationController = require("./database/controllers/AnnotationController");
const PriorityController = require("./database/controllers/PriorityController");

routes.post("/annotations", AnnotationController.create);
routes.get("/annotations", AnnotationController.read);
routes.delete("/annotations/:id", AnnotationController.delete);

routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

module.exports = routes;
