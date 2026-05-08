import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): { status: string; app: string } {
    return { status: 'ok', app: 'Taskflow' };
  }
}
