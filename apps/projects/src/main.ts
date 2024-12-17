import { NestFactory } from '@nestjs/core';
import { ProjectsModule } from './projects.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjectsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
