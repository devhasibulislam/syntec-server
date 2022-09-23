// internal import
const postTheAvatar = require("../services/avatar.service");

// post an avatar to DB
const postAnAvatar = (req, res, next) => {
  try {
    const avatar = postTheAvatar(req.file);

    res.status(201).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Inserting avatar to DB based on a user",
      data: avatar,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = postAnAvatar;
