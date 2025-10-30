import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';

@Controller('programas')
export class ProgramasController {
  constructor(private programasService: ProgramasService) {}

  @Get()
  getProgramas(): Promise<Programa[]> {
    return this.programasService.getProgramas();
  }
  @Get(':id')
  getPrograma(@Param('id', ParseIntPipe) id: number) {
    return this.programasService.getPrograma(id);
  }
  @Post()
  create(@Body() newPrograma: CreateProgramaDto) {
    return this.programasService.createPrograma(newPrograma);
  }

  @Delete(':id')
  deletePrograma(@Param('id', ParseIntPipe) id: number) {
    return this.programasService.deletePrograma(id);
  }
  @Patch(':id')
  updatePrograma(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    programa: UpdateProgramaDto,
  ) {
    return this.programasService.updatePrograma(id, programa);
  }
}
