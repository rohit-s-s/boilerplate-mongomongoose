const mongoose = require("mongoose");

const connectDB = async (MONG0_URL) => {
  return mongoose
    .connect(MONG0_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("Database connection failed", err));
};

module.exports = connectDB;
