import { Request, Response } from 'express';

import { ErrorHandlerService } from '..';
import {
  AuthRepository,
  LoginUserDto,
  LoginUserUseCaseImpl,
  RegisterUserDto,
  RegisterUserUseCaseImpl,
} from '../../domain';

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = async (req: Request, res: Response) => {
    const { errors, validatedData } = RegisterUserDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new RegisterUserUseCaseImpl(this.authRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  loginUser = async (req: Request, res: Response) => {
    const { errors, validatedData } = LoginUserDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new LoginUserUseCaseImpl(this.authRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
