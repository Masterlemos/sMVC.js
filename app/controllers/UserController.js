var User = require('mongoose').model('User');
var actions = {};

actions.index = function(req, res) {
    res.render('index', {
        title: 'User list page'
    });
};

actions.create = function(req, res, next) {
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