import { UseCase } from '#core/use-case.interface';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '#modules/auth/infra/repositories/users.repository';
import { LoginDto } from '#modules/auth/interfaces/dto/login.dto';

@Injectable()
export class LoginUseCase implements UseCase<LoginDto, any> {
  constructor(private userRepo: UsersRepository) {}

  public async execute(loginDto: LoginDto) {
    return this.userRepo.findById(loginDto.email);
  }
}
