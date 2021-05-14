import { Module } from '@nestjs/common';
import {UserSeederService} from "./user-seeder.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../entities/user.entity";
import {ormConfig} from "../../configs/ormconfig";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        TypeOrmModule.forFeature([User])
    ],
    controllers: [],
    providers: [UserSeederService],
    exports:[],
})
export class SeederModule {}