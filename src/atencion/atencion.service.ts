import { HttpException, Injectable } from '@nestjs/common';
import { CreateAtencionDto } from './dto/create-atencion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Atencion } from './entities/atencion.entity';
import { Repository } from 'typeorm';
import { Cita } from 'src/citas/entities/cita.entity';

@Injectable()
export class AtencionService {
  constructor(
    @InjectRepository(Atencion)
    private atencionRepository: Repository<Atencion>,
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
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

    return this.atencionRepository.save(newAtencion);
  }

  findAll() {
    return this.atencionRepository.find({ relations: ['cita'] });
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
