import { Controller, Get } from '@nestjs/common';
import { OrganisationService } from './organisation.service';

@Controller()
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  @Get()
  getHello(): string {
    return this.organisationService.getHello();
  }
}
