const express = require("express");
const router = express.Router();
const assignmentCtrl = require("../controllers/assignment");

// ADD AN ASSIGNMENT
router.post("/create",assignmentCtrl.createAssignment);

// UPDATE AN ASSIGNMENT
router.put("/update/:id",assignmentCtrl.updateAssignment);

module.exports = router;