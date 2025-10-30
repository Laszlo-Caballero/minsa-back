import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ReturnDocument } from 'typeorm';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}
  async createPaciente(paciente: CreatePacienteDto) {
    const pacienteFound = await this.pacienteRepository.findOne({
      where: {
        dni: paciente.dni,
      },
    });
    if (pacienteFound) {
      return new HttpException('User alredy exists', HttpStatus.CONFLICT);
    }
    const newPaciente = this.pacienteRepository.create(paciente);
    return this.pacienteRepository.save(newPaciente);
  }
  getPacientes() {
    return this.pacienteRepository.find();
  }
  async getPaciente(id: number) {
    const pacienteFound = await this.pacienteRepository.findOne({
      where: {
        IdPaciente: id,
      },
    });
    if (!pacienteFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  async deletePaciente(id: number) {
    const pacienteFound = await this.pacienteRepository.findOne({
      where: {
        IdPaciente: id,
      },
    });
    if (!pacienteFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.pacienteRepository.delete({ IdPaciente: id });
  }
  async updatePaciente(id: number, paciente: UpdatePacienteDto) {
    const pacienteFound = await this.pacienteRepository.findOne({
      where: {
        IdPaciente: id,
      },
    });
    if (!pacienteFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const updatePaciente = Object.assign(pacienteFound, paciente);
    return this.pacienteRepository.save(updatePaciente);
  }
}
