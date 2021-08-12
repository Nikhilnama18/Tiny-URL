const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Keys = require('../models/key')


// Hadling Post request from front end
router.post('/', async(req, res, next) => {
    // Creating a Json object with user provided URL and alias
    const keys = new Keys({
        link: req.body.link,
        key: req.body.key
    });
    const id = req.body.key;
    try {
        // Check if Alias is already present in DB
        let doc = await Keys.find({ key: id });
        if (doc.length > 0) {
            res.status(200).json({
                message: 'Key Already Exits',
                Help: 'Try again with a new Alias'
            });
        } else {
            keys.save().then(doc => {
                res.status(201).json({
                    message: "Key Created"
                });
            }).catch(er => {
                res.status(400).json({
                    error: er
                });
                console.log(`Error occured while saving data in controller.js ${er}`);
            })

        }
    } catch (e) {
        console.log(`Error occured while saving data in controller.js ${e}`);
        res.status(400).json(e);
    }
});

router.get('/:key', async(req, res, next) => {
    const dbkey = req.params.key;
    try {
        let ans = await Keys.find({ key: dbkey });
        if (ans.length > 0) {
            res.status(201).json({
                data: ans[0].link
            })
        } else {
            res.status(200).json({
                message: 'Key Does not exist'
            })
        }
    } catch (e) {
        res.status(400).json(e);
        console.log(`Error occured while getting key from db in Controller ${e}`);
    }
});

module.exports = router;