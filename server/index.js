const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config({ path: "config.env" });
require("./db/conn.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(require("./API/crud"));

const port = 5050;
app.listen(port, () => {
  console.log(`sever is running`);
});
