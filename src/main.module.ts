import { Module } from '@nestjs/common';

import { CustomCacheModule } from '#infra/configs/cache/cache.module';
import { RestModule } from '#infra/configs/interfaces/rest/rest.module';
import { DatabaseModule } from '#infra/configs/database/database.module';
import { EnvironmentModule } from '#infra/configs/environment/environment.module';

@Module({
  imports: [
    EnvironmentModule,
    CustomCacheModule,
    DatabaseModule,
    RestModule.registerAsync(),
  ],
})
export class MainModule {}
