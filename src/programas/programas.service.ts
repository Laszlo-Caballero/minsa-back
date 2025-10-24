import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programa } from './entities/programa.entity';
import { Repository, ReturnDocument } from 'typeorm';
@Injectable()
export class ProgramasService {
  constructor(
    @InjectRepository(Programa)
    private programaRepository: Repository<Programa>,
  ) {}

  async createPrograma(programa: CreateProgramaDto) {
    const programaFound = await this.programaRepository.findOne({
      where: {
        nombrePrograma: programa.nombrePrograma,
      },
    });
    if (programaFound) {
      return new HttpException('User alredy exists', HttpStatus.CONFLICT);
    }
    const newPrograma = this.programaRepository.create(programa);
    return this.programaRepository.save(newPrograma);
  }
  getProgramas() {
    return this.programaRepository.find();
  }
  async getPrograma(id: number) {
    const programaFound = await this.programaRepository.findOne({
      where: {
        programaId: id,
      },
    });
    if (!programaFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  async deletePrograma(id: number) {
    const programaFound = await this.programaRepository.findOne({
      where: {
        programaId: id,
      },
    });
    if (!programaFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.programaRepository.delete({ programaId: id });
  }
  async updatePrograma(id: number, programa: UpdateProgramaDto) {
    const programaFound = await this.programaRepository.findOne({
      where: {
        programaId: id,
      },
    });
    if (!programaFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const updatePrograma = Object.assign(programaFound, programa);
    return this.programaRepository.save(updatePrograma);
  }
}
