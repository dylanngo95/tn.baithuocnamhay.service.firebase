import { BaseService } from "./base/BaseService";
import { TagEntity } from "../entities/TagEntity";
import { inject } from "inversify";
import { TagRepository } from "../repositories/mongo/TagRepository";
import { ProvideSingleton } from "../inversify/ioc";

@ProvideSingleton(TagService)
export class TagService extends BaseService<TagEntity> {
  constructor(@inject(TagRepository) protected repository: TagRepository) {
    super();
  }
}