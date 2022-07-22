const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");
const { verifyToken, verifyUser } = require("../utils/verifyToken");

// CHECKING VERIFY TOKEN MIDDLEWARE

// router.get("/checkAuth",verifyToken,(req,res,next)=>{
//     res.send("hello");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Logged in");
// })

// UPDATE A STUDENT
router.put("/update/:id",userCtrl.update);


module.exports = router;