import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { validate } from '#infra/configs/environment/environment.validations';
import { EnvironmentService } from '#infra/configs/environment/environment.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
  ],
  providers: [
    {
      provide: EnvironmentService,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return new EnvironmentService(configService);
      },
    },
  ],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
