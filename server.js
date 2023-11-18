require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const clientRoute = require("./routes/clientRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  // origin: 'http://localhost:3000',
  // origin: 'https://travel-manager-app.vercel.app',
  origin: [
    "https://travel-manager-app.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "https://travel-manager-app-jade.vercel.app",
    FRONTEND,
  ], // this is for multiple url you wish
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/clients", clientRoute);
app.get("/", (req, res) => {
  res.send("Hello world, welcome to geodevcodes API, thank you geodevcodes");
});
app.get("/blog", (req, res) => {
  res.send("Hello world, thank you Rasheed blog route");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Node API app is running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
