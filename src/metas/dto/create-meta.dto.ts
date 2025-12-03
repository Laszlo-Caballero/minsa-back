import { IsString } from 'class-validator';

export class CreateMetaDto {
  @IsString()
  objetivo: string;
  @IsString()
  descripcion: string;
}
