const Campaign = require('../models/Campaign.model')
const router = require('express').Router()

//Get all Campaigns
router.get('/', async (req, res, next) => {
    const campaigns = await Campaign.find()
    res.json(campaigns)
  })

// Get Campaigns details 
router.get('/:campaignId', async(req, res, next)=>{
 const { campaignId } = req.params 

 const campaign = await Campaign.findbyId(campaignId)
 res.json(campaign)
})

//Create a campaign

routr.post ('')