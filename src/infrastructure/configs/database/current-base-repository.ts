import { IRepository } from '#modules/auth/domain/reposity-interface';

export class CurrentBaseRepository implements IRepository {
  findAll(): Promise<any[]> {
    return Promise.resolve([]);
  }

  findById(id: string): Promise<any> {
    return Promise.resolve(undefined);
  }
}
