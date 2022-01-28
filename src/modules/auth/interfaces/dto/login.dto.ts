import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty()
  password: string;
}
