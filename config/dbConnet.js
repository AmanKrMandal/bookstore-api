const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  const url = process.env.URL_KEY;
  try {
    await mongoose.connect(url);
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
