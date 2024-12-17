import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintService {
  getHello(): string {
    return 'Hello World!';
  }
}
