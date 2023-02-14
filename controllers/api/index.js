const router = require('express').Router();
const userRoutes = require('./user');
const blogpostRoutes = require('./blogpost-routes');
const commentRoutes = require('./comment-routes');
router.use('/user', userRoutes);
router.use('/post', blogpostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;