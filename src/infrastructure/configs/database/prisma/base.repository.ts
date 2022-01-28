import { IRepository } from '#modules/auth/domain/reposity-interface';
import { PrismaService } from '#infra/configs/database/prisma/prisma.service';

export class BaseRepository implements IRepository {
  constructor(private model: string, private database: PrismaService) {}

  findAll(): Promise<any[]> {
    return this.database[this.model].findMany();
  }

  findById(email: string): Promise<any> {
    return this.database[this.model].findFirst({
      where: {
        email,
      },
    });
  }
}
