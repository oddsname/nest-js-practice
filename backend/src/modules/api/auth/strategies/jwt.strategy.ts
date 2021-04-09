import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {ConfigService} from "@nestjs/config";
import {User} from "../../../../entities/user.entity";
import {MongoRepository} from "typeorm";
import {ObjectID} from "mongodb";
import {UnauthorizedException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {JwtService} from "@nestjs/jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
        private configService: ConfigService,
        private jwtService: JwtService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    public generateToken(user: User)
    {
        const payload = {id: user._id, email: user.email};

        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    public async validate(payload: {email: string, id: string}): Promise<User> {
        const objID = new ObjectID(payload.id)
        const user = await this.userRepository.findOne({_id: objID});

        if(user) {
            return user;
        }

        throw new UnauthorizedException("Invalid token")
    }
}