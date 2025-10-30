import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
export class CreatePacienteDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  dni: number;
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  apellidos: string;
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  fecha_nacimiento: Date;
  @IsString()
  @IsNotEmpty()
  correo: string;
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  telefono: number;
  @IsString()
  @IsNotEmpty()
  direccion: string;
}
