const User = require("../models/User");
const { createError } = require("../utils/error");
const bcrypt = require("bcryptjs");

// UPDATE 
module.exports.update = async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedUser);
    } catch (err) {
      return next(err);
    }
  } else {
    return next(createError(400, "You can update only your account!"));
  }
};


