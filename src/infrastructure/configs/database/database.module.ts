import { Module } from '@nestjs/common';
import { TypeormModule } from '#infra/configs/database/typeorm/typeorm.module';

@Module({
  imports: [TypeormModule.forRoot()],
})
export class DatabaseModule {}
