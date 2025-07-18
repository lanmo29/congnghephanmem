var Tag = require('../models').Tag;
require('dotenv').config();
let PAGE_SIZE = parseInt(process.env.PAGE_SIZE);
exports.create = (req, res) => {
  Tag.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.count = (req, res) => {
  Tag.findAndCountAll({ distinct: true })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.findAll = (req, res) => {
  var page = req.query.page;
  var status = req.query.status;
  var pageSize = req.query.pageSize;
  let PA_SI = pageSize || PAGE_SIZE;
  page = parseInt(page);
  let soLuongBoQua = (page - 1) * PA_SI;
  if (page || status) {
    if (page && !status) {
      Tag.findAndCountAll({
        order: [['id', 'DESC']],
        offset: soLuongBoQua,
        limit: PA_SI,
      })
        .then((data) => {
          res.json({ data: data });
        })
        .catch((er) => {
          throw er;
        });
    } else if (status && !page) {
      Tag.findAndCountAll({
        where: { status: status },
        order: [['id', 'DESC']],
      })
        .then((data) => {
          res.json({ data: data });
        })
        .catch((er) => {
          throw er;
        });
    } else {
      Tag.findAndCountAll({
        where: { status: status },
        order: [['id', 'DESC']],
        offset: soLuongBoQua,
        limit: PA_SI,
      })
        .then((data) => {
          res.json({ data: data });
        })
        .catch((er) => {
          throw er;
        });
    }
  } else {
    Tag.findAndCountAll({ order: [['id', 'DESC']] })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((er) => {
        throw er;
      });
  }
};

exports.findOne = (req, res) => {
  Tag.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.delete = (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.update = (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
