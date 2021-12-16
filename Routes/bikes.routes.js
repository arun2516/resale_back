const router = require("express").Router();

const service = require("../services/bikes.services");

router.get("/",service.findall);
router.get("/adventure",service.adventure);
router.get("/cafe",service.cafe);
router.get("/cruiser",service.cruiser);
router.get("/sports",service.Sports);
router.get("/p1",service.p1);
router.get("/p2",service.p2);
router.get("/p3",service.p3);
router.get("/p4",service.p4);
router.get("/p5",service.p5);
router.get("/triumph",service.triumph);
router.get("/ducati",service.ducati);
router.get("/harley",service.harley);
router.get("/kawasaki",service.kawasaki);
router.get("/suzuki",service.suzuki);

module.exports=router;