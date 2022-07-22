const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    teacher: {
      type: String,
    },
    content: {
      type: String,
    },
    submissions: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assignment", AssignmentSchema);
