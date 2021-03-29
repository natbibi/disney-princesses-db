require('dotenv').config();

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const Princess = require('../models/princess');

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt)
        console.log(hashed);
        await Princess.create({ ...req.body, password: hashed })
        res.status(201).json({ msg: 'User created' })
    } catch (err) {
        res.status(500).json({ err });
    }
})


router.post('/login', async (req, res) => {
    try {
        const princess = await Princess.findByEmail(req.body.email)
        if (!princess) { throw new Error('No user with this email') }
        const authed = bcrypt.compare(req.body.password, princess.passwordDigest)
        if (!!authed) {
            const payload = { username: princess.username, email: princess.email, userid: princess.id }
            const sendToken = (err, token) => {
                if (err) { throw new Error('Error in token generation') }
                res.status(200).json({
                    success: true,
                    token: "Bearer " + token,
                });
            }
            jwt.sign(payload, process.env.SECRET, { expiresIn: 60 }, sendToken);
        } else {
            throw new Error('User could not be authenticated')
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({ err });
    }
})

module.exports = router