const AnnotationData = require("../models/AnnotationData");

module.exports = {
  async read(req, res) {
    const priority = req.query;

    const priorityNotes = await AnnotationData.find(priority);

    return res.json(priorityNotes);
  },

  async update(req, res) {
    const id = req.params.id;

    const annotation = await AnnotationData.findOne({ _id: id });

    if (annotation.priority) {
      annotation.priority = false;
    } else {
      annotation.priority = true;
    }

    await AnnotationData.findOneAndUpdate({
      _id: id,
      priority: annotation.priority,
    });

    res.json({ msg: annotation });
  },
};
