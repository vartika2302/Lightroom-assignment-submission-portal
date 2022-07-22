const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const assignmentRoute = require("./routes/assignment");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(cors());
app.use(cookieParser());
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB is disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

// setting up multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

// upload controller
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded!");
});

//middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/assignment", assignmentRoute);

//error handler middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 5000, () => {
  connect();
  console.log("Server is running at port 5000");
});
