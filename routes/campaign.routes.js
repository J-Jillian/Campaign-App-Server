const Campaign = require('../models/Campaign.model')
const router = require('express').Router()
const {isAuthenticated} = require ('../middlewares/jwt.middleware')
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

router.post ('/create', isAuthenticated, async (req, res, next)=> {
const {CampaignName, place, description, foundsFor} = req.body
const creator = req.payload.id
  try {
    const campaign = await Campaign.create({
        CampaignName,
        place, 
        description,
        // image: image,
        foundsFor,
        creator
 })
 res.json(campaign);
    console.log(campaign, "campaña creada en el back") 
  } catch (error) {
    console.log("camapaña no creada en el back", error) 
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
