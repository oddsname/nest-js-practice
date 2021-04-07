import {Controller, Get, Inject} from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
      private readonly appService: UserService
  ) {}

  @Get()
  getHello() {

    return {
      data: this.appService.getHello()
    }
  }
}
