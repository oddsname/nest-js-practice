import {BadRequestException, Body, Controller, Get, Post} from "@nestjs/common";
import {LoginDto} from "./dto/login.dto";
import {AuthService} from "./auth.service";
import {ConfigService} from "@nestjs/config";
import {JwtStrategy} from "./strategies/jwt.strategy";
import {RegisterDto} from "./dto/register.dto";


@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private jwtStrategy: JwtStrategy
    ) {
    }

    @Post('login')
    public async login(@Body() loginDto: LoginDto)
    {
        const user = await this.authService.checkCredentials(loginDto.email, loginDto.password);

        if(!user) {
            throw new BadRequestException('Invalid Credentials')
        }

        const {access_token} = this.jwtStrategy.generateToken(user);

        return {
            access_token
        };
    }

    @Post('register')
    public async register(@Body() registerDto: RegisterDto)
    {
        const userWithEmail = await this.authService.findByEmail(registerDto.email);

        if(userWithEmail) {
            throw new BadRequestException('User with this email address already exist')
        }

        const newUser = await this.authService.registerUser(registerDto);

        const {access_token} = this.jwtStrategy.generateToken(newUser);

        return {
            access_token
        };
    }
}