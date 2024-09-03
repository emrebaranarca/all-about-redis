import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}


  async getData(): Promise<any> {
    const name=this.cacheManager.get('username')
    return name
  }
  async setData(name:string): Promise<void> {
    await this.cacheManager.set('username',name)
  }
}
