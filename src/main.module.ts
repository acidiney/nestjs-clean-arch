import { Module } from '@nestjs/common';

import { DatabaseModule } from '#infra/configs/database/database.module';
import { EnvironmentModule } from '#infra/configs/environment/environment.module';

@Module({
  imports: [EnvironmentModule, DatabaseModule],
})
export class MainModule {}
