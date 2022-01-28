import {
  Body,
  CacheInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseInterceptor } from '#infra/common/interceptors/response.interceptor';
import { LoginDto } from '#modules/auth/interfaces/dto/login.dto';
import { LoginUseCase } from '#modules/auth/use-cases/login.use-case';

@UseInterceptors(ResponseInterceptor, CacheInterceptor)
@ApiTags('Auth')
@Controller('auth')
export class AuthHttp {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post('/login')
  @ApiOkResponse()
  login(@Body() loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto);
  }
}
