const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const campaignSchema = new Schema(
  {
    CampaignName: {
      type: String,
      unique: true,
    },
    description: String,
    image: String,
    place: String,
    case: [{
      type: String,
    }],
    totalAmount: Number,
    creator: [{type: Schema.Types.ObjectId, ref: 'User'}],
    
    donations:[{ 
      Amount: Number,
      Author: [{type: Schema.Types.ObjectId, ref: 'User'}],
    }]   
},
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;
