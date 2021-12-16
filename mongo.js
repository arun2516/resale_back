const {MongoClient} = require("mongodb");

const mongo={
    bikes:null,
    enquiry:null,
    subscribers:null,

    async connect(){
        try{
            const client = new MongoClient(process.env.MONGODBURL);
            await client.connect();
            console.log("mongo db connected successfully");

            const db = await client.db(process.env.MONGODB_NAME);
            console.log(`selected database-${process.env.MONGODB_NAME}`);

            this.bikes = db.collection("bikes");
            this.enquiry = db.collection("enquiry");
            this.subscribers = db.collection("subscribers");

        }catch(err){
            console.error("error connecting to mongodb",err);
        }
    },

};

module.exports = mongo;