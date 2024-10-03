import { UserMapper } from '..';
import { AuthDatasource, LoginUserDto, RegisterUserDto, UserEntity, UserRole } from '../../domain';

export class AuthDatasourceImpl implements AuthDatasource {
  async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    //TODO: Here implement the database interaction
    const user: UserEntity = {
      id: 1,
      role: UserRole.USER,
      ...registerUserDto,
    };

    return UserMapper.userEntityFromObject(user);
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    //TODO: Here implement the database interaction
    const user: UserEntity = {
      id: 1,
      fullname: 'TODO',
      role: UserRole.USER,
      ...loginUserDto,
    };

    return UserMapper.userEntityFromObject(user);
  }
}
