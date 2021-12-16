const cors = require("cors");
require("dotenv").config();
const express = require("express");
const server = express();

const mongo = require("./mongo");

const bikeroutes = require("./Routes/bikes.routes");
const enquiryroutes = require("./Routes/enquiry.routes");
const emailroutes = require("./Routes/email.routes");



(async ()=>{
    try{

        await mongo.connect();

        server.use(express.json());

        server.use(cors());

        server.use("/bikes",bikeroutes);
        
        server.use("/enquiry",enquiryroutes);

        server.use("/subscriber",emailroutes);

        server.listen(process.env.PORT,(req,res)=>{
            console.log(`server listening at ${process.env.PORT}`);
        });

    }catch(err){
        console.error("error starting our application",err);
    }
})();


