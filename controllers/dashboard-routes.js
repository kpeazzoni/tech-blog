const router = require('express').Router();
const { Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all blog post for homepage
      const blogPostData = await Post.findAll({
        where: {user_id: req.session.user_id}
      });
  
      // Serialize data so the template can read it
      const posts = blogPostData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('profile', {posts});
    } catch (err) {
      res.status(400).json(err);
    }
  });
  // get posts by id
  router.get('/edit/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
      });
  
      const posts = postData.get({ plain: true });
  
      res.render('edit', {
        ...posts});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;