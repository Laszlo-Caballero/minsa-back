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
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get()
  getPacientes(): Promise<Paciente[]> {
    return this.pacientesService.getPacientes();
  }
  @Get(':id')
  getPaciente(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return this.pacientesService.getPaciente(id);
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
