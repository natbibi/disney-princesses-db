const express = require('express');
const router = express.Router();
// const { verifyToken } = require('../middleware/auth');

const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.all
        res.json(posts)
    } catch (err) {
        res.status(500).send({ err })
    }
})

// create post route
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.username, req.body.body)
        res.json(post)
    } catch (err) {
        res.status(404).json({ err })
    }
})

// show post route
router.get('/postid/:id', async (req, res) => {
    try {
        const post = await Post.findByPostID(parseInt(req.params.id))
        res.json(post)
    } catch (err) {
        res.status(404).json({ err })
    }
})

router.get('/userid/:user_id', async (req, res) => {
    try {
        const post = await Post.findByPrincessID(parseInt(req.params.user_id))
        res.json(post)
    } catch (err) {
        res.status(404).json({ err })
    }
})

module.exports = router