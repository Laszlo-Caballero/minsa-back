import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programa } from './entities/programa.entity';
import { Like, Repository } from 'typeorm';
import { QueryDto } from 'src/pacientes/dto/query.dto';
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
      throw new HttpException('User alredy exists', HttpStatus.CONFLICT);
    }
    const newPrograma = this.programaRepository.create(programa);
    return this.programaRepository.save(newPrograma);
  }
  getProgramas(query: QueryDto) {
    const { search } = query;

    return this.programaRepository.find({
      where: {
        ...(search && {
          nombrePrograma: Like(`%${search}%`),
        }),
      },
    });
  }

  async getPrograma(id: number) {
    const programaFound = await this.programaRepository.findOne({
      where: {
        programaId: id,
      },
    });
    if (!programaFound) {
      throw new HttpException('Program not found', HttpStatus.NOT_FOUND);
    }

    return programaFound;
  }

  async deletePrograma(id: number) {
    const programaFound = await this.programaRepository.findOne({
      where: {
        programaId: id,
      },
    });
    if (!programaFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
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
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const updatePrograma = Object.assign(programaFound, programa);
    return this.programaRepository.save(updatePrograma);
  }
}
