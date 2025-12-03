import { Request } from 'express';
import { UserRole } from '../enum/enum';

export interface RequestWithUser extends Request {
  user: {
    userId: number;
    role: UserRole;
  };
}
