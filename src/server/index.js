const path = require("path");
const express = require("express");
const publicPath = path.join(__dirname, "../../", "public");
const port = process.env.PORT || 3000;
const helmet = require("helmet");
const cors = require("cors");
const compress = require("compression");

const app = express();

app.use(helmet());

app.use(compress());
app.use(cors());

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => console.log("Server is up on port: ", port));
