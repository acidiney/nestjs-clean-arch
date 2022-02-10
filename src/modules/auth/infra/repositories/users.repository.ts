import { Injectable } from '@nestjs/common';
import { CurrentBaseRepository } from '#infra/configs/database/current-base-repository';

@Injectable()
export class UsersRepository extends CurrentBaseRepository {}
