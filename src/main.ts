import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { MainModule } from './main.module';
import { buildApiDocumentation } from '#infra/common/documentation';
import { EnvironmentService } from '#infra/configs/environment/environment.service';
import { ResponseInterceptor } from '#infra/common/interceptors/response.interceptor';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(MainModule, {
      cors: true,
    });

    app.useGlobalInterceptors(new ResponseInterceptor());
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
