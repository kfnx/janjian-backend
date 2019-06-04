const Post = require('../model/post_model.js');
exports.hello = (req, res, next) => {
    res.send('you are in test');
}
exports.addPost = (req, res, next) => {
      const post = new Post({
           title: req.body.title,
           location: req.body.location,
           description: req.body.description,
           image: req.body.image
      })
      console.log(post)
      post.save(function (err, koceng) {
        if (err) return console.error(err);
        console.log('saved')
        res.send('post added successfully');
      });
}