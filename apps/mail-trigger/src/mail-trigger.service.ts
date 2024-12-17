import { Injectable } from '@nestjs/common';

@Injectable()
export class MailTriggerService {
  getHello(): string {
    return 'Hello World!';
  }
}
