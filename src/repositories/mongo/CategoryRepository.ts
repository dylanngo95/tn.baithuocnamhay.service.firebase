import { BaseRepository } from "./BaseRepository";
import { ProvideSingleton, inject } from "../../inversify/ioc";
import { MongoDbConnection } from "../../config/MongoDbConnection";
import { CategoryEntity, CategorySchema } from "../../entities/CategoryEntity";

@ProvideSingleton(CategoryRepository)
export class CategoryRepository extends BaseRepository<CategoryEntity> {
  constructor(@inject(MongoDbConnection) protected mongoDbConnection: MongoDbConnection) {
    super();
    super.init('Categories', CategorySchema, mongoDbConnection);
  }
}