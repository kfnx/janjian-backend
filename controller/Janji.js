const Post = require('../model/Janji.js');

exports.janji_create = (req, res) => {
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
        res.status(200).json({message: 'post success', data: post})
      });
}