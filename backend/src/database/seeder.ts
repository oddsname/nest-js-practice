import { NestFactory } from '@nestjs/core';
import {SeederModule} from "./seeder/seeder.module";
import {UserSeederService} from "./seeder/user-seeder.service";




async function bootstrap() {
    NestFactory.createApplicationContext(SeederModule).then(async (appContext) => {

        const userSeeder = appContext.get(UserSeederService);

        await userSeeder.seed();

        await appContext.close();
    });
}
bootstrap();
