import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {ConfigService} from "@nestjs/config";
import {User} from "../../../../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {MongoRepository, ObjectID} from "typeorm";
import {UnauthorizedException} from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
        private configService: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }


    public async validate(payload: {email: string, id: string}): Promise<User> {
        const user = await this.userRepository.findOne({
            email: payload.email,
            id: payload.id
        })

        if(user) {
            return user;
        }

        throw new UnauthorizedException(payload, "Invalid token")
    }
}