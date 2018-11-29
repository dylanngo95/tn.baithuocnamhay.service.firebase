import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as methodOverride from 'method-override';
import { RegisterRoutes } from './routes';
import "./controllers";

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

RegisterRoutes(app);

const port: Number = parseInt(<string>process.env.PORT, 10) || 3000

const server = app.listen(port, () => {
    console.log("Start api with url: http://localhost:" + (server.address() as any).port);
});