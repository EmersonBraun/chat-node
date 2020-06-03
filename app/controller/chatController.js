const { check, validationResult } = require('express-validator');

module.exports.index = function(application, req, res) {
  res.render("chat", {nick: ''})
}

module.exports.start = function(application, req, res) {
  const dadosForm = req.body

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("index", {validations: errors.array()})
  }
  application.get('io').emit('chatMsg',{name: dadosForm.name, msg: 'Acabou de entrar'})
  res.render("chat", {nick: dadosForm.name})
}