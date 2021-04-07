import {Inject, Injectable} from '@nestjs/common';
import {MongoRepository} from "typeorm";
import {User} from "../../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {

  constructor(
      @InjectRepository(User)
      private userRepository: MongoRepository<User>,
  ) {
  }

  getHello() {
    return this.userRepository.find();
  }
}
