import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cita } from 'src/citas/entities/cita.entity';
import { Meta } from 'src/metas/entities/meta.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class InicioService {
  constructor(
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
    @InjectRepository(Meta)
    private metaRepository: Repository<Meta>,
  ) {}

  async findAll(user: { userId: number; role: string }) {
    const { userId } = user;
    const findCitas = await this.citaRepository.find({
      where: {
        obstetra: {
          user: {
            userId,
          },
        },
      },
      order: {
        fecha_cita: 'DESC',
      },
    });

    const countCitasEsteMes = await this.citaRepository.count({
      where: {
        obstetra: {
          user: {
            userId,
          },
        },
        fecha_cita: Between(
          new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        ),
      },
    });

    const countCitasHoy = await this.citaRepository.count({
      where: {
        obstetra: {
          user: {
            userId,
          },
        },
        fecha_cita: new Date(),
      },
    });

    const findLastMetas = await this.metaRepository.find({
      where: {
        estado: 'Activo',
      },
      order: {
        createdAt: 'DESC',
      },
      take: 4,
    });

    return {
      citas: findCitas,
      countCitasEsteMes,
      countCitasHoy,
      metas: findLastMetas,
    };
  }
}
