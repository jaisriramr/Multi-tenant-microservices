import { Test, TestingModule } from '@nestjs/testing';
import { MailTriggerController } from './mail-trigger.controller';
import { MailTriggerService } from './mail-trigger.service';

describe('MailTriggerController', () => {
  let mailTriggerController: MailTriggerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailTriggerController],
      providers: [MailTriggerService],
    }).compile();

    mailTriggerController = app.get<MailTriggerController>(MailTriggerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mailTriggerController.getHello()).toBe('Hello World!');
    });
  });
});
