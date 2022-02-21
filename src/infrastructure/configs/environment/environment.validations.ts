import { plainToClass } from 'class-transformer';

import {
  IsBoolean,
  IsEnum, IsNumber,
  IsNumberString,
  IsString,
  validateSync
} from "class-validator";

import { Environment } from '#infra/configs/environment/enums/enviromnent.enum';
import { SupportedDriversEnum } from '#infra/configs/environment/enums/supported-drivers.enum';

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  APP_HOST: string;

  @IsNumber()
  APP_PORT: number;

  @IsString()
  APP_NAME: string;

  @IsString()
  APP_KEY: string;

  @IsNumber()
  APP_VERSION: number;

  @IsString()
  APP_DESCRIPTION: string;

  @IsBoolean()
  APP_DEBUG: boolean;

  @IsString()
  DATABASE_HOST: string;

  @IsNumber()
  DATABASE_PORT: number;

  @IsString()
  DATABASE_USERNAME: string;

  @IsString()
  DATABASE_PASSWORD: string;

  @IsString()
  DATABASE_NAME: string;

  @IsEnum(SupportedDriversEnum)
  DATABASE_CLIENT: SupportedDriversEnum;

  @IsString()
  SWAGGER_USERNAME: string;

  @IsString()
  SWAGGER_PASSWORD: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
