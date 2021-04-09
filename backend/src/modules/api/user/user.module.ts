import {Module} from '@nestjs/common';
import {UserController} from "./user.controller";
import {FileSystemModule} from "../file-system/file-system.module";

@Module({
    imports: [
        FileSystemModule.forRoot({folder: 'user'})
    ],
    controllers: [UserController],
    providers: [],
})
export class UserModule {
}
