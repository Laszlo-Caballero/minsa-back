import { Module } from '@nestjs/common';
import { InicioService } from './inicio.service';
import { InicioController } from './inicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meta } from 'src/metas/entities/meta.entity';
import { Cita } from 'src/citas/entities/cita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cita, Meta])],
  controllers: [InicioController],
  providers: [InicioService],
})
export class InicioModule {}
