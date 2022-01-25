
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { basicAuth } from '#infra/adapters/libs/basicAuth';
import { Logger } from '@nestjs/common';
import { EnvironmentService } from '#infra/configs/environment/environment.service';

export function buildApiDocumentation(
  app: NestExpressApplication,
  environmentService: EnvironmentService,
): void {
  const appName = environmentService.getApplicationName();
  const appVersion = environmentService.getApplicationVersion();
  const appDescription = environmentService.getApplicationDescription();

  const swaggerUsername = environmentService.getSwaggerUsername();
  const swaggerPassword = environmentService.getSwaggerPassword();

  const options = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(appDescription)
    .setVersion(`v${appVersion}`)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  app.use(
    '/docs',
    basicAuth({
      username: swaggerUsername,
      password: swaggerPassword,
    }),
  );

  SwaggerModule.setup('/docs', app, document);

  Logger.log('Mapped {/docs, GET} Swagger api route', 'RouterExplorer');
}
