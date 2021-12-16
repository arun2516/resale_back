const db = require("../mongo");
const {sub_email} = require("../schema");

const service={
    async create(req,res){
        try{
            const{error,value} = sub_email.validate(req.body);
            if(error) return res.send({error:error.details[0].message});

            const data = await db.subscribers.findOne({email:req.body.email});
            if(data) {res.sendStatus(403);}
            else {const { insertedId: _id } = await db.subscribers.insertOne({...value});
            res.send({ ...value, _id });}

        }catch(err){
            console.error("error inserting",err);
            res.sendStatus(500);

        }
    }
}

module.exports=service;