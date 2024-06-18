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
app.options('*', cors(corsOptions));   // this is the options request (https://chatgpt.com/c/4130e902-b69c-46f5-ac7d-65dcc270daa2)
app.use(cookieParser())
app.use(express.json())
app.use("/api",router)

app.get('/', (req, res) => {
  res.send('Hello World!');
});




const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Mongodb Connected");
    console.log("SERVER IS RUNNING AT PORT : ", PORT);
  });
});


//Test3@gmail.com 12345678