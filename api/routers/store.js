const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const key = require('../models/key');
const Keys = require('../models/key')

router.post('/', async (req, res, next) => {
    const keys = new Keys({
        link: req.body.link,
        key: req.body.key
    });
    const id = req.body.key;
    console.log({ id })
    try {
        let doc = await Keys.find({ key: id });
        console.log(doc);
        if (doc.length > 0) {
            res.status(200).json(
                {
                    message: 'Key Already Exits',
                    Help: 'Try again with a new Key'
                }
            );
        }
        else {

            keys.save().then(doc => {
                res.status(200).json(doc);
                // res.write('Key Added to DB');
            }).catch(er => {
                res.status(400).json({
                    error: er
                });
                console.log(`Error occured while saving data ${er}`);
            })

        }
    }
    catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});


router.get('/:key', async (req, res, next) => {
    const dbkey = req.params.key;
    try {

        let ans = await Keys.find({ key: dbkey });
        if (ans.length > 0) {
            // location.href(ans[0].link);
            res.status(200);
            res.redirect(ans[0].link);
            // (location.href = ans[0].link);
        }
        else {
            res.status(200).json({
                message: 'Key Does not exist'
            })
        }
    }
    catch (e) {
        res.status(400).json(e);
        console.log(`Error occured while getting key from db  ${e}`);
    }
});

module.exports = router;