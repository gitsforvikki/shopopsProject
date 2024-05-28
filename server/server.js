const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const { mongoose } = require("mongoose");

//initialize the express
const app = express();

//config dotenv
dotEnv.config();

//connfog cors
app.use(cors());

//allow exprees to handle with json data
app.use(express.json());

const port = process.env.PORT || 5000;

//mongodb connection configuration
mongoose
  .connect(process.env.MONGODB_CLOUD_URL)
  .then((response) => {
    console.log("MongoDB cloud connected successfully.............!");
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

//config our Routers........................
app.use("/api/user", require("./routers/userRouter"));
app.use("/api/product", require("./routers/productRouter"));
app.use("/api/order", require("./routers/orderRouter"));

//simple request
app.get("/", (request, response) => {
  response.send(`<h2>Welcome to online shoping app</h2>`);
});

//listen the server
app.listen(port, () => {
  console.log(`Server is startting at port: ${port}`);
});
