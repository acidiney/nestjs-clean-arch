import {
  Args,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { UsersRepository } from '#modules/auth/infra/repositories/users.repository';
import { LoginUseCase } from '#modules/auth/use-cases/login.use-case';
import { Body } from '@nestjs/common';
import { LoginDto } from '#modules/auth/interfaces/dto/login.dto';
import { log } from 'util';

@ObjectType({ description: 'User model' })
class User {
  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly email: string;
}

@Resolver(() => User)
export class UserResolver {
  constructor(private useCase: LoginUseCase) {}

  @Query(() => String)
  index() {
    return 'ok';
  }

  @Mutation(() => User)
  users(@Args('loginDto') loginDto: LoginDto) {
    return this.useCase.execute(loginDto);
  }
}
