const UserModel = require("../models/user");

exports.findUserByEmail = async (email) => {
  try {
    return await UserModel.findOne({ email });
  } catch (error) {
    throw new Error("Error fetching user: " + error.message);
  }
};
