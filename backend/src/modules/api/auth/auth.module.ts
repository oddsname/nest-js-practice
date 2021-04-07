import {Module} from '@nestjs/common';
import {AuthController} from "./auth.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../../entities/user.entity";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {AuthService} from "./auth.service";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        ConfigModule.forRoot(),
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => ({
                secret: config.get('JWT_SECRET'),
                signOptions: { expiresIn: config.get('JWT_EXPIRES')}
            }),
            inject: [ConfigService]
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {
}
