import { NestFactory } from '@nestjs/core';
import { OrganisationModule } from './organisation.module';

async function bootstrap() {
  const app = await NestFactory.create(OrganisationModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
