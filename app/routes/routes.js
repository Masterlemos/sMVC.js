module.exports = function(app) {
    var index = require('../controllers/ExampleController');
    var userController = require('../controllers/UserController');

    app.get('/', index.render);

    app.get('/users/create', userController.create);
	app.get('/users', userController.index);

	app.post('/users', userController.store);
};