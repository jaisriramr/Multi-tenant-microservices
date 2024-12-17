import { Module } from '@nestjs/common';
import { MailTriggerController } from './mail-trigger.controller';
import { MailTriggerService } from './mail-trigger.service';

@Module({
  imports: [],
  controllers: [MailTriggerController],
  providers: [MailTriggerService],
})
export class MailTriggerModule {}
