const router = require("express").Router();
const service = require("../services/email.service");

router.post("/",service.create);

module.exports=router;