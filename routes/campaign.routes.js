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

router.post ('/create', async (req, res, next)=> {
const {CampaignName, place, description, foundsFor} = req.body
  try {
    const campaign = await Campaign.create({
        CampaignName : CampaignName.trim(),
        place : place.trim(),
        description: description,
        // image: image,
        foundsFor : foundsFor,
 })
    
  } catch (error) {
    
  }  
})

// Update a campaign 

 router.put ('/:campaignId', async (req, res, next) => {
    const { campaignId } = req.params
    const {CampaignName, place, image, description, foundsFor, creator, totalAmount } = req.body
    
    const newData = {}

    if(CampaignName !==''){
        newData.CampaignName.trim()
    }

    if(place !==''){
        newData.place = place.trim()
    }

    if(image !==''){
        newData.image = image
    }

    if(description !==''){
        newData.description = description.trim()
    }

    if(foundsFor !==''){
        newData.foundsFor = foundsFor.trim()
    }

    if(creator !==''){
        newData.creator = creator.trim()
    }

    if(totalAmount !=='0'){
        newData.totalAmount = parseFloat(totalAmount)
    }

    try {
     const campaign = await Campaign.findByIdAndUpdate(campaignId, newData)  
    res.status(200).json({message: 'Campaign is updated', id: campaign.id })
    } catch (error) {
        res.status(500).json(error)  
    }
 })

 //Detele a campaign
 router.delete('/:campaignId', async (req, res, next) => {
    const {campaignId} = req.params

await Campaign.findByIdAndDelete(campaignId)
res.status(200).json({message: 'Campaign is updated'})


 })

 module.exports = router
