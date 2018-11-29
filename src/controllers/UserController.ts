import { Route, Get, Controller, Tags } from 'tsoa';
import { MUser } from '../models/MUser';
import { ProvideSingleton } from '../ioc';
// import { provideSingleton, inject } from '../inversify/ioc';

@Route('User')
@Tags('Users')
@ProvideSingleton(UserController)
export class UserController extends Controller {

  constructor() {
    super();
  }

  @Get('get')
  public async getUsers(): Promise<MUser> {
    const user: MUser = {
      id: 1,
      name: 'Tinh Ngo',
      address: 'Kinh Mon, Hai Duong',
      age: 20
    };
    return Promise.resolve(user);
  }

}