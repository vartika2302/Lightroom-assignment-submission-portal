const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

// REGISTER
module.exports.register = async (req, res, next) => {
  try {
    const emailCheck = await User.findOne({ email: req.body.email });
    if (emailCheck) {
      return next(createError(309, "Email already exists!"));
    } else {
      if (req.body.password === req.body.confirmPassword) {
        try {
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(req.body.password, salt);

          const newUser = new User({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            password: hashedPassword,
            position: req.body.position,
          });

          const savedUser = await newUser.save();
          return res.status(201).json(savedUser);
        } catch (err) {
          return next(err);
        }
      } else {
        return next(createError(400, "Passwords don't match!"));
      }
    }
  } catch (err) {
    return next(err);
  }
};

// LOGIN
module.exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(404, "Email doesn't exist!"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordCorrect) {
      // jwt config
      const token = jwt.sign(
        { id: user._id, position: user.position },
        process.env.JWT_SECRET_KEY
      );

      const { password, ...otherDetails } = user._doc;
      return res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(otherDetails);
    } else {
      return next(createError(400, "Password is incorrect!"));
    }
  } catch (err) {
    return next(err);
  }
};
