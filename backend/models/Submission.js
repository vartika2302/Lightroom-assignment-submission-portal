const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
  {
    submissionContent: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
    },
    student: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Submission", SubmissionSchema);
