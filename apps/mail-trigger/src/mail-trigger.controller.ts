import { Controller, Get } from '@nestjs/common';
import { MailTriggerService } from './mail-trigger.service';

@Controller()
export class MailTriggerController {
  constructor(private readonly mailTriggerService: MailTriggerService) {}

  @Get()
  getHello(): string {
    return this.mailTriggerService.getHello();
  }
}
