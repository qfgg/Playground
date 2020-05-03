const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified || !user.isNew) {
        next();
    } else {
        bcrypt.hash(user.password, 10, function(err, hash) {
            if (err) {
                console.log('Error hashing password', user.name);
                next(err);
            } else {
                user.password = hash;
                next();
            }
        });
    }
});

module.exports = mongoose.model('User', userSchema);