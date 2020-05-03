const User = require('../models/users.js');
const Topic = require('../models/topics.js');


module.exports = {
    addTopic: function(req,res) {
        const { title, content } = req.body;
        const username = req.decoded.username;

        User.findOne({ username }, function(err, user) {
            // error occurs or can't find the user
            if(err || !user) {
                return res.send({
                    code: -1,
                    error: err
                });
            }

            const topic = new Topic({
                title,
                content,
                createTime: new Date().getTime(),
                authorID: user._id,
                authorName: user.username
            });

            topic.save(function(err) {
                if (err) {
                    return res.send({
                        code: -1,
                        error: err
                    });
                }

                return res.send({ code: 0 });
            });
        });
    },
    getTopics: function(req, res) {
        Topic.find(function(err, topics) {
            if (err) {
                return res.send({
                    code: -1,
                    error: err
                });
            }

            return res.send({
                code: 0,
                data: topics
            });
        })
    }
}