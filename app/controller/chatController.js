const { validationResult } = require('express-validator');

module.exports.index = function (application, req, res) {
  res.render("chat", { nick: '' })
}

module.exports.start = function (application, req, res) {
  const dataForm = req.body

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("index", { validations: errors.array() })
  }
  application.get('io').emit('chatMsg', { name: dataForm.name, msg: 'Just entered the chat' })
  res.render("chat", { nick: dataForm.name })
}