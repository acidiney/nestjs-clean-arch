import { Body, Controller, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { LoginModel } from '#infra/application/authentication/presenters/swagger/login.model';
import { ApiResponseType } from '#infra/common/documentation/response.swagger';
import { LoginDto } from '#infra/application/authentication/dto/login.dto';

@Controller('auth')
@ApiTags('Authentication')
@ApiExtraModels(LoginModel)
export class AuthenticationController {
  @Post('login')
  @ApiResponseType(LoginModel)
  async login(@Body() loginDto: LoginDto) {
    return {
      message: 'Hello World',
      object: loginDto,
    };
  }

  @Post('reset-password')
  async sendResetPasswordEmail() {
    return {
      message: 'Hello World',
    };
  }

  @Post('change-password')
  async resetPassword() {
    return {
      message: 'Hello World',
    };
  }
}
