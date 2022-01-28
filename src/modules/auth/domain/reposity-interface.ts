export interface IRepository {
  findAll(): Promise<any[]>;

  findById(id: string): Promise<any>;
}
