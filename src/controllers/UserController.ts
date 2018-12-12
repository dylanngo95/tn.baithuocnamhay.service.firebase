import { Route, Get, Controller, Tags, Post, Body } from 'tsoa';
import { ProvideSingleton, inject } from '../inversify/ioc';
import { UserService } from '../services/index';
import { UserEntity } from '../entities/index';
import { MUserView } from '../views/MUserView';
import * as mongoose from 'mongoose';

@Route('User')
@Tags('users')
@ProvideSingleton(UserController)
export class UserController extends Controller {

  constructor(@inject(UserService) private userService: UserService) {
    super();
  }

  @Get('get')
  public async getUsers(): Promise<MUserView> {
    const user: MUserView = {
      name: 'Tinh Ngo',
      address: 'Kinh Mon, Hai Duong',
      age: 20
    };
    return Promise.resolve(user);
  }

  @Get('{id}')
  public async getById(id: string): Promise<UserEntity> {
    return this.userService.getById(id);
  }

  @Post('add')
  public async create(@Body() body: MUserView): Promise<MUserView> {
    return this.userService.create({_id:  new mongoose.mongo.ObjectId(), ...body});
  }

  @Post('save')
  public async save(@Body() body: MUserView): Promise<MUserView> {
    const userEntity: UserEntity = <UserEntity>body;
    return this.userService.save(userEntity);
  }

}