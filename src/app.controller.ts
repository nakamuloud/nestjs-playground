import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { GeneralInterceptor } from './general.interceptor';
import { Context } from './context.decorator';

@Controller()
@UseInterceptors(GeneralInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Context() ctx: string): string {
    console.log(ctx);
    return this.appService.getHello();
  }
}
