import { Injectable } from '@nestjs/common';
import { BaseRepository } from '#infra/configs/database/prisma/base.repository';

@Injectable()
export class UsersRepository extends BaseRepository {}
