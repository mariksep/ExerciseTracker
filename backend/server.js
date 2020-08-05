const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
//ROUTES
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

app.use(cors());
app.use(express.json());

/**Connects to mongodb*/
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`mongodb database connection established succesfully`);
});
/**end points*/
app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
