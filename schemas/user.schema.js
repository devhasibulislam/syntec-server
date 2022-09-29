/* external imports */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// validate email
const validateEmail = function (email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

/* created model schema */
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      unique: [true, "Name exists, provide a new"],
      trim: true,
      minLength: [5, "Contain at least 5 characters"],
      maxLength: [50, "Contain at most 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      validate: [validateEmail, "Please enter a valid email"],
      unique: [true, "Email exists, provide a new"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [5, "Password should be greater than 5 characters"],
      maxLength: [10, "Password should not be greater than 10 characters"],
    },
    avatar: {
      type: String,
      required: [true, "Please post your avatar"],
      unique: [true, "Avatar exists, provide a new"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* middlewares to encrypt password */
userSchema.pre("save", async function (next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
  } catch (error) {
    next(error);
  }
});

userSchema.post("save", async function (next) {
  try {
    console.log("Password encryption successful.");
  } catch (error) {
    next(error);
  }
});

const User = new mongoose.model("Users", userSchema);

module.exports = User;
