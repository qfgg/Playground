const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/users.js');
const Topic = require('../models/topics.js');
const router = express.Router;


router.post('/addUser', (req, res) => {
    let user = new User();
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({
            success: false,
            error: 'username or password is missing'
        });
    }
    user.username = username;
    user.password = password;

    user.save((err) => {
        if (err) {
            return res.json({
                success: false,
                error: err
            });
        }
        return res.json({
            success: true
        });
    })
});

module.exports = router;