import { DynamicModule, Module } from '@nestjs/common';
import { useContext } from '#infra/common/useContext';

@Module({
  imports: [],
})
export class RestModule {
  static async registerAsync(): Promise<DynamicModule> {
    const registeredModules = useContext('../../modules', true, /\.module.js$/);

    const applicationModules = [];

    for (const m of registeredModules) {
      const mod = await import(m);
      applicationModules.push(mod.default);
    }

    return {
      module: RestModule,
      imports: [...applicationModules],
    };
  }
}
