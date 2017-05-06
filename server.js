const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

const app = express();

const api = require("./server/routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(compression());

app.use("/", express.static(__dirname + '/dist'));
app.use('/js', express.static(__dirname + '/dist/assets/js'));
app.use('/css', express.static(__dirname + '/dist/assets/css'));
app.use("/fonts", express.static(__dirname + '/dist/assets/fonts'));

app.use("/api", api);

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/dist' });
});

const port = process.env.port || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});