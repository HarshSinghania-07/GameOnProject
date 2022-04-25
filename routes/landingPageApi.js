const express = require('express');
const router = express.Router();
const data = require('../data');

// Router configuration

router.get('/' ,async (req,res) => {
    res.render('index/landingPage', {title: "Hey! Welcome",userDetails: req.session.user});
});

module.exports = router;