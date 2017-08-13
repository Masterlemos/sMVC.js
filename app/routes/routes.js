module.exports = function(app) {
    var index = require('../controllers/ExampleController');
    var userController = require('../controllers/UserController');

    app.get('/', index.render);

    app.route('/users').post(userController.actions.create);
    app.get('/users', userController.actions.index);
};