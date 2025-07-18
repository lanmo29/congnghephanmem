var WorkTypeOfWork = require('../models').WorkTypeOfWork;
var Work = require('../models').Work;

exports.create = (req, res) => {
  WorkTypeOfWork.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findAll = (req, res) => {
  WorkTypeOfWork.findAll()
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findOne = (req, res) => {
  WorkTypeOfWork.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  WorkTypeOfWork.destroy({ where: { workId: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  WorkTypeOfWork.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
