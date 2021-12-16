const router = require("express").Router();
const service = require("../services/enquiry.service");

router.post("/",service.create);


module.exports=router;