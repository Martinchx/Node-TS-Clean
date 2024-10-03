import { userSchema, ZodAdapter } from '../../config';
import { CustomError, UserEntity } from '../../domain';

export class UserMapper {
  static userEntityFromObject(object: Record<string, any>): UserEntity {
    const { errors, validatedData } = ZodAdapter.validate(userSchema, object);

    if (errors) throw CustomError.internalServer('Error processing user data');

    const { id, fullname, email, password, role } = validatedData!;

    return new UserEntity(id, fullname, email, password, role);
  }
}
