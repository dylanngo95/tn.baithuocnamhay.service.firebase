import { BaseRepository } from "./BaseRepository";
import { TagEntity, TagShema } from "../../entities/TagEntity";
import { ProvideSingleton, inject } from "../../inversify/ioc";
import { MongoDbConnection } from "../../config/MongoDbConnection";

@ProvideSingleton(TagRepository)
export class TagRepository extends BaseRepository<TagEntity> {
  constructor(@inject(MongoDbConnection) protected mongoDbConnection: MongoDbConnection) {
    super();
    super.init('Tags', TagShema, mongoDbConnection);
  }
}