import { Strategy } from 'passport-local';

import { PassportStrategy } from '@nestjs/passport';
import { UnauthorizedException } from '@nestjs/common';

export class LocalStrategy extends PassportStrategy(Strategy) {
  async validate(
    username: string,
    password: string,
  ): Promise<UnauthorizedException | boolean> {
    if (username !== 'admin' || password !== 'admin') {
      return new UnauthorizedException();
    }
    return true;
  }
}
