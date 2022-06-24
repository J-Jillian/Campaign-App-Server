const mongoose = require("mongoose");

const CampaignModel = require("../models/Campaign.model");


const campaigns = [
    { CampaignName:"Education is not a luxury of peacetime",
      description: "In 2021, We continued to provide vital services responding to the most pressing needs, supporting children out of school and bringing them back to the educational path, distributing food to the most vulnerable people, and supporting healthcare services in communities and camps.",
      image: "../puplic/images/boy.jpg",
      place: "Syria",
      fundsFor:"educational purpose",
      
      totalAmount: 10000,
   },
   { CampaignName:"Stop the Amazon's Massacres",
   description: "We call on you to take urgent measures to stop all attacks against the Yanomami people in the Brazilian Amazon, including putting political and economic pressure on the Brazilian government to ensure the rights of all Indigenous peoples are duly respected. We cannot allow this massacre to continue anymore. Together, your actions can give the Yanomami the assurance that the world won't turn the back on them at this darkest hour.",
   image: "../puplic/images/amazonian.png",
   place: "Amazon",
   fundsFor:"sign a petition",
   
   totalAmount: 1000000,
},
]




const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/fundraising-server";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return CampaignModel.insertMany(campaigns);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    console.log("closing the database")
    mongoose.connection.close();
});