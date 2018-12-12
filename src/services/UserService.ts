import { BaseService } from "./base/BaseService";
import { inject } from "inversify";
import { UserRepository } from "../repositories/index";
import { ProvideSingleton } from "../inversify/ioc";
import { UserEntity } from "../entities/index";

@ProvideSingleton(UserService)
export class UserService extends BaseService<UserEntity> {
  constructor(@inject(UserRepository) protected repository: UserRepository ) {
    super();
  }
}