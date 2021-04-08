import {Injectable} from "@nestjs/common";
import {MongoRepository} from "typeorm";
import {User} from "../../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {message} from "./helpers/seeder.helper";

@Injectable()
export class UserSeederService {

    private userEmail = 'test@mail.com';

    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
    ) {
    }

    public async seed(): Promise<void> {
        await this.userRepository.deleteMany({})

        const user = new User();

        user.name = 'test';
        user.email = this.userEmail;
        user.password = '123';

        await this.userRepository.save([user])
        const newUser = await this.userRepository.findOne({email: this.userEmail})

        message(`User was created: ${JSON.stringify(newUser)}`);
    }
}