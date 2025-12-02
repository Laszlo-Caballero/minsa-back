import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateObstetraDto } from './dto/create-obstetra.dto';
import { UpdateObstetraDto } from './dto/update-obstetra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Obstetra } from './entities/obstetra.entity';
import { QueryDto } from 'src/pacientes/dto/query.dto';

@Injectable()
export class ObstetrasService {
  constructor(
    @InjectRepository(Obstetra)
    private obstetraRepository: Repository<Obstetra>,
  ) {}
  async createObstetra(obstetra: CreateObstetraDto) {
    const obstetraFound = await this.obstetraRepository.findOne({
      where: {
        dni: obstetra.dni,
      },
    });
    if (obstetraFound) {
      return new HttpException('User alredy exists', HttpStatus.CONFLICT);
    }
    const newObstetra = this.obstetraRepository.create(obstetra);
    return this.obstetraRepository.save(newObstetra);
  }

  getObstetras(query: QueryDto) {
    const { search } = query;

    return this.obstetraRepository.find({
      where: {
        ...(search && {
          nombres: Like(`%${search}%`),
        }),
      },
    });
  }

  async getObstetra(id: number) {
    const obstetraFound = await this.obstetraRepository.findOne({
      where: {
        IdObstetra: id,
      },
    });
    if (!obstetraFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  async deleteObstetra(id: number) {
    const obstetraFound = await this.obstetraRepository.findOne({
      where: {
        IdObstetra: id,
      },
    });
    if (!obstetraFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.obstetraRepository.delete({ IdObstetra: id });
  }
  async updateObstetra(id: number, obstetra: UpdateObstetraDto) {
    const obstetraFound = await this.obstetraRepository.findOne({
      where: {
        IdObstetra: id,
      },
    });
    if (!obstetraFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const updateObstetra = Object.assign(obstetraFound, obstetra);
    return this.obstetraRepository.save(updateObstetra);
  }
}
