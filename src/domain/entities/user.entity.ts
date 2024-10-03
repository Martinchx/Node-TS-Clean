import { UserRole } from '..';

export class UserEntity {
  constructor(
    public id: number,
    public fullname: string,
    public email: string,
    public password: string,
    public role: UserRole,
  ) {}
}
