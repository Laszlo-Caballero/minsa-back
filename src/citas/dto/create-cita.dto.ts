import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateCitaDto {
  @IsDate()
  @Type(() => Date)
  fecha_cita: Date;

  @IsString()
  @IsNotEmpty()
  motivo: string;

  @IsNumber()
  @IsPositive()
  pacienteId: number;

  @IsNumber()
  @IsPositive()
  programaId: number;

  @IsNumber()
  @IsPositive()
  obstetraId: number;
}
