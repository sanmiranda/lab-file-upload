const express = require('express');
const router  = express.Router();
const post = require('../models/post')

/* GET home page. */
router.get('/', (req, res, next) => {
  const user = req.user;
  post.find()
  .populate('creatorId')
  .then(posts => {
    res.render('index', { title: 'Tumblrr', user, posts })
  })
  .catch(e => console.log(e))
});

module.exports = router;
