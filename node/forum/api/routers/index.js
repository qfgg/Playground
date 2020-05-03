const express = require('express');
const router = express.Router();
const userController = require('../controller/user.js');
const topicController = require('../controller/topic.js');
const validateToken = require('../common/util.js').valitateToken;


router.post('/addUser', userController.addUser);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/getUserInfo', validateToken, userController.getUserInfo);

router.post('/addTopic', validateToken, topicController.addTopic);
router.get('/getTopics', topicController.getTopics);

module.exports = router;