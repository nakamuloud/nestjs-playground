import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { GeneralInterceptor } from './general.interceptor';
import { Requestx } from './request.decorator';

@Controller()
@UseInterceptors(GeneralInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Requestx() req: string): string {
    console.log(req);
    return this.appService.getHello();
  }
}
