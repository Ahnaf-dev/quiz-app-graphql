const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require("path");
const app = express();

app.use(cors());

app.listen(port, console.log(`Server running on ${port}`));