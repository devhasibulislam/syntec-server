/* internal import */
const {
  postAnUserToServiceForRegister,
  postAnUserToServiceForLogin,
} = require("../services/user.service");

/* insert user to db */
exports.postAnUserToControllerForRegister = async (req, res, next) => {
  try {
    const result = await postAnUserToServiceForRegister(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "User signed up successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* post user to crack out login */
exports.postAnUserToControllerForLogin = async (req, res, next) => {
  try {
    const result = await postAnUserToServiceForLogin(req.body);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "User signed in successfully",
    //   data: result,
    });
  } catch (error) {
    next(error);
  }
};
