import { Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '#infra/configs/authentication-strategy/strategies/local.strategy';

@Module({
  imports: [PassportModule],
  providers: [LocalStrategy],
})
export class AuthenticationStrategyModule {}
