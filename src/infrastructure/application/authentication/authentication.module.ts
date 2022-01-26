import { Module } from '@nestjs/common';
import { AuthenticationController } from '#infra/application/authentication/controllers/authentication.controller';

@Module({
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
