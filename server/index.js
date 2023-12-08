const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
// const { MONGO_URL, PORT } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mernauth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected!!')
  });

  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  
  // ... other middleware and route handling
  
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
// app.use(
//   cors({
//     origin: ["http://localhost:4000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);