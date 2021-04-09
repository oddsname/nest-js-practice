import {BadRequestException, Injectable} from "@nestjs/common";
import {User} from "../../../entities/user.entity";
import {MongoRepository, ObjectID} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {JwtService} from "@nestjs/jwt";
import {RegisterDto} from "./dto/register.dto";

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
    ) {
    }

    public async findByEmail(email: string): Promise<User|null>
    {
        return await this.userRepository.findOne({email: email});
    }

    public async checkCredentials(email: string, password: string): Promise<User|null>
    {
        const user: User|null = await this.findByEmail(email);

        if(user && user.checkPassword(password)) {
            return user;
        }

        return null
    }

    public async registerUser(registerDto: RegisterDto): Promise<User>
    {
        const user = new User();

        user.email = registerDto.email;
        user.password = registerDto.password;
        user.name = registerDto.name;

        return await this.userRepository.save(user)
    }
}