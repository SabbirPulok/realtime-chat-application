const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("Server is up and running");
    res.send("Server is up")
})

module.exports = router;