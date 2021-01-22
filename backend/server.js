const express = require("express");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require("./config/db.js");
const colors = require("colors");

const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use("/api/products", productRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow
      .bold
  )
);
