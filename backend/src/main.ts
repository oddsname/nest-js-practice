import { NestFactory } from '@nestjs/core';
import {ApiModule} from "./modules/api/api.module";
import {ValidationPipe} from "./common/validations/validation.pipe";
import {message} from "./common/console";

async function bootstrap(port) {

  message(`server runs on http://localhost:${3000}`);

  const app = await NestFactory.create(ApiModule);

  app.setGlobalPrefix('/api')

  app.useGlobalPipes(new ValidationPipe());



  await app.listen(port);
}


bootstrap(3000);
