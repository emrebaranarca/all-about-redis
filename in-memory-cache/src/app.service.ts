import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}


  //! Cache manager stored data as key-value type
  async setData(username:string):Promise<void>{
    await this.cacheManager.set('user', username);
  }

  async getData():Promise<any>{
    const username= await this.cacheManager.get('user');
    return username
  }

}
