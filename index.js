const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes")
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser')


const app = express();
app.use(cors({
  origin : process.env.FRONTEND_URL,
  credentials : true
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api",router)

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Mongodb Connected");
    console.log("SERVER IS RUNNING AT PORT : ", PORT);
  });
});


//Test3@gmail.com 12345678