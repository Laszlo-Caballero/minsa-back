import { HttpException, Injectable } from '@nestjs/common';
import { CreateAtencionDto } from './dto/create-atencion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Atencion } from './entities/atencion.entity';
import { Repository } from 'typeorm';
import { Cita } from 'src/citas/entities/cita.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Injectable()
export class AtencionService {
  constructor(
    @InjectRepository(Atencion)
    private atencionRepository: Repository<Atencion>,
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createAtencionDto: CreateAtencionDto) {
    const { citaId, ...rest } = createAtencionDto;
    const findCita = await this.citaRepository.findOneBy({ citaId });

    if (!findCita) {
      throw new HttpException('Cita not found', 404);
    }

    const newAtencion = this.atencionRepository.create({
      ...rest,
      cita: findCita,
    });

    await this.citaRepository.update(citaId, { estado: 'Atendido' });

    return this.atencionRepository.save(newAtencion);
  }

  findAll() {
    return this.atencionRepository.find({
      relations: {
        cita: {
          paciente: true,
          programa: true,
          obstetra: true,
        },
      },
    });
  }

  async findByPaciente(pacienteId: number) {
    const findPaciente = await this.pacienteRepository.findOneBy({
      dni: pacienteId,
    });

    if (!findPaciente) {
      throw new HttpException('Paciente not found', 404);
    }

    const atenciones = await this.atencionRepository.find({
      where: {
        cita: {
          paciente: {
            dni: pacienteId,
          },
        },
      },
      relations: {
        cita: {
          paciente: true,
          programa: true,
          obstetra: true,
        },
      },
    });

    return atenciones;
  }

  async remove(id: number) {
    const atencion = await this.atencionRepository.findOneBy({
      atencionId: id,
    });

    if (!atencion) {
      throw new HttpException('Atencion not found', 404);
    }

    return this.atencionRepository.update(id, { estado: 'Inactivo' });
  }
}
