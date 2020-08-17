const express = require("express");
const router = express.Router();

//@route api/auth
router.get("/",(req,res)=>{
  res.send("auth")
})

module.exports = router;