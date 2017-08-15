var User = require('mongoose').model('User');

exports.readMiddleware = function(req, res, next, id) {
    User.findOne({
       _id: id
    }, 
    function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        } 
    });
};

exports.show = function(req, res) {
     res.json(req.user);
};

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        } 
    });
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.user);
        }
    });
};

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