import { BaseRepository } from "./BaseRepository";
import { Schema } from "mongoose";
import { inject } from "inversify";
import { MongoDbConnection } from "../../config/MongoDbConnection";
import { ProvideSingleton } from "../../inversify/ioc";
import { UserEntity, UserSchema } from "../../entities/UserEntity";

@ProvideSingleton(UserRepository)
export class UserRepository extends BaseRepository<UserEntity> {

  constructor(@inject(MongoDbConnection) protected mongoDbConnection: MongoDbConnection){
    super();
    super.init('Users', UserSchema, mongoDbConnection);
  }

}