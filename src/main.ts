import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { MainModule } from './main.module';
import { buildApiDocumentation } from '#infra/configs/documentation';
import { EnvironmentService } from '#infra/configs/environment/environment.service';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(MainModule, {
      cors: true,
    });

    const environmentService = app.get(EnvironmentService);

    await buildApiDocumentation(app, environmentService);

    const $host = environmentService.getApplicationHost();
    const $port = environmentService.getApplicationPort();

    await app.listen($port, $host);
  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false);
    process.exit();
  }
}

bootstrap().catch((e) => {
  throw e;
});
