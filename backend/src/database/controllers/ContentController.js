const AnnotationData = require("../models/AnnotationData");

module.exports = {
  async update(req, res) {
    const id = req.params.id;
    const { notes } = req.body;

    const annotations = await AnnotationData.findOne({ _id: id });

    if (notes) {
      annotations.notes = notes;

      await AnnotationData.findOneAndUpdate({
        _id: id,
        priority: annotation.priority,
      });
    }

    return res.status.json(annotations);
  },
};
