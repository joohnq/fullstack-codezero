const mongoose = require("mongoose");

const AnnotationsDataSchrema = new mongoose.Schema({
  title: String,
  notes: String,
  priority: Boolean,
});

module.exports = mongoose.model("annotations", AnnotationsDataSchrema);
