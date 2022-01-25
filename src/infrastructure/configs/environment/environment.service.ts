import { ConfigService } from '@nestjs/config';
import { Environment } from '#infra/configs/environment/enums/enviromnent.enum';

export class EnvironmentService {
  constructor(private $configService: ConfigService) {}

  getAppEnv(): string {
    return this.$configService.get('APP_ENV');
  }

  getApplicationName(): string {
    return this.$configService.get('APP_NAME');
  }

  getApplicationKey(): string {
    return this.$configService.get('APP_KEY');
  }

  public getApplicationHost(): string {
    return this.$configService.get<string>('APP_HOST');
  }

  public getApplicationPort(): number {
    return this.$configService.get<number>('APP_PORT');
  }

  public getAppDebug(): boolean {
    return this.$configService.get<boolean>('APP_DEBUG');
  }

  public getApplicationDescription(): string {
    return this.$configService.get<string>('APP_DESCRIPTION');
  }

  public getApplicationVersion(): string {
    return this.$configService.get<string>('APP_VERSION');
  }

  public getDatabaseHost(): string {
    return this.$configService.get<string>('DATABASE_HOST');
  }

  public getDatabasePort(): number {
    return this.$configService.get<number>('DATABASE_PORT');
  }

  public getDatabaseName(): string {
    return this.$configService.get<string>('DATABASE_NAME');
  }

  public getDatabaseUsername(): string {
    return this.$configService.get<string>('DATABASE_USERNAME');
  }

  public getDatabasePassword(): string {
    return this.$configService.get<string>('DATABASE_PASSWORD');
  }

  public getDatabaseClient(): string {
    return this.$configService.get<string>('DATABASE_CLIENT');
  }

  public getSwaggerUsername(): string {
    return this.$configService.get<string>('SWAGGER_USERNAME');
  }

  public getSwaggerPassword(): string {
    return this.$configService.get<string>('SWAGGER_PASSWORD');
  }

  public isDevelopment(): boolean {
    return this.getAppEnv() === Environment.Development;
  }

  public isProduction(): boolean {
    return this.getAppEnv() === Environment.Production;
  }

  public isTest(): boolean {
    return this.getAppEnv() === Environment.Test;
  }
}
