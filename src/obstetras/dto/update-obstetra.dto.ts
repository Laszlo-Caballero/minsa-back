import { BlobOptions } from 'buffer';

export class UpdateObstetraDto {
  dni?: number;
  nombres?: string;
  apellidos?: string;
  fecha_nacimiento?: Date;
  correo?: string;
  telefono?: number;
  CMP?: string;
  especialidad?: string;
  estado?: boolean;
}
