import { Global, Module } from '@nestjs/common';
import { PrismaModule } from '#infra/configs/database/prisma/prisma.module';

@Global()
@Module({
  imports: [PrismaModule],
  exports: [PrismaModule],
})
export class DatabaseModule {}
