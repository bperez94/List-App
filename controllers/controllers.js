const db = require("../models/listmodel");

const listCont = {
//queries
create: function(req, res) {
  db.list
    .create(req.body)
    .then(dblist => res.json(dblist))
    .catch(err => res.status(422).json(err));
  },
    findAll: function(req, res) {
    db.list.find({})
    .find(req.query)
    .then(dblist => res.json(dblist))
    .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.list
      .findById(req.params.id)
      .then(dblist => res.json(dblist))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.list
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dblist => res.json(dblist))
      .catch(err => res.status(422).json(err));
    },
  remove: function(req, res) {
    db.list
      .findById({ _id: req.params.id })
      .then(dblist => dblist.remove())
      .then(dblist => res.json(dblist))
      .catch(err => res.status(422).json(err));
    }
};

module.exports = listCont;