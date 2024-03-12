const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://surajlokhande7744:74473004Ss@cluster0.bezqkj6.mongodb.net/"
      )
      .then(() => console.log("started"));
  } catch (error) {
    res.status(400).json({ massage: "Not Connected" });
  }
};

conn();
