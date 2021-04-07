import {BadRequestException, Body, Controller, Get, Post} from "@nestjs/common";
import {LoginDto} from "./dto/login.dto";
import {AuthService} from "./auth.service";
import {ConfigService} from "@nestjs/config";


@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) {
    }

    @Post('login')
    public async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.checkCredentials(loginDto.email, loginDto.password);

        if(!user) {
            throw new BadRequestException('Invalid Credentials')
        }

        const {access_token} = this.authService.login(user);

        return {
            access_token
        };
    }
}