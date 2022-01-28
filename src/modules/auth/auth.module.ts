import { Module } from '@nestjs/common';
import { AuthHttp } from '#modules/auth/interfaces/http/auth.http';
import { UserResolver } from '#modules/auth/interfaces/gql/auth.resolvers';
import { UsersRepository } from '#modules/auth/infra/repositories/users.repository';
import { LoginUseCase } from '#modules/auth/use-cases/login.use-case';
import { PrismaService } from '#infra/configs/database/prisma/prisma.service';

@Module({
  controllers: [AuthHttp],
  providers: [
    UserResolver,
    LoginUseCase,
    {
      provide: UsersRepository,
      inject: [PrismaService],
      useFactory: async (prisma) => {
        return new UsersRepository('users', prisma);
      },
    },
  ],
})
export default class UserModule {}
