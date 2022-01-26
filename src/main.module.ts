import { Module } from '@nestjs/common';

import { DatabaseModule } from '#infra/configs/database/database.module';
import { EnvironmentModule } from '#infra/configs/environment/environment.module';
import { AuthenticationStrategyModule } from '#infra/configs/authentication-strategy/authentication-strategy.module';
import { ApplicationModule } from '#infra/application/application.module';

@Module({
  imports: [
    EnvironmentModule,
    DatabaseModule,
    AuthenticationStrategyModule,
    ApplicationModule,
  ],
})
export class MainModule {}
