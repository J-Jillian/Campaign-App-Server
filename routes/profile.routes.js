const router = require('express').Router()
const {isAuthenticated} = require ('../middlewares/jwt.middleware')
const Campaign = require ('../models/Campaign.model');
const { route } = require('./campaign.routes');


router.get('/', isAuthenticated, async (req, res, next)=> {
    const creator = req.payload.id;
    const userCapaigns = await Campaign.find({creator})
    res.json(userCapaigns)
})


module.exports = router;