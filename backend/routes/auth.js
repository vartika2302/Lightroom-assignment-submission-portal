const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authCtrl");

// ROUTE FOR REGISTER 
router.post("/register", authCtrl.register);

// ROUTE FOR LOGIN 
router.post("/login",authCtrl.login);

module.exports = router;
