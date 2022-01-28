import { CacheModule, Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 60,
      max: 10,
    }),
  ],
})
export class CustomCacheModule {}
