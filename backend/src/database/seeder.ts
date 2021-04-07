import { NestFactory } from '@nestjs/core';
import {SeederModule} from "./seeder/seeder.module";
import {UserSeederService} from "./seeder/user-seeder.service";

async function bootstrap() {
    NestFactory.createApplicationContext(SeederModule).then((appContext) => {

        const userSeeder = appContext.get(UserSeederService);

        userSeeder.seed().then(() => {
            console.log(
                '\n----------------------------------\n ' +
                'User Seeding Complete ' +
                '\n----------------------------------\n'
            )
        });

        return null;
    });
}
bootstrap();
