import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../enum/enum';

export const ROLE_KEY = 'role-key';

// desencriptar el token -> guardar el atributo role en tu local storage
export const Role = (role?: UserRole) => SetMetadata(ROLE_KEY, role);

// localStorage.setItem -> SetMetadata
