import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import { ErrorHandler } from './ErrorHandler';
import { RegisterRoutes } from '../../build/routes';
import { Logger } from './Logger';
import '../controllers';
import { Constants } from './Constants';

export class Server {
  public app: express.Express = express();
  private readonly port: number = Constants.config.port;

  constructor() {
    this.app.use(this.allowCors);

    // this.app.use(cors({
    //   origin: function (origin, callback) {
    //     if (config.cors.indexOf(origin) !== -1) {
    //       callback(null, true);
    //     } else {
    //       callback(new Error('Not allowed by CORS'));
    //     }
    //   }
    // }));

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev', { skip: () => !Logger.shouldLog }));
    RegisterRoutes(this.app);
    this.app.use(ErrorHandler.handleError);

    const swaggerDocument = require('../../build/swagger/swagger.json');

    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  public async listen(port: number = this.port) {
    process.on('uncaughtException', this.criticalErrorHandler);
    process.on('unhandledRejection', this.criticalErrorHandler);
    const listen = this.app.listen(port);

    Logger.info(`Server running environment: ${Constants.config.environment} and port: ${port}`);
    Logger.info(`Go to http://localhost:${port}`);
    return listen;
  }

  private criticalErrorHandler(...args) {
    Logger.error('Critical Error...', ...args);
    process.exit(1);
  }

  private allowCors(req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, apikey, x-access-token'
    );
    next();
  }

}
