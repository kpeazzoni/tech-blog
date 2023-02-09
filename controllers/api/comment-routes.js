const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const newComment = await Comment.findall({
            include: [
                {
                    model: Post,
                    attributes: ['name', 'id', 'description'],
                },
                {
                    model: User,
                    attributes: ['id', 'name'],
                }
            ],
        });
        res.render('post-routes', { newComment })
    } catch (error) {
        res.status(400).json(error);
    }
})
