import { NestFactory } from '@nestjs/core';
import { MailTriggerModule } from './mail-trigger.module';

async function bootstrap() {
  const app = await NestFactory.create(MailTriggerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
