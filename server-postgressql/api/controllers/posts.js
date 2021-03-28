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

module.exports = router