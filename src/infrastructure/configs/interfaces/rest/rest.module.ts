import { Module } from '@nestjs/common';
import UserModule from '#modules/auth/auth.module';

@Module({
  imports: [UserModule],
})
export class RestModule {}
