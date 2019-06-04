const express = require('express');
const postcontroller = require('../controller/post_controller');
const router = express.Router();
router.get('/', postcontroller.hello);
router.post('/add-post', postcontroller.addPost);

module.exports = router;