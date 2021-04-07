import {Inject, Injectable} from "@nestjs/common";
import {getMongoManager, MongoRepository} from "typeorm";
import {User} from "../../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserSeederService {
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
    ) {
    }

    public async seed(): Promise<void> {

        const user = new User();

        //TODO: create basic user

        console.log(await this.userRepository.find());
    }
}