import { Module } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitasController } from './citas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Obstetra } from 'src/obstetras/entities/obstetra.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Programa } from 'src/programas/entities/programa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cita, Obstetra, Paciente, Programa])],
  controllers: [CitasController],
  providers: [CitasService],
})
export class CitasModule {}
