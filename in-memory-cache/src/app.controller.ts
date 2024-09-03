import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //We had taken name into route param
  //We cached name data | default TTL:5 second
  @Get('/set/:name')
  async setName(
    @Param('name') name:string
  ): Promise<void> {
    console.log(name);
    
    await this.appService.setData(name)
  }

  // We got username from in memory as cached 
  @Get('/get')
  async getName(): Promise<any> {
    return await this.appService.getData()
  }
}
