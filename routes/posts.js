const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');

router.post('/addposts',function (req, res) {
  const { posttext,userid,createdAt } = req.body;
  const post = new Posts({ posttext,userid,createdAt });
  post.save(function (err) {
    if (err) {
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    }

    return res.json({ 'status': true, 'message': 'Post has been Added' });
  });
});

router.get('/getPosts', function(req, res) {
  Posts.find()
    .exec(function(err, foundPosts) {

    if (err) {
      return res.status(422).send({errors: normalizeErrors(err.errors)});
    }

    return res.json(foundPosts);
  });
});

router.put('/updatelikes', function (req, res) {
  var newdata = req.body;
  Posts.findById({ _id: req.body._id }).exec(function (err, foundroutes) {
    Posts.update({ _id: req.body._id }, newdata, { new: true }, function (err) {
      if (err) {
        return res.status(422).send({ errors: normalizeErrors(err.errors) });
      }
      return res.json('success');
    });
  });
});
module.exports = router;