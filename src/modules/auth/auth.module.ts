import { Module } from '@nestjs/common';
import { AuthHttp } from '#modules/auth/interfaces/http/auth.http';
import { UsersRepository } from '#modules/auth/infra/repositories/users.repository';
import { LoginUseCase } from '#modules/auth/use-cases/login.use-case';
import { PrismaService } from '#infra/configs/database/prisma/prisma.service';
import { PrismaModule } from '#infra/configs/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AuthHttp],
  providers: [
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
export default class AuthModule {}
