import {Injectable} from "@nestjs/common";
import {User} from "../../../entities/user.entity";
import {MongoRepository, ObjectID} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
    ) {
    }

    public async checkCredentials(email: string, password: string): Promise<User|null>
    {
        const user: User|null = await this.userRepository.findOne({email: email})

        if(user && user.checkPassword(password)) {
            return user;
        }

        return null
    }
}