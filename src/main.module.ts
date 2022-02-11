import { Module } from '@nestjs/common';

import { DatabaseModule } from '#infra/configs/database/database.module';
import { EnvironmentModule } from '#infra/configs/environment/environment.module';
import { AuthenticationStrategyModule } from '#infra/configs/authentication-strategy/authentication-strategy.module';
import { RestModule } from '#infra/configs/interfaces/rest/rest.module';
import { CustomCacheModule } from '#infra/configs/cache/cache.module';

@Module({
  imports: [
    EnvironmentModule,
    DatabaseModule,
    RestModule,
    CustomCacheModule,
    AuthenticationStrategyModule,
  ],
})
export class MainModule {}
