import { z } from 'zod';

import { LoginUserDto, RegisterUserDto } from '../../../domain';

export const registerUserSchema: z.ZodType<RegisterUserDto> = z.object({
  fullname: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
});

export const loginUserSchema: z.ZodType<LoginUserDto> = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
