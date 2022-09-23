// internal import
const postTheThumbnail = require("../services/avatar.service");

// post an avatar to DB
const postAThumbnail = (req, res, next) => {
  try {
    const thumbnail = postTheThumbnail(req.file);

    res.status(201).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Inserting thumbnail to DB based on a service",
      data: thumbnail,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = postAThumbnail;
