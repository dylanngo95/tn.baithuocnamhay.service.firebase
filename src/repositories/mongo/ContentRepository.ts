import { BaseRepository } from "./BaseRepository";
import { ContentEntity, ContentSchema } from "../../entities/index";
import { ProvideSingleton, inject } from "../../inversify/ioc";
import { MongoDbConnection } from "../../config/MongoDbConnection";

@ProvideSingleton(ContentRepository)
export class ContentRepository extends BaseRepository<ContentEntity> {
  constructor(@inject(MongoDbConnection) protected mongoDbConnection: MongoDbConnection) {
    super();
    super.init('Contents', ContentSchema, mongoDbConnection);
  }
}