import { Module } from '@nestjs/common';
import { AuthHttp } from '#modules/auth/interfaces/http/auth.http';
import { UsersRepository } from '#modules/auth/infra/repositories/users.repository';
import { LoginUseCase } from '#modules/auth/use-cases/login.use-case';

@Module({
  controllers: [AuthHttp],
  providers: [
    LoginUseCase,
    {
      provide: UsersRepository,
      inject: [],
      useFactory: async () => {
        return new UsersRepository();
      },
    },
  ],
})
export default class AuthModule {}
