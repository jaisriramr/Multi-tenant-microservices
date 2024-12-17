import { Controller, Get } from '@nestjs/common';
import { SprintService } from './sprint.service';

@Controller()
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}

  @Get()
  getHello(): string {
    return this.sprintService.getHello();
  }
}
