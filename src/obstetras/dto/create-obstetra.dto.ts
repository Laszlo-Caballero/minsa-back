import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateObstetraDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  dni: number;
  @IsString()
  @IsNotEmpty()
  nombres: string;
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
  CMP: string;
  @IsString()
  @IsNotEmpty()
  especialidad: string;
  @IsBoolean()
  @IsNotEmpty()
  @Type(() => Boolean)
  estado: boolean;
}
