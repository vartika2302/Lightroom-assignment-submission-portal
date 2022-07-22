const Assignment = require("../models/Assignment");

// CREATE ASSIGNMENT

module.exports.createAssignment = async (req, res, next) => {
  try {
    const newAssignment = new Assignment(req.body);
    const savedAssignment = await newAssignment.save();
    return res.status(201).json(savedAssignment);
  } catch (err) {
    return next(err);
  }
};

// UPDATE ASSIGNMENT

module.exports.updateAssignment = async (req, res, next) => {
  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(204).json(updatedAssignment);
  } catch (err) {
    return next(err);
  }
};

// DELETE AN ASSIGNMENT

module.exports.deleteAssignment = async (req, res, next) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    return res.status(204).json("Assignment deleted successfully!");
  } catch (err) {
    return next(err);
  }
};
