import { NestFactory } from '@nestjs/core';
import { SprintModule } from './sprint.module';

async function bootstrap() {
  const app = await NestFactory.create(SprintModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
