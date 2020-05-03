const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users.js');
const secret = require('../common/constants.js').JWT_SECRET;


module.exports = {
    addUser: function(req, res) {
        const { username, password } = req.body;
    
        if (!username || !password) {
            return res.send({
                code: -1,
                error: 'username or password is missing'
            });
        }
        let user = new User({ username, password });
    
        user.save(function(err, user) {
            if (err) {
                return res.send({
                    code: -1,
                    error: err
                });
            }
            return res.send({
                code: 0
            });
        })
    },
    login: function(req, res) {
        const { username, password } = req.body;

        User.findOne({ username }, function(err, user) {
            // error occurs or can't find the user
            if(err || !user) {
                return res.send({
                    code: -1,
                    error: err
                });
            }
            bcrypt.compare(password, user.password)
                .then(function(result) {
                    if (result) {
                        // if username and password matched, log in
                        const token = jwt.sign({ username: user.username }, secret, { expiresIn: '1d' });
                        res.cookie('token', token, { maxAge: 60 * 60 * 24 * 2 * 1000, httpOnly: true });
                        return res.send({
                            code: 0,
                            data: user.username
                        });
                    }
                    return res.send({
                        code: 3,
                        error: 'Authentication error'
                    });
                })
                .catch(function(err) {
                    return res.send({
                        code: -1,
                        error: err
                    });
                });
        });
    },
    logout: function(req, res) {
        res.cookie('token', '', { maxAge: 1, httpOnly: true });
        return res.send({ code: 0 });
    },
    getUserInfo: function(req, res) {
        return res.send({
            code: 0,
            data: req.decoded
        });
    }
}