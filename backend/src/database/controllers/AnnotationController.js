//Responsável por manupular as respostas quanto ao registro das anotações
const AnnotationData = require("../models/AnnotationData");

module.exports = {
  async read(req, res) {
    const annotationsList = await AnnotationData.find({});

    return res.status(201).json(annotationsList);
  },

  async create(req, res) {
    const { title, notes, priority } = req.body;

    if (!title && !notes && !priority) {
      return res
        .status(400)
        .json({ msg: "Todos os campos devem estar preenchidoS" });
    }

    if (!title) {
      return res
        .status(400)
        .json({ msg: "O campo de TÍTULO deve estar preenchido" });
    }

    if (!notes) {
      return res
        .status(400)
        .json({ msg: "O campo de NOTAS deve estar preenchido" });
    }

    const annotation = await AnnotationData.create({
      title,
      notes,
      priority,
    });

    res.status(200).json(annotation);
  },

  async delete(req, res) {
    const id = req.params.id;

    const AnnotationDeleted = await AnnotationData.findByIdAndDelete(id);

    if (AnnotationDeleted) {
      return res.status(401).json({ msg: "Anotação deletada" });
    }

    return res.status(200).json(AnnotationDeleted);
  },
};
