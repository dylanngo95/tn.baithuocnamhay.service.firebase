import * as mongoose from 'mongoose';
import { ProvideSingleton } from '../inversify/ioc';
import { Constants } from './Constants';

@ProvideSingleton(MongoDbConnection)
export class MongoDbConnection {
  public db: mongoose.Connection;
  private readonly connectionString: string = Constants.config.mongoConnectionString;

  constructor() {
    this.db = mongoose.createConnection(this.connectionString, {
      useNewUrlParser: true,
      auth: {
        user: Constants.config.userName,
        password: Constants.config.password
      }
    });
  }
}
