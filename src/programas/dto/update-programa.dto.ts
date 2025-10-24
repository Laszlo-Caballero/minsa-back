import { BlobOptions } from 'buffer';

export class UpdateProgramaDto {
  nombrePrograma?: string;
  codigo?: string;
  duracion?: number;
  estado?: boolean;
  descripcion?: string;
  requisitos?: string;
}
