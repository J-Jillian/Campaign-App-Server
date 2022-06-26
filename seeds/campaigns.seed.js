const mongoose = require("mongoose");

const CampaignModel = require("../models/Campaign.model");


const campaigns = [
    { CampaignName:"Education is not a luxury of peacetime",
      description: "In 2021, We continued to provide vital services responding to the most pressing needs, supporting children out of school and bringing them back to the educational path, distributing food to the most vulnerable people, and supporting healthcare services in communities and camps.",
      image: "../puplic/images/boy.jpg",
      place: "Syria",
      fundsFor:"educational aid",
      
      totalAmount: 100000,
   },
   { CampaignName:"Stop the Amazon's Massacres",
   description: "We call on you to take urgent measures to stop all attacks against the Yanomami people in the Brazilian Amazon, including putting political and economic pressure on the Brazilian government to ensure the rights of all Indigenous peoples are duly respected. We cannot allow this massacre to continue anymore. Together, your actions can give the Yanomami the assurance that the world won't turn the back on them at this darkest hour.",
   image: "../puplic/images/amazonian.png",
   place: "Amazon",
   fundsFor:"humanitarian aid",
   
},
{ CampaignName:"Tree massacre",
      description: "Majestic forests around the world are being destroyed to produce ever more beef, palm oil, cocoa, timber, and paper. Now legislators in the US are considering new laws to stop forest-killing products from entering their country -- this could transform global supply chains and help save our forests! But with US elections looming we don’t have much time – we need to deliver massive public pressure to lawmakers fast! Add your name to protect our precious forests:",
      image: "../puplic/images/forest.png",
      place: "US",
      fundsFor:"environmental aid",
      
      totalAmount: 10000,
   },
   { CampaignName:"A deafening roar for life on Earth",
      description: `65 million years ago, an asteroid killed 75% of life on Earth.Today we're facing another mass extinction -- but this time, the asteroid is us. 
      Humanity has now destroyed two-thirds of the world's rainforests, half the coral reefs, and 87% of all wetlands. Now a million species are howling on the sharp edge of extinction.
      We couldn't stop the last mass die-off, but we can stop this one. The next five months are critical.
      Governments are busy negotiating a new global deal to save nature, with final talks at the end of August. It means we only have 150 days to ensure leaders follow the science and agree to protect half the planet.`,
      image: "../puplic/images/extinction.png",
      place: "Global",
      fundsFor:"environmental aid",
      totalAmount: 1000000,
   },
   { CampaignName:"Ukraine. NO TO NUCLEAR WAR",
      description: "His Holiness the Dalai Lama, International Physicians for the Prevention of Nuclear War, and other Nobel Peace Prize Laureates have launched a historic call to reject war and nuclear weapons. Now they are asking Avaaz and citizens around the world to join them in protecting our planet.Let's all sign with one click and share now -- when it's huge, they will deliver our voices for peace to key leaders from the Russian Federation, NATO, and the media:",
      image: "../puplic/images/nuclear.png",
      place: "Ukraine",
      fundsFor:"Global",
   },
   { CampaignName:"Urgent message from Ukraine",
      description: "Wall Street is fuelling Putin’s war on Ukraine. Join this urgent call from Svitlana in Ukraine to Wall Street CEOs, demanding they stop doing any business with Russia’s fossil fuel companies. In hours, she will deliver our voices in a hard-hitting ad in the New York Times. Sign Svitlana’s letter below, and share with everyone:",
      image: "../puplic/images/putin.png",
      place: "Ukraine",
      fundsFor:"Ukraine",
   },
   { CampaignName:"BREAKING: bullets are flying",
      description: "This is urgent! The Tanzanian government is seemingly charging ahead with violent evictions of Maasai families, to make way for luxury safari hunts and elite tourism. Horrifying videos show Maasai people running as the bullets fly, and many have gunshot wounds and serious injuries. Massive global public pressure helped stop the eviction plans in the past -- let's do it again. Join 3 million Avaazers now and share the call from Maasai elders with everyone! ",
      image: "../puplic/images/tanza.png",
      place: "Tanzania",
      fundsFor:"environmental aid",
   },
   { CampaignName:"Afghanistan S.O.S.",
      description: "Afghanistan is starving: 23 million people are on the edge of famine and one million children could die this winter. Some are barely surviving on nothing but dry flour. Courageous aid workers are doing all they can, but the scale of suffering is intensifying daily, and many are struggling to cope.",
      image: "../puplic/images/Afghanestan.png",
      place: "Afghanistan",
      fundsFor:"humanitarian aid",
   },
   { CampaignName:"Putin's killers",
      description: "Putin's killers. The killings caused global outrage – but instead of bringing them to justice, Putin gave MEDALS to the soldiers accused of the massacre! Ukraine’s people are alleged to have faced an estimated 10,000 possible war crimes already – executions, rapes and torture at the hands of Russian troops. They need justice -- and we can help to get it. Chip in now -- let’s hold Putin’s killers to account and bring justice to Ukraine:",
      image: "../puplic/images/Ukraine.png",
      place: "Ukraine",
      fundsFor:"humanitarian aid",
   },
   { CampaignName:"Roe v. Wade",
      description: "This is horrifying! The US Supreme Court just stripped millions of the right to a safe and legal abortion! But activists from across the world are fighting back -- and they need our help! Add your name to their open letter and let's make it the biggest call for reproductive rights we've ever seen. Once we get to one million, we’ll publish it in US media -- sign with one click and share now!",
      image: "../puplic/images/aborto.png",
      place: "US",
      fundsFor:"humanitarian aid",
   },
   { CampaignName:"The Maasai are under attack",
   description: "The Maasai's future is going up in flames. They've been terrorised by the Tanzanian government for years -- hundreds of homes have been burnt to the ground. Now the government is even more determined to get rid of them, cutting vital medical services, and threatening to evict thousands of families so a foreign company can expand trophy hunting on Maasai land. The Maasai are cattle herders -- losing their ancestral grasslands in Ngorongoro could push thousands into severe poverty, and they just don't have the money for another legal battle. They're asking for our help.",
   image: "../puplic/images/massai.png",
   place: "Tanzania",
   fundsFor:"humanitarian aid",
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