const express = require("express");
const router = express.Router();
const { body , validationResult } = require("express-validator")
//@route api/users
// router.get("/",(req,res)=>{
//   res.send("user");
// })

router.post("/",[
    body("name","name is required").not().isEmpty(),
    body("email","email is required").isEmail(),
    body("password","password length more then 6 character").isLength({ min: 5 }),
],
(req,res)=>{
   const errors = validationResult(req) ;
  console.log(req.body)
  console.log(errors)
   if(!errors.isEmpty()){
   	return res.status(400).json({error: errors.array()})
   }
   res.send("User Route")
})
module.exports = router;