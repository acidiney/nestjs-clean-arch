import { Module } from '@nestjs/common';
import { AuthenticationModule } from '#infra/application/authentication/authentication.module';

@Module({
  imports: [AuthenticationModule],
})
export class ApplicationModule {}
