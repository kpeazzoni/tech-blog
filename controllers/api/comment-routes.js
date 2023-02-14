const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
    const newComment = await Comment.create({
                ...req.body,
        user_id: req.session.user_id,
      });
    })

module.exports = router;