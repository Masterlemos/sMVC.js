var User = require('mongoose').model('User');

exports.index = function(req, res, next) {
    User.find({}, function(err, users) {
       if (err) {
            return next(err);
        } else {
            res.json(users);
        } 
    });
};

exports.create = function(req, res) {
    res.render('user/create', {
        title: 'Create User Page'
    });
};

exports.store = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};