import { BaseService } from "./base/BaseService";
import { ContentEntity } from "../entities/index";
import { inject } from "inversify";
import { ContentRepository } from "../repositories/mongo/ContentRepository";
import { ProvideSingleton } from "../inversify/ioc";

@ProvideSingleton(ContentService)
export class ContentService extends BaseService<ContentEntity> {
  constructor(@inject(ContentRepository) protected repository: ContentRepository) {
    super();
  }
}