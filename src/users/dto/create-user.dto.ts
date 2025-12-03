import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  role: string = 'obstetra';

  @IsNumber()
  @IsOptional()
  obstetraId: number;
}
