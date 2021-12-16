const res = require("express/lib/response");
const {ObjectId} = require("mongodb");
const db = require("../mongo");


const service ={
    async findall(req,res){
        try{
            const data = await db.bikes.find().toArray();
            res.send(data);
        }catch(err){
            console.error("error reading",err);
             res.sendStatus(500);
        }

    },
   
    async adventure(req,res){
        try{
            const data = await db.bikes.find({category:"Adventure"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    },
    async cafe (req,res){
        try{
            const data = await db.bikes.find({category:"CafeRacer"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    },
    async cruiser(req,res){
        try{
            const data = await db.bikes.find({category:"Cruiser"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    }, 
    async Sports(req,res){
        try{
            const data = await db.bikes.find({category:"Sports"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    },
    async p1(req,res){
        try{
            const data = await db.bikes.find({price:{$lte:5}}).toArray();
            console.log(data);
            res.send(data);

        }catch(err){
           console.log("error reading",err);
           res.sendStatus(500);
        }
    },
    async p2(req,res){
        try{
            const data = await db.bikes.find({price:{ $gt:5, $lt:10}}).toArray();
            res.send(data);

        }catch(err){
           console.log("error reading",err);
           res.sendStatus(500);
        }
    },
    async p3(req,res){
        try{
            const data = await db.bikes.find({price:{ $gt:10, $lt:15}}).toArray();
            res.send(data);

        }catch(err){
           console.log("error reading",err);
           res.sendStatus(500);
        }
    },
    async p4(req,res){
        try{
            const data = await db.bikes.find({price:{ $gt:15, $lt:20}}).toArray();
            res.send(data);

        }catch(err){
           console.log("error reading",err);
           res.sendStatus(500);
        }
    },
    async p5(req,res){
        try{
            const data = await db.bikes.find({price:{ $gt:20, $lt:25}}).toArray();
            res.send(data);

        }catch(err){
           console.log("error reading",err);
           res.sendStatus(500);
        }
    },
    async triumph(req,res){
        try{
            const data = await db.bikes.find({brand:"Triumph"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    },
    async ducati(req,res){
        try{
            const data = await db.bikes.find({brand:"Ducati"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    }, 
    async harley(req,res){
        try{
            const data = await db.bikes.find({brand:"Harley Davidson"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    },
    async kawasaki(req,res){
        try{
            const data = await db.bikes.find({brand:"Kawasaki"}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    },
    async suzuki(req,res){
        try{
            const data = await db.bikes.find({brand:"Suzuki "}).toArray();
            res.send(data);

        }catch(err){
            console.log("error raeding",err);
            res.sendStatus(500);
        }

    },
    


}

module.exports= service;