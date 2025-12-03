import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AtencionService } from './atencion.service';
import { CreateAtencionDto } from './dto/create-atencion.dto';

@Controller('atencion')
export class AtencionController {
  constructor(private readonly atencionService: AtencionService) {}

  @Post()
  create(@Body() createAtencionDto: CreateAtencionDto) {
    return this.atencionService.create(createAtencionDto);
  }

  @Get()
  findAll() {
    return this.atencionService.findAll();
  }

  @Get('paciente/:dni')
  findByPaciente(@Param('dni') dni: string) {
    return this.atencionService.findByPaciente(+dni);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atencionService.remove(+id);
  }
}
