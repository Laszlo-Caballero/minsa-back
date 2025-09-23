import { applyDecorators, UseGuards } from '@nestjs/common';
import { UserRole } from '../enum/enum';
import { Role } from './role.decorator';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { RoleGuard } from '../role.guard';

export const Auth = (role?: UserRole) => {
  return applyDecorators(Role(role), UseGuards(JwtAuthGuard, RoleGuard));
};
