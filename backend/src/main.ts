import { NestFactory } from '@nestjs/core';
import {ApiModule} from "./modules/api/api.module";
import {ValidationPipe} from "./common/validations/validation.pipe";

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.setGlobalPrefix('/api')

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
