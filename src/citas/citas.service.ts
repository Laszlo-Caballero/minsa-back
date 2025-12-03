import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';
import { Obstetra } from 'src/obstetras/entities/obstetra.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Programa } from 'src/programas/entities/programa.entity';
import { QueryDto } from 'src/pacientes/dto/query.dto';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
    @InjectRepository(Obstetra)
    private obstetraRepository: Repository<Obstetra>,
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
    @InjectRepository(Programa)
    private programaRepository: Repository<Programa>,
  ) {}

  async create(createCitaDto: CreateCitaDto) {
    const { obstetraId, pacienteId, programaId, ...rest } = createCitaDto;

    const findObstetra = await this.obstetraRepository.findOneBy({
      IdObstetra: obstetraId,
    });

    if (!findObstetra) {
      throw new HttpException('Obstetra not found', HttpStatus.NOT_FOUND);
    }

    const findPaciente = await this.pacienteRepository.findOneBy({
      IdPaciente: pacienteId,
    });

    if (!findPaciente) {
      throw new HttpException('Paciente not found', HttpStatus.NOT_FOUND);
    }

    const findPrograma = await this.programaRepository.findOneBy({
      programaId,
    });

    if (!findPrograma) {
      throw new HttpException('Programa not found', HttpStatus.NOT_FOUND);
    }

    const newCita = this.citaRepository.create({
      ...rest,
      estado: 'Activo',
      obstetra: findObstetra,
      paciente: findPaciente,
      programa: findPrograma,
    });

    return this.citaRepository.save(newCita);
  }

  findAll(query: QueryDto) {
    const { search } = query;

    return this.citaRepository.find({
      where: {
        ...(search && {
          citaId: Number(search),
        }),
      },
      relations: {
        obstetra: true,
        paciente: true,
        programa: true,
      },
    });
  }

  async findCitasAsginadas(id: number) {
    return this.citaRepository.find({
      where: {
        obstetra: { IdObstetra: id },
        estado: 'Activo',
      },
      relations: {
        obstetra: true,
        paciente: true,
        programa: true,
      },
    });
  }

  async findOne(id: number) {
    const cita = await this.citaRepository.findOne({
      where: { citaId: id },
      relations: {
        obstetra: true,
        paciente: true,
        programa: true,
      },
    });

    if (!cita) {
      throw new HttpException('Cita not found', HttpStatus.NOT_FOUND);
    }

    return cita;
  }

  async remove(id: number) {
    const cita = await this.citaRepository.findOneBy({ citaId: id });

    if (!cita) {
      throw new HttpException('Cita not found', HttpStatus.NOT_FOUND);
    }
    return this.citaRepository.update(id, { estado: 'Cancelado' });
  }
}
