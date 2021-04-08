import {Controller, Get, UseGuards} from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwt.guard";

@Controller('user')
export class UserController {

    @Get('')
    @UseGuards(JwtGuard)
    public index() {
        return 'test';
    }
}