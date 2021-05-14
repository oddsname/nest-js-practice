import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "./auth/auth.module";
import {ormConfig} from "../../configs/ormconfig";
import {UserModule} from "./user/user.module";
import {ConfigModule} from "@nestjs/config";
import {envConfigs} from "../../configs/env";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        ConfigModule.forRoot({
            isGlobal: true,
            load: [envConfigs]
        }),
        AuthModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class ApiModule {
}
