import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //We had taken name into route param
  //We cached redis name data 
  @Get('/set/:name')
  async setName(
    @Param('name') name:string
  ): Promise<void> {    
    await this.appService.setData(name)
  }

  // We got username from redis | You should control redis insight
  @Get('/get')
  async getName(): Promise<any> {
    return await this.appService.getData()
  }
}
