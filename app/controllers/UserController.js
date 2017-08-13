var User = require('mongoose').model('User');
var actions = {};

actions.create = function(req, res) {
    res.render('user/create', {
        title: 'Create User Page'
    });
};

actions.store = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.actions = actions;
