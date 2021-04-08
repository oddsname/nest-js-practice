import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "./auth/auth.module";
import ormConfig from "../../configs/ormconfig";
import {UserModule} from "./user/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        AuthModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class ApiModule {
}
