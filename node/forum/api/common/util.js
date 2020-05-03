const jwt = require('jsonwebtoken');
const secret = require('./constants.js').JWT_SECRET;


module.exports = {
    valitateToken: function(req, res, next) {
        const token = req.cookies.token;
        if (!token) {
            return res.send({
                code: 3,
                error: 'Authentication error. Token required.'
            });
        }

        try {
            const result = jwt.verify(token, secret, { expiresIn: '1d' });
            req.decoded = result;
            next();
        } catch(err) {
            return res.send({
                code: 3,
                error: err
            });
        }   
    }
}