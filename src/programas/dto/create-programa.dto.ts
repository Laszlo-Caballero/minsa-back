import { IsNotEmpty, IsNumber, IsBoolean, IsString } from 'class-validator';
export class CreateProgramaDto {
  @IsString()
  @IsNotEmpty()
  nombrePrograma: string;
  @IsString()
  @IsNotEmpty()
  codigo: string;
  @IsNumber()
  @IsNotEmpty()
  duracion: number;
  @IsBoolean()
  @IsNotEmpty()
  estado: boolean;
  @IsString()
  @IsNotEmpty()
  descripcion: string;
  @IsString()
  @IsNotEmpty()
  requisitos: string;
}
