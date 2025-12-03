import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { QueryDto } from './dto/query.dto';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get()
  getPacientes(@Query() query: QueryDto): Promise<Paciente[]> {
    return this.pacientesService.getPacientes(query);
  }
  @Get(':id')
  getPaciente(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return this.pacientesService.getPaciente(id);
  }

  @Get('dni/:dni')
  getPacienteByDni(@Param('dni') dni: string) {
    return this.pacientesService.getPacienteByDni(dni);
  }

  @Post()
  create(@Body() newPaciente: CreatePacienteDto) {
    return this.pacientesService.createPaciente(newPaciente);
  }
  @Delete(':id')
  deletePaciente(@Param('id', ParseIntPipe) id: number) {
    return this.pacientesService.deletePaciente(id);
  }
  @Patch(':id')
  updatePaciente(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    paciente: UpdatePacienteDto,
  ) {
    return this.pacientesService.updatePaciente(id, paciente);
  }
}
