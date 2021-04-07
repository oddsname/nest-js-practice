import {Injectable} from "@nestjs/common";
import {User} from "../../../entities/user.entity";
import {MongoRepository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import bcrypt from "bcrypt"
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
        private jwtService: JwtService
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

    public login(user: User)
    {
        const payload = {id: user.id, email: user.email};

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}