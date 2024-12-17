import { Module } from '@nestjs/common';
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';

@Module({
  imports: [],
  controllers: [SprintController],
  providers: [SprintService],
})
export class SprintModule {}
