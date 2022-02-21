import { Global, Module } from '@nestjs/common';
import { PrismaModule } from '#infra/configs/database/prisma/prisma.module';
import { PrismaService } from '#infra/configs/database/prisma/prisma.service';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [PrismaService],
  exports: [PrismaModule],
})
export class DatabaseModule {}
