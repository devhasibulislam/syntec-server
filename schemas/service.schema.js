/* external import */
const mongoose = require("mongoose");

/* created model schema */
const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide the product name."],
      unique: [true, "Name exists, provide a new."],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name must not be more than 100 characters."],
    },
    description: {
      type: String,
      required: true,
      minLength: [10, "Name must be at least 3 characters."],
      maxLength: [1000, "Name must not be more than 100 characters."],
    },
    thumbnail: {
      type: String,
      required: [true, "Please post your thumbnail"],
      unique: [true, "Thumbnail exists, provide a new"],
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

const Service = new mongoose.model("Services", serviceSchema);

module.exports = Service;
