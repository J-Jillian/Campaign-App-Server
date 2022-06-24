const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: String,
    password: String,
  
    campaignDonated:[{type: Schema.Types.ObjectId, ref: 'Campaign'}],
   
    createdCampaign: [{type: Schema.Types.ObjectId, ref: 'Campaign'}],
    
    FavCampaigns:[{type: Schema.Types.ObjectId, ref: 'Campaign'}], 
 },
    // this second object adds extra properties: `createdAt` and `updatedAt`
   {
     timestamps: true,
   }
  
)


const User = model("User", userSchema);

module.exports = User;
