module.exports = function(app) {
    var index = require('../controllers/ExampleController');
    var userController = require('../controllers/UserController');

    app.get('/', index.render);

    app.get('/users', userController.actions.create);
    app.route('/users').post(userController.actions.store);
};