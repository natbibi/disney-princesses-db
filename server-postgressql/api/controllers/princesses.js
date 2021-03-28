const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Princess = require('../models/princess');

// princess index route
router.get('/', verifyToken, async (req, res) => {
    try {
        const princesses = await Princess.all
        res.json(princesses)
    } catch (err) {
        res.status(500).json({ err })
    }
})


// show princess route
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const princess = await Princess.findById(parseInt(req.params.id))
        res.json(princess)
    } catch (err) {
        res.status(404).json({ err })
    }
})

// create princess route
router.post('/', async (req, res) => {
    try {
        const princess = await Princess.create(req.body.username, req.body.email, req.body.passwordDigest)
        res.json(princess)
    } catch (err) {
        res.status(404).json({ err })
    }
})

module.exports = router