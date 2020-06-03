module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controller.indexController.home(application, req, res)
    });
}