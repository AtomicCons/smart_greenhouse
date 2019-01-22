var db = require('../models');

exports.getTemp = function(req, res) {
  db.tempHum.find()
    .then(function(temp) {
      res.json(temp);
    })
    .catch(function(err) {
      res.send(err);
    })
}

exports.postTemp = function(req, res) {
  db.tempHum.create(req.body)
  console.log(req.body)
    .then(function(newTemp) {
      res.status(201).json(newTemp);
    })
    .catch(function(err) {
      res.send(err);
    })
}

exports.getKey = function(req, res) {
  db.KeyAPI.find()
    .then(function(key) {
      res.json(key);
    })
    .catch(function(err) {
      res.send(err);
    })
}

exports.postKey = function(req, res) {
  db.KeyAPI.create(req.body)
  console.log(req.body)
    .then(function(newKey) {
      res.status(201).json(newKey);
    })
    .catch(function(err) {
      res.send(err);
    })
}

exports.getTodo = function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
      res.json(foundTodo);
    })
    .catch(function(err) {
      res.send(err);
    })
}


exports.deleteTodo = function(req, res) {
  db.Todo.remove({
      _id: req.params.todoId
    })
    .then(function() {
      res.json({
        message: 'We deleted it!'
      });
    })
    .catch(function(err) {
      res.send(err);
    })
}

module.exports = exports;
