const express = require("express");
const router = express.Router();

//@route api/profile
router.get("/",(req,res)=>{
  res.send("Profile")
})

module.exports = router;