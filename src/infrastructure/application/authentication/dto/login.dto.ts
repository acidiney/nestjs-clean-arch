import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
