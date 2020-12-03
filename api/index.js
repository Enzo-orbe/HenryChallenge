const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const port = 3001
const searchRouter = require("./src/routes/search.js")

server.use(morgan("dev"));
server.use(express.urlencoded({extended: false}))
server.use(express.json());
server.use(cors());

server.use("/api", searchRouter)


server.listen(port, () => {
    console.log(`Server on port 3001`)
})