import { AuthRepository, RegisterUserDto, RegisterUserUseCase, RegisterUserUseCaseResp } from '../..';

export class RegisterUserUseCaseImpl implements RegisterUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(registerUserDto: RegisterUserDto): RegisterUserUseCaseResp {
    const user = await this.authRepository.registerUser(registerUserDto);
    return user;
  }
}
