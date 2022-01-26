import { ApiProperty } from '@nestjs/swagger';

export class LoginModel {
  @ApiProperty()
  public readonly accessToken: string;
}
