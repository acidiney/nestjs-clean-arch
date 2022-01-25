import { Module } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { EnvironmentService } from '#infra/configs/environment/environment.service';
import { EnvironmentModule } from '#infra/configs/environment/environment.module';
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions";

@Module({
  imports: [EnvironmentModule],
})
export class TypeormModule {
  static forRoot(): any {
    return {
      module: TypeormModule,
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          inject: [EnvironmentService],
          useFactory: async (environmentService: EnvironmentService) =>
            await createConnection({
              type: environmentService.getDatabaseClient() as any,
              host: environmentService.getDatabaseHost(),
              port: environmentService.getDatabasePort(),
              username: environmentService.getDatabaseUsername(),
              password: environmentService.getDatabasePassword(),
              database: environmentService.getDatabaseName(),
              entities: [__dirname + '/../**/*.entity{.ts,.js}'],
              synchronize: true,
              logging: environmentService.isDevelopment(),
            }),
        },
      ],
      exports: [],
    };
  }
}
