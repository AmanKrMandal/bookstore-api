const express = require("express");
const dbConnect = require("./config/dbConnet");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./src/route/userRoutes");
const bookRouter = require("./src/route/bookRoutes");

dotenv.config();
const app = express();

dbConnect();

app.use(express.json());

app.use(cors());

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
