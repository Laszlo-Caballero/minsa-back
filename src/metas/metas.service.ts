import { HttpException, Injectable } from '@nestjs/common';
import { CreateMetaDto } from './dto/create-meta.dto';
import { UpdateMetaDto } from './dto/update-meta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Meta } from './entities/meta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetasService {
  constructor(
    @InjectRepository(Meta)
    private metasRepository: Repository<Meta>,
  ) {}

  create(createMetaDto: CreateMetaDto) {
    const newMeta = this.metasRepository.create(createMetaDto);

    return this.metasRepository.save(newMeta);
  }

  findAll() {
    return this.metasRepository.find();
  }

  async findOne(id: number) {
    const meta = await this.metasRepository.findOneBy({ metaId: id });

    if (!meta) {
      throw new HttpException('Meta not found', 404);
    }

    return meta;
  }

  async update(id: number, updateMetaDto: UpdateMetaDto) {
    const meta = await this.metasRepository.findOneBy({ metaId: id });

    if (!meta) {
      throw new HttpException('Meta not found', 404);
    }

    await this.metasRepository.update(id, updateMetaDto);

    return this.metasRepository.findOneBy({ metaId: id });
  }

  async remove(id: number) {
    const meta = await this.metasRepository.findOneBy({ metaId: id });

    if (!meta) {
      throw new HttpException('Meta not found', 404);
    }

    await this.metasRepository.update(id, { estado: 'Inactivo' });

    return this.metasRepository.findOneBy({ metaId: id });
  }
}
