const express = require('express');
const router = express.Router();

const Princess = require('../models/princess')

// princess index route
router.get('/', async (req, res) => {
    try {
        const princesses = await Princess.all
        res.json({princesses})
    } catch(err) {
        res.status(500).json({err})
    }
})