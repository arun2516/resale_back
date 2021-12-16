const db = require("../mongo");
const {enquiry} = require("../schema");

const service={
    async create(req,res){
        try{
            const{error,value} = enquiry.validate(req.body);
            if(error) return res.send({error:error.details[0].message});

            const data = await db.enquiry.findOne({email:req.body.email});
            if(data) {res.sendStatus(403);}
            else {const { insertedId: _id } = await db.enquiry.insertOne({...value});
            res.send({ ...value, _id });}

        }catch(err){
            console.error("error inserting",err);
            res.sendStatus(500);

        }
    }
}

module.exports=service;