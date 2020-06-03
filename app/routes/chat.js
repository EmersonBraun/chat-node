const { check, validationResult } = require('express-validator');

module.exports = function(application){
  application.get('/chat', function(req, res){
      application.app.controller.chatController.index(application, req, res)
  });

  application.post('/chat', [
    check('name', 'Nome é obrigatório').notEmpty(),
    check('name', 'O nome deve ter ente 3 a 15 carateres').isLength({ min:3, max:15}),
    ],function(req, res){
    application.app.controller.chatController.start(application, req, res)
  });
}