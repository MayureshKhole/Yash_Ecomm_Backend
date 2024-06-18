const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes");
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');

const app = express();

// Define CORS options
const corsOptions = {
  origin: 'https://ecomm-frontend-zeta.vercel.app',
  credentials: true,
};

// Set up CORS middleware with defined options
app.use(cors(corsOptions));

// Handle OPTIONS requests
app.options('*', cors(corsOptions));   // this is the options request (https://chatgpt.com/c/4130e902-b69c-46f5-ac7d-65dcc270daa2)

app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("MongoDB Connected");
    console.log("SERVER IS RUNNING AT PORT : ", PORT);
  });
});
