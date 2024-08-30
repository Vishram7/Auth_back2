const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", userRoutes);

mongoose
  .connect(
    "mongodb+srv://rvishram17:rvishram17@authdb.oxax2.mongodb.net/?retryWrites=true&w=majority&appName=AuthDB"
  )
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server listining on http://127.0.0.1:${process.env.PORT}`);
    });
  });
