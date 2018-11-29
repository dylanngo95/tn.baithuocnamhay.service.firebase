"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const methodOverride = require("method-override");
const routes_1 = require("./routes");
require("./controllers");
const app = express();
const swaggerDocument = require('./swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/docs', express.static(__dirname + '/swagger-ui'));
app.use('/swagger.json', (req, res) => {
    res.sendFile(__dirname + '/swagger.json');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
routes_1.RegisterRoutes(app);
const port = parseInt(process.env.PORT, 10) || 3000;
const server = app.listen(port, () => {
    console.log("Start api with url: http://localhost:" + server.address().port);
});
