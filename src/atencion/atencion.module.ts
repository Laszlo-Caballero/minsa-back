import { Module } from '@nestjs/common';
import { AtencionService } from './atencion.service';
import { AtencionController } from './atencion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from 'src/citas/entities/cita.entity';
import { Atencion } from './entities/atencion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atencion, Cita])],
  controllers: [AtencionController],
  providers: [AtencionService],
})
export class AtencionModule {}
