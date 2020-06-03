const { check, validationResult } = require('express-validator');

module.exports.index = function(application, req, res) {
  res.render("chat");
}

module.exports.start = function(application, req, res) {
  const dadosForm = req.body

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array())
    return res.render("index", {validations: errors.array()}); 
  }
  res.render("chat");
}