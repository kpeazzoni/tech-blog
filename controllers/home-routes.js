  const router = require('express').Router();
  const { Post, User, Comment} = require('../models');
  // const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all blog post for homepage
    const blogPostData = await Post.findAll({
      include: [
        {
          model: User,
          order: [{ }]
        },
        {
          model: Comment,
          include: [User]
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = blogPostData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {posts});
  } catch (err) {
    res.status(400).json(err);
  }
});
// get posts by id
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [User],
        }
      ],
    });

    const posts = postData.get({ plain: true });
    console.log(posts);

    res.render('post', {
      ...posts});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//get /signup 
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});


module.exports = router;
