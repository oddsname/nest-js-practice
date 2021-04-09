import {Controller, Get, UseGuards} from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwt.guard";
import {FileSystemService} from "../file-system/file-system.service";

@Controller('user')
export class UserController {

    constructor(
        private fileSystemService: FileSystemService
    ) {

    }

    @Get('')
    @UseGuards(JwtGuard)
    public index() {
        return 'test';
    }
}