import { join } from 'path';

import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import UserModule from '#modules/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [UserModule],
      autoSchemaFile: join(__dirname, 'schema.gpl'),
    }),
  ],
})
export class GraphqlModule {}
