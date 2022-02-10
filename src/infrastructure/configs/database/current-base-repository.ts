import { BaseRepository } from '#infra/configs/database/prisma/base.repository';
import { IRepository } from '#modules/auth/domain/reposity-interface';

export class CurrentBaseRepository
  extends BaseRepository
  implements IRepository {}
