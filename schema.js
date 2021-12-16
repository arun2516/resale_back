const joi = require("joi");
const schema={
    enquiry:joi.object({
        name:joi.string().min(6).max(20).required(),
        email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        ph_no:joi.string().length(10).pattern(/^[0-9]+$/).required(),
        bike_name:joi.string().min(2).max(30).required(),
        model:joi.string().min(1).max(30).required(),
        manu_yr:joi.number().integer().min(2000).required(),
        reg_yr:joi.number().integer().min(2000).required(),
        engine_cap:joi.number().min(300).required(),
        kms:joi.number().max(50000).required(),
        insurance:joi.string().required(),
        warranty: joi.string().required(),
        no_owner:joi.number().integer().min(1).required(),
        state:joi.string().required(),
        city:joi.string().required(),
        price:joi.number().required(),
        message:joi.string().min(10).max(500).required(),
    }),
    sub_email:joi.object({
        email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    }),
  
}

module.exports=schema;