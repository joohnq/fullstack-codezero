const AnnotationData = require("../models/AnnotationData");

module.exports = {
  async update(req, res) {
    const id = req.params.id;
    const { notes } = req.body;

    const annotation = await AnnotationData.findOne({ _id: id });

    if (notes) {
      annotation.notes = notes;

      await AnnotationData.findOneAndUpdate({
        _id: id,
        notes: annotation.notes,
      });
    }

    return res.json(annotation);
  },
};
