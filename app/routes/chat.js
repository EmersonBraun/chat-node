const { check } = require('express-validator');

module.exports = function (application) {
  application.get('/chat', function (req, res) {
    application.app.controller.chatController.index(application, req, res)
  });

  application.post('/chat', [
    check('name', 'Name is required').notEmpty(),
    check('name', 'Name must have 3 to 15 characters').isLength({ min: 3, max: 15 }),
  ], function (req, res) {
    application.app.controller.chatController.start(application, req, res)
  });
}