import jwt from 'jsonwebtoken';

import { envs } from '..';

const JWT_SECRET = envs.JWT_SECRET;

export class JWTAdapter {
  static async generateToken(payload: Record<string, any>, duration: string = '20d'): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(
        payload,
        JWT_SECRET,
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err) return resolve(null);
          resolve(token!);
        },
      );
    });
  }

  static validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return resolve(null);
        resolve(decoded as T);
      });
    });
  }
}
