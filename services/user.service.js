/* internal imports */
const User = require("../schemas/user.schema");
const bcrypt = require("bcryptjs");

/* signed up to db */
exports.postAnUserToServiceForRegister = async (data) => {
  const user = new User(data);
  const result = await user.save();

  return result;
};

/* signed in to db */
exports.postAnUserToServiceForLogin = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (user) {
    const isValidPassword = bcrypt.compareSync(data.password, user.password);
    if (isValidPassword) {
      console.log("Password is correct!");
      return user;
    } else {
      console.log("Password is wrong!");
    }
  } else {
    console.log("User not exist!");
  }
};
