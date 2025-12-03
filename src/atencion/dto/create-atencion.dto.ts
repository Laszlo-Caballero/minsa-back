import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAtencionDto {
  @IsString()
  @IsNotEmpty()
  diagnostico: string;

  @IsString()
  @IsNotEmpty()
  nota_clinica: string;

  @IsNumber()
  @IsNotEmpty()
  citaId: number;
}
