import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "./auth/auth.module";
import ormConfig from "../../configs/ormconfig";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class ApiModule {
}
