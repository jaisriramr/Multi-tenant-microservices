import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganisationService {
  getHello(): string {
    return 'Hello World!';
  }
}
