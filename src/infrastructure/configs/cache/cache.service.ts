import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  public get(key: string) {
    return this.cacheManager.get(key);
  }

  public set(key: string, value: any) {
    return this.cacheManager.set(key, value);
  }

  public async delete(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }

  public async flush(): Promise<void> {
    await this.cacheManager.reset();
  }
}
