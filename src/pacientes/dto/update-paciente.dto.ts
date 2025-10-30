import { BlobOptions } from 'buffer';

export class UpdatePacienteDto {
  dni?: number;
  nombres?: string;
  apellidos?: string;
  fecha_nacimiento?: Date;
  correo?: string;
  telefono?: number;
  direccion?: string;
}
