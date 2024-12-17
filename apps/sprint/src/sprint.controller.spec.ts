import { Test, TestingModule } from '@nestjs/testing';
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';

describe('SprintController', () => {
  let sprintController: SprintController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SprintController],
      providers: [SprintService],
    }).compile();

    sprintController = app.get<SprintController>(SprintController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sprintController.getHello()).toBe('Hello World!');
    });
  });
});
