import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationController } from './organisation.controller';
import { OrganisationService } from './organisation.service';

describe('OrganisationController', () => {
  let organisationController: OrganisationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationController],
      providers: [OrganisationService],
    }).compile();

    organisationController = app.get<OrganisationController>(OrganisationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(organisationController.getHello()).toBe('Hello World!');
    });
  });
});
